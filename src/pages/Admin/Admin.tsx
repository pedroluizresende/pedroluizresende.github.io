import useSWR from 'swr';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './Admin.module.css';
import fetcher from '../../utils/fetcher';
import Form from '../../components/Form';
import Input from '../../components/Input';

import 'bootstrap/dist/css/bootstrap.min.css';
import IProject from '../../interfaces/IProject';
import ConfirmBox from '../../components/ConfirmBox/ConfirmBox';

function Admin() {
  const [token, setToken] = useState<string | null>(null);
  const [login, seLogin] = useState(false);
  const [loginFields, setLoginFields] = useState({
    email: '',
    password: '',
  });
  const [toDelete, setToDelete] = useState(false);
  const [idDelete, setIdDelete] = useState< IProject | null >(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}auth/login`;

      const response = await axios.post(url, {
        email: loginFields.email,
        password: loginFields.password,
      });

      if (response.status === 200) {
        setToken(response.data.token);
        seLogin(true);
        localStorage.setItem('token', response.data.token);
      }
    } catch (error) {
      console.log('Erro ao fazer login', error);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await handleLogin();
  };

  const handleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.currentTarget;
    setLoginFields({
      ...loginFields,
      [name]: value,
    });
  };

  const handleMain = async (
    e: ChangeEvent<HTMLInputElement>,
    id: number | undefined,
  ) => {
    try {
      const header = {
        headers: {
          Authorization: token,
        },
      };
      const isChecked = e.target.checked;
      const queryString = isChecked ? '?mainProject=true' : '?mainProject=false';
      const url = `${import.meta.env.VITE_API_URL}projects/main/${id}${queryString}`;

      await axios.put(url, {}, header);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (project: IProject) => {
    setToDelete(true);
    setIdDelete(project);
  };

  const {
    data,
    isLoading,
  } = useSWR(`${import.meta.env.VITE_API_URL}projects`, fetcher);

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem('token');
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
      seLogin(true);
    } else {
      seLogin(false);
    }
  });

  if (!login) {
    return (
      <main className={ styles.container }>

        <Form onSubmit={ handleSubmit }>
          <h1>Login</h1>
          <Input
            handleChange={ handleChange }
            name="email"
            placeHolder="email"
            key="email"
          />
          <Input
            name="password"
            placeHolder="Senha"
            key="password"
            type="password"
            handleChange={ handleChange }
          />
          <button>
            Login
          </button>
        </Form>
      </main>
    );
  }

  if (isLoading) return <h1>Carregando...</h1>;

  return (
    <main className={ styles.container }>
      <h1>Painel Administrativo</h1>
      <button
        className={ styles.addBtn }
        onClick={ () => navigate('/admin/create-project') }
      >
        Adicionar Projeto
      </button>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Principal</th>
            <th aria-label="editar" />
            <th aria-label="deletar" />
          </tr>
        </thead>
        <tbody>
          {
            data.map((project: IProject) => (
              <tr key={ project.title }>
                <td>{project.id}</td>
                <td>{project.title}</td>
                <td aria-label="principal">
                  <input
                    type="checkbox"
                    checked={ project.mainProject }
                    onChange={ (e) => handleMain(e, project.id) }
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className={ styles.ediBtn }
                    aria-label="editar"
                  >
                    <FaEdit />
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    aria-label="deletar"
                    className={ styles.ediBtn }
                    onClick={ () => handleDelete(project) }
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>

      {
        toDelete && <ConfirmBox
          setToDelete={ setToDelete }
          project={ idDelete }
        />
      }
    </main>
  );
}

export default Admin;
