import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';

export const useFirabeStorage = (app: any) => {
  const [imgUrl, setImageUrl] = useState<string>('');
  const storage = getStorage(app);

  const uploadImage = async (file: File, path: string) => {
    const storageRef = ref(storage, path);
    const uploadTask = await uploadBytesResumable(storageRef, file);

    console.log('uploading image', uploadTask.bytesTransferred);
  };

  return { uploadImage, imgUrl };
};

export default useFirabeStorage;
