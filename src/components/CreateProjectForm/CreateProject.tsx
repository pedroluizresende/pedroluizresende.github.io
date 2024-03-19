import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../Form';
import styles from './CreateProject.module.css';
import Input from '../Input';
import IProject from '../../interfaces/IProject';
import { ICategorie } from '../../interfaces/ICategorie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Autocomplete from '../AutoComplete/Autocomplete';
import { ITag } from '../../interfaces/ITag';
import useFirebase from '../../hooks/useFirebase';

function CreateProject() {
  const { upLoadImage, imgUrl } = useFirebase();
  const [categories, setCategories] = useState<ICategorie[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);
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
  const [searchCategories, setSearchCategories] = useState<string>('');
  const [searchTags, setSearchTags] = useState<string>('');
  const [selectTags, setSelectTags] = useState<string[]>([]);
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3001/categories');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTags = async () => {
    try {
      const response = await axios.get('http://localhost:3001/tags');
      setTags(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchTags();
  }, []);

  const handleImage = (e: FormEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;

    if (files) {
      setImageFile(files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    upLoadImage(imageFile as File);
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    if (event.currentTarget.type === 'checkbox') {
      setProjectFields({
        ...projectFields,
        [name]: event.currentTarget.checked,
      });
      return;
    }

    setProjectFields({
      ...projectFields,
      [name]: value,
    });
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
          handleChange={ handleImage }
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
