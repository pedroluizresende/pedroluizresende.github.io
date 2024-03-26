import styles from './Input.module.css';

type InputProps = {
  type?: string;
  name: string;
  handleChange?: ((event: React.FormEvent<HTMLInputElement>) => void)
  | ((event: React.ChangeEvent<HTMLInputElement>) => void);
  placeHolder: string;
  ref?: React.Ref<HTMLInputElement> | null;
  autoComplete?: string;
};

function Input({
  type = 'text',
  name,
  handleChange = undefined,
  placeHolder,
  ref = null,
  autoComplete = 'off',
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
        ref={ ref }
      />
    </label>
  );
}

export default Input;
