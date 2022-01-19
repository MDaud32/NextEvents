import EventItems from './event-items';

const EventsList = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <EventItems
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          date={item.date}
          location={item.location}
        />
      ))}
    </ul>
  );
};

export default EventsList;
