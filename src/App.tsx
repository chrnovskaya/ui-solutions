import "./App.css";
import { Routes, Route } from "react-router-dom";
import EventCardView from "@/features/event-card/views/EventCardView";
import ComboPrototypesView from "@/features/combo-feed/views/ComboPrototypesView";

function App() {
    return (
        <Routes>
            <Route path="/event-card" element={<EventCardView />} />
            <Route path="/combo-prototypes" element={<ComboPrototypesView />} />
        </Routes>
    );
}

export default App;
