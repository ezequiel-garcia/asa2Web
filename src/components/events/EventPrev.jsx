import styles from './EventPrev.module.css';

const EventPrev = () => {
  return (
    // <div className="container">
    <div className={styles.container}>
      <div className={styles.date}>
        <p>15</p>
        <p>Aug</p>
      </div>
      <div className={styles['info-container']}>
        <img
          src="https://images.unsplash.com/photo-1614119068601-483274e9dcb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=706&q=80"
          alt="event picture"
          className={styles['event-picture']}
        />
        <div className={styles['description-container']}>
          <h3>Event title</h3>
          <p>Description...</p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default EventPrev;
