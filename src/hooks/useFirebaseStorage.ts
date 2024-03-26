import { useState } from 'react';
import { deleteObject, getDownloadURL, ref,
  uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase';

const TIME_OUT = 1000;

function useFirebaseStorage() {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleUpload = async (file: File) => {
    if (file) {
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progressTask = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progressTask);
        },
        (error) => {
          setUploadError(error.message);
        },
        async () => {
          try {
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);

            setTimeout(() => {
              setImageUrl(downloadUrl);
            }, TIME_OUT);
          } catch (error) {
            console.log(error);
          }
        },
      );
    }
  };

  const deleteImage = async (url: string) => {
    const imageRef = ref(storage, url);

    try {
      await deleteObject(imageRef);
      setImageUrl('');
    } catch (error) {
      console.log(error);
    }
  };

  return { imageUrl, progress, uploadError, handleUpload, deleteImage };
}

export default useFirebaseStorage;
