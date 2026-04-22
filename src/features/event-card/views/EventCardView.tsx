import EventCard from "../EventCard";

const EventCardView: React.FC = () => {
    return (
        <>
            <EventCard count={9} desktop={3} mobile={2} />
            <EventCard count={7} desktop={3} mobile={2} />
            <EventCard count={5} desktop={3} mobile={2} />
            <EventCard count={4} desktop={2} mobile={2} />
            <EventCard count={22} desktop={6} mobile={4} />
        </>
    );
};

export default EventCardView;
