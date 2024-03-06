import styles from './Image.module.css';

function Image({ src, alt }: { src: string, alt: string }): JSX.Element {
  return (
    <img className={ styles.image } src={ src } alt={ alt } />
  );
}

export default Image;
