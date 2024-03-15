import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import axios from 'axios';
import Reveal from '../reveal/Reveal';
import Form from '../Form';
import Input from '../Input';
import styles from './ContactMethods.module.css';
import TextArea from '../TextArea/TextArea';
import OtherContacts from '../otherContacts/OtherContacts';

function ContactMethods() {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [requestMsg, setRequestMsg] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      const response = await axios.post(`${apiUrl}email/send-email`, inputValues);

      setError(null);
      setRequestMsg(response.data.message);
      setError(null);
    } catch (e) {
      setError('Erro ao tentar enviar mensagem');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.currentTarget;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateInputLength = (input: string) => {
    return input.length > 2;
  };

  const validateForm = () => {
    return (
      validateInputLength(inputValues.name)
      && validateInputLength(inputValues.subject)
      && validateInputLength(inputValues.message)
      && validateEmail(inputValues.email)
    );
  };

  useEffect(() => {
    setIsDisabled(!validateForm());
  }, [inputValues]);

  return (
    <section
      className={ styles.contactMethods }
    >
      <Reveal type="left" delay={ 0.75 } width="50%">
        <Form onSubmit={ handleSubmit }>
          <Input
            type="text"
            name="name"
            handleChange={ handleChange }
            placeHolder="Seu Nome"
          />

          <Input
            type="email"
            name="email"
            handleChange={ handleChange }
            placeHolder="Seu Email"
          />

          <Input
            type="text"
            name="subject"
            handleChange={ handleChange }
            placeHolder="Assunto"
          />

          <TextArea
            id="message"
            name="message"
            handleChange={ handleChange }
            placeHolder="Sua Mensagem"
          />

          {
          requestMsg && <span>{ requestMsg }</span>
          }

          {
            error && <span className={ styles.error }>{error}</span>
          }

          <button
            type="submit"
            disabled={ isDisabled }
          >
            {
                  isLoading ? <AiOutlineLoading3Quarters
                    className={ styles.loading }
                  /> : 'Enviar'
                 }
          </button>

        </Form>
      </Reveal>

      <Reveal delay={ 0.75 } width="fit-content" height="80%">
        <hr />
      </Reveal>

      <Reveal type="right" delay={ 0.75 } width="50%">
        <OtherContacts />
      </Reveal>

    </section>
  );
}

export default ContactMethods;
