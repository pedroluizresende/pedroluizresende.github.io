import storage from 'firebase/storage';

const upLoadImage = async (file: File) => {
  const storageRef = storage.ref(`images/${file.name}`);
};
const getImageUrl = async () => {

};
