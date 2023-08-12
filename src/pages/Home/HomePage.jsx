import styles from "./HomePage.module.css";
import { useState } from "react";
import EventsPrevContainer from "../../components/events/EventsPrevContainer";
import { events } from "../../dummyData";
import SearchBar from "../../components/search/SearchBar";
import Sidebar from "../../components/menus/Sidebar";
import MainContainer from "../../components/ui/MainContainer";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Sidebar />
      <MainContainer>
        <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
        <h2>Upcoming Events</h2>
        <EventsPrevContainer events={filteredEvents} />
        <h2>Previous Events</h2>
        <EventsPrevContainer events={filteredEvents} previous />
      </MainContainer>
    </div>
  );
};

export default HomePage;
