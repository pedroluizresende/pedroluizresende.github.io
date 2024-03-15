import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import styles from './OtherContacts.module.css';

function OtherContacts() {
  return (
    <section className={ styles.others }>
      <a href="mailto:pedroresendedev@gmail.com" target="_blank" rel="noreferrer">
        <MdEmail />
        <p>
          pedroresendedev@gmail.com
        </p>
      </a>

      <a
        href="https://wa.me/+5511973299835"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
        <p>
          (11) 97329-9835
        </p>
      </a>
      <h3>Redes Socias:</h3>
      <div
        className={ styles.socialMedia }
      >

        <a
          href="https://www.linkedin.com/in/pedro-luiz-resende/"
          target="_blank"
          aria-label="Linkedin"
          rel="noreferrer"
        >
          <FaLinkedin />
          <p>
            Linkedin
          </p>
        </a>
        <a
          href="https://github.com/pedroluizresende"
          target="_blank"
          aria-label="Github"
          rel="noreferrer"
        >
          <FaGithub />
          <p>
            Github
          </p>
        </a>
      </div>

    </section>
  );
}

export default OtherContacts;
