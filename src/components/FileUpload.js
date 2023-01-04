import React, { createRef, useState } from "react";
import { storage } from "../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { handleError } from "../utils";
import Input from "./Input";

const FileUpload = ({ onSuccess }) => {
  const [file, setFile] = useState(null);
  const progressRef = createRef(null);

  const handleUpload = (e) => {
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        progressRef.current.style.width = `${progress}%`;
      },
      (error) => {
        handleError(error);
        progressRef.current.classList.add("bg-red-900");
      },
      () => {
        // success upload
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          onSuccess(downloadURL);
          setFile("");
        });
      }
    );
  };

  const fileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className='mt-3'>
      <div ref={progressRef} className="bg-green-400 h-2 w-0"></div>
      <Input type="file" onInput={fileChange} onChange={handleUpload} />
    </div>
  );
};

export default FileUpload;
