import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Form from '../Form';
import styles from './CreateProject.module.css';
import Input from '../Input';
import { ICategorie } from '../../interfaces/ICategorie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Autocomplete from '../AutoComplete/Autocomplete';
import { ITag } from '../../interfaces/ITag';
import IProject from '../../interfaces/IProject';
import useFirebaseStorage from '../../hooks/useFirebaseStorage';

function CreateProject() {
  const [categories, setCategories] = useState<ICategorie[]>([]);
  const [tags, setTags] = useState<ITag[]>([]);
  const [projectFields, setProjectFields] = useState({
    title: '',
    description: '',
    image: '',
    link: '',
    tags: '',
    repository: '',
    mainProject: false,
  });
  const [image, setImage] = useState<File | null>(null);
  const [searchCategories, setSearchCategories] = useState<string>('');
  const [searchTags, setSearchTags] = useState<string>('');
  const [selectTags, setSelectTags] = useState<string[]>([]);
  const { handleUpload, imageUrl } = useFirebaseStorage();

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}categories`);
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTags = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}tags`);
      setTags(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchTags();
  }, []);

  const handleInputFile = (event: React.FormEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget;
    if (files) {
      setImage(files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleUpload(image as File);

    const project: IProject = {
      title: projectFields.title,
      description: projectFields.description,
    };
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    if (event.currentTarget.type === 'checkbox') {
      setProjectFields({
        ...projectFields,
        [name]: event.currentTarget.checked,
      });
    } else {
      setProjectFields({
        ...projectFields,
        [name]: value,
      });
    }
  };
  return (
    <main
      className={ styles.createProjectForm }
    >
      <Form
        onSubmit={ handleSubmit }
      >
        <Input
          type="text"
          handleChange={ handleChange }
          name="title"
          placeHolder="Título"
          key="title"
        />

        <Autocomplete
          key="category"
          name="category"
          placeHolder="Categoria"
          data={ categories }
          setValue={ setSearchCategories }
          value={ searchCategories }
          selectTags={ [] }
          setSelectTags={ setSelectTags }
          type="categories"
        />
        <Input
          type="text"
          handleChange={ handleChange }
          name="description"
          placeHolder="Descrição"
          key="description"
        />
        <Input
          type="file"
          handleChange={ handleInputFile }
          name="image"
          placeHolder="Imagem"
          key="image"
        />
        <Input
          type="text"
          handleChange={ handleChange }
          name="link"
          placeHolder="Link"
          key="link"
        />

        <Autocomplete
          type="tags"
          key="tags"
          name="tags"
          placeHolder="Tags"
          data={ tags }
          setValue={ setSearchTags }
          value={ searchTags }
          selectTags={ selectTags }
          setSelectTags={ setSelectTags }
        />

        <Input
          type="text"
          handleChange={ handleChange }
          name="repository"
          placeHolder="Repositório"
          key="repository"
        />
        <Input
          type="checkbox"
          handleChange={ handleChange }
          name="mainProject"
          placeHolder="Projeto Principal"
          key="mainProject"
        />
        <button
          type="submit"

        >
          Enviar
        </button>
      </Form>
    </main>
  );
}

export default CreateProject;
