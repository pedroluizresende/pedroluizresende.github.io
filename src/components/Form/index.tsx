import styles from './Form.module.css';

type FormProps = {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

function Form({ children, onSubmit }: FormProps) {
  return (
    <form
      className={ styles.form }
      onSubmit={ onSubmit }
    >
      {children}
    </form>
  );
}

export default Form;
