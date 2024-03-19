import { ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { storage } from '../firebase';

function useFirebase() {
  const [progressUpdate, setProgressUpdate] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [imgUrl, setImgUrl] = useState<string>('');

  const upLoadImage = async (file: File) => {
    if (file === null) return;
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgressUpdate(progress);
      },
      (error) => {
        setErrorMsg(error.message);
      },
    );
  };

  return {
    upLoadImage,
    progressUpdate,
    errorMsg,
    imgUrl,
  };
}

export default useFirebase;
