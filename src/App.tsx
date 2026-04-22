import "./App.css";
import { Routes, Route } from "react-router-dom";
import EventCardView from "@/features/event-card/views/EventCardView";

function App() {
    return (
        <Routes>
            <Route path="/event-card" element={<EventCardView />} />
        </Routes>
    );
}

export default App;
