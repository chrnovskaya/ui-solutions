import "./App.css";
import EventCard from "./features/event-card/EventCard";

function App() {
    return (
        <div id="center">
            <EventCard count={9} desktop={3} mobile={2} />
            <EventCard count={7} desktop={3} mobile={2} />
            <EventCard count={5} desktop={3} mobile={2} />

            <EventCard count={4} desktop={2} mobile={2} />
            <EventCard count={32} desktop={6} mobile={4} />
        </div>
    );
}

export default App;
