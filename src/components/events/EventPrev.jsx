/* eslint-disable react/prop-types */
import styles from './EventPrev.module.css';
import { getDateForPrev } from '../../util/dateFunctions';

const EventPrev = ({ event }) => {
  const { date, title, description, image } = event;
  const dateFormat = getDateForPrev(date);

  return (
    // <div className="container">
    <div className={styles.container}>
      <div className={styles.date}>
        <p>{dateFormat.day}</p>
        <p>{dateFormat.month}</p>
      </div>
      <div className={styles['info-container']}>
        <img
          src={image}
          alt="event picture"
          className={styles['event-picture']}
        />
        <div className={styles['description-container']}>
          <h3>{title}</h3>
          <p>
            {description?.length < 55
              ? description
              : description.slice(0, 55) + ' ...'}
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default EventPrev;
