import ContactMethods from '../../components/ContactMethods/ContactMethods';
import Reveal from '../../components/reveal/Reveal';
import styles from './Contact.module.css';

function Contact() {
  return (
    <main
      className={ styles.container }
    >

      <Reveal>
        <h1
          id="first-section"
        >
          Ficou interessado no meu trabalho?
        </h1>
      </Reveal>
      <Reveal>
        <h2>
          Vamos conversar!
        </h2>
      </Reveal>
      <ContactMethods />

    </main>
  );
}

export default Contact;
