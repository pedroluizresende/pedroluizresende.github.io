import styles from './TextArea.module.css';

type TextAreaProps = {
  id: string;
  name: string;
  handleChange: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  placeHolder: string;
};

function TextArea({
  id,
  name,
  handleChange,
  placeHolder,
} : TextAreaProps) {
  return (
    <label
      className={ styles.textArea }
      htmlFor={ name }
    >
      <textarea
        id={ id }
        name={ name }
        onChange={ handleChange }
        aria-labelledby={ `${name}-label` }
        placeholder={ placeHolder }
      />
    </label>
  );
}

export default TextArea;
