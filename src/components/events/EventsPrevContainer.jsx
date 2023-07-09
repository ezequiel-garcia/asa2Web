/* eslint-disable react/prop-types */
import EventPrev from './EventPrev';
import styles from './EventPrev.module.css';

const EventsPrevContainer = ({ events }) => {
  return (
    <div className={styles['prevEvents-container']}>
      {events?.map((event) => {
        return <EventPrev key={event.id} />;
      })}
    </div>
  );
};

export default EventsPrevContainer;
