import "./App.css";
import { Routes, Route } from "react-router-dom";
import EventCardView from "@/features/event-card/views/EventCardView";
import ComboFeedView from "@/features/combo-feed/views/ComboFeedView";
import CompetitionsView from "@/features/competitions/views/CompetitionsView";

function App() {
    return (
        <Routes>
            <Route path="/event-card" element={<EventCardView />} />
            <Route path="/combo-prototypes" element={<ComboFeedView />} />
            <Route path="/competitions" element={<CompetitionsView />} />
        </Routes>
    );
}

export default App;
