import { ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { storage } from '../firebase';

function useFirebase(file: File) {
  const [progress, setProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [imgUrl, setImgUrl] = useState<string>('');

  const uploadImage = () => {
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setErrorMsg(null);
      },
      (error) => {
        setErrorMsg(error.message);
      },
      () => {
        setImgUrl(imgUrl);
      },
    );
  };

  return {
    uploadImage,
    progress,
    errorMsg,
  };
}

export default useFirebase;
