import { useEffect, useState } from 'react';
import userSWR from 'swr';
import Reveal from '../reveal/Reveal';
import Form from '../Form';
import Input from '../Input';
import styles from './ContactMethods.module.css';
import TextArea from '../TextArea/TextArea';

function ContactMethods() {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

          <button
            type="submit"
            disabled={ isDisabled }
          >
            Enviar
          </button>

        </Form>
      </Reveal>

    </section>
  );
}

export default ContactMethods;
