import styles from './HomePage.module.css';
import EventsPrevContainer from '../components/events/EventsPrevContainer';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h2>Upcoming Events</h2>
      <EventsPrevContainer events={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
      <h2>Previous Events</h2>
      <EventsPrevContainer events={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
    </div>
  );
};

export default HomePage;
