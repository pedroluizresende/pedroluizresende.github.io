import styles from './Input.module.css';

type InputProps = {
  type?: string;
  name: string;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  placeHolder: string;
};

function Input({
  type = 'text',
  name,
  handleChange,
  placeHolder,
}: InputProps) {
  return (
    <label
      htmlFor={ name }
      className={ styles.input }
    >
      <input
        id={ name }
        type={ type }
        name={ name }
        onChange={ handleChange }
        aria-labelledby={ `${name}-label` }
        placeholder={ placeHolder }
      />
    </label>
  );
}

export default Input;
