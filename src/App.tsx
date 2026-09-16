import "./App.css";
import { Routes, Route } from "react-router-dom";
import EventCardView from "@/features/event-card/views/EventCardView";
import ComboFeedView from "@/features/combo-feed/views/ComboFeedView";

function App() {
    return (
        <Routes>
            <Route path="/event-card" element={<EventCardView />} />
            <Route path="/combo-prototypes" element={<ComboFeedView />} />
        </Routes>
    );
}

export default App;
