import { createContext, useEffect, useState } from 'react';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const handleError = (error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  swal(errorCode, errorMessage, "error");
};

const handleSuccess = (message) => {
  swal("Success", message, "success");
};

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  const configUser = (user, successMsg) => {
    setUser({
      name: user.displayName,
      email: user.email,
      accessToken: user.accessToken,
    });
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

    onAuthStateChanged(auth, handleUser);
  }, []);

  const registerUser = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUser({name: name});
        configUser(user, 'You are now registered!');
        navigate("/dashboard");
      })
      .catch((error) => {
        handleError(error);
      });
  };

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        configUser(user, 'You are now logged in!');
        navigate('/dashboard');
      })
      .catch((error) => {
        handleError(error);
      });
  };

  const loginWithGoogle = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider)
      .then((userCredential) => {
        const user = userCredential.user;
        configUser(user, "You are now logged in!");
        navigate('/dashboard');
      })
      .catch((error) => {
        handleError(error);
      });
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
  };

  const data = {
    loggedIn,
    user,
    loginWithGoogle,
    logout,
    registerUser,
    updateUser,
    loginUser,
  };

  return (
    <AuthContext.Provider value={data}>
      {/* todo: add an awesome global  */}
      {checkingAuth ? 'loading...' : children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
