import IProject from '../../interfaces/IProject';
import styles from './ConfirmBox.module.css';

type IProps = {
  project: IProject | null,
  setToDelete(toDelete: boolean): void
};

function ConfirmBox({
  project,
  setToDelete,
}: IProps) {
  const handleDelete = () => {
    setToDelete(false);
  };

  if (project) {
    return (
      <div className={ styles.confirmBox }>
        <p>
          Você esta deletando o projeto,
          {' '}
          {project.title}
          {' '}
          Tem certeza disso?
        </p>

        <div>
          <button>sim</button>
          <button
            type="reset"
            onClick={ () => setToDelete(false) }
          >
            não
          </button>

        </div>

      </div>
    );
  }
}

export default ConfirmBox;
