import styles from './styles.module.scss';
import contactsIcon from 'icons/icons8-person-30.png';
import calendarIcon from 'icons/icons8-calendar-24.png';
import tasksIcon from 'icons/icons8-task-24.png';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

function ProfileNavBar() {
  const { projectId, taskId } = useParams();

  return (
    <div className={styles.wrapper}>
      <Link className={styles.contactsIconWrapper} to='projects'>
        <div>
          <img className={styles.contactsIcon} src={contactsIcon} alt='contacts-icon' />
        </div>
      </Link>

      <div className={styles.calendarIconWrapper}>
        <img className={styles.calendarIcon} src={calendarIcon} alt='calendar-icon' />
      </div>
      <Link
        className={classNames(styles.contactsIconWrapper, styles.taskIconWrapper, {
          [styles.taskIconWrapperActive]: taskId,
        })}
        to={`/profile/projects/${projectId}/all-tasks`}
      >
        <div>
          <img className={styles.contactsIcon} src={tasksIcon} alt='contacts-icon' />
        </div>
      </Link>
    </div>
  );
}

export default ProfileNavBar;
