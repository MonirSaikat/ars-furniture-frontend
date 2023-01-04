import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/use-localstorage';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  updateProfile,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { handleSuccess, handleError } from "../utils";
import Loader from '../components/Loader';
import { checkAuth, loginUserByEmailAndPassword, registerUserByEmailAndPassword } from '../services/auth-service';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [token, setToken] = useState(null);
  const [savedToken, setSavedToken] = useLocalStorage('token');
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  const configUser = (user, successMsg) => {
    setUser(user);
    setLoggedIn(true);

    if (successMsg) handleSuccess(successMsg);
  };

  useEffect(() => {
    const handleUser = (user) => {
      if (!user) {
        setCheckingAuth(false);
        return;
      }

      configUser(user);
      setCheckingAuth(false);
    };

    // set token from local storage
    if(savedToken) setToken(savedToken);

    // onAuthStateChanged(auth, handleUser);
    checkAuth()
      .then(user => {
        handleUser(user);
      })
  }, [auth]);

  const registerUser = (...props) => {
    registerUserByEmailAndPassword(...props)
      .then(user => {
        console.log(user);
      });
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     updateUser({name: name});
    //     configUser({name: user.displayName, email: user.email}, 'You are now registered!');
    //     navigate("/dashboard");
    //   })
    //   .catch((error) => {
    //     handleError(error);
    //   });
  };

  const loginUser = (email, password) => {
    loginUserByEmailAndPassword(email, password)
      .then(({ user }) => {
        configUser(user);
      });
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     configUser(user, 'You are now logged in!');
    //     navigate('/dashboard');
    //   })
    //   .catch((error) => {
    //     handleError(error);
    //   });
  };

  const loginWithGoogle = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider)
      .then((userCredential) => {
        const user = userCredential.user;
        configUser({name: user.displayName, email: user.email}, "You are now logged in!");
        navigate('/dashboard');
      })
      .catch((error) => {
        handleError(error);
      });
  };

  const loginWithFacebook = () => {
    const fbAuthProvider = new FacebookAuthProvider();
    signInWithPopup(auth, fbAuthProvider)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch(error => {
        handleError(error);
      })
  };

  const updateUser = ({name}) => {
    const { currentUser } = auth;
    updateProfile(currentUser, {
      displayName: name,
    })
      .then(() => {
        setUser(prevUser => ({...prevUser, name}));
        handleSuccess('Profile updated');
      })
      .catch((error) => {
        handleError(error);
      });

  };

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        setLoggedIn(false);
      });
    localStorage.removeItem('token');
  };

  const data = {
    loggedIn,
    user,
    loginWithGoogle,
    logout,
    registerUser,
    updateUser,
    loginUser,
    loginWithFacebook,
    token
  };

  return (
    <AuthContext.Provider value={data}>
      {/* todo: add an awesome global  */}
      {checkingAuth ? <Loader /> : children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
