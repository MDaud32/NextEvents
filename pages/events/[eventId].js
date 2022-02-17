import {
  getEventById,
  getFeaturedEvents,
} from '../../components/halper/api-util';
import { Fragment } from 'react';
import EventContent from '../../components/event-detail/event-content';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import UsableButton from '../../lib/button';
import { Box, Text } from '@chakra-ui/react';

const EventsDetail = (props) => {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <Box
        display={'grid'}
        flexDirection={'column'}
        justifyItems={'center'}
        textAlign={'center'}
        py={'8'}
        gap={'4'}
      >
        <Text
          p={'6'}
          bg={'red.300'}
          rounded='lg'
          fontWeight={'semibold'}
          fontSize={'2xl'}
        >
          Loading...
        </Text>
        <Box
          fontSize={'lg'}
          fontWeight={700}
          rounded={'full'}
          bg={'green.400'}
          color={'gray.800'}
          transform={'auto'}
          px='4'
          py='3'
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          _hover={{
            bg: 'green.600',
            translateY: '1',
            color: 'gray.200',
          }}
          _focus={{
            bg: 'green.600',
          }}
          className='whitespace-nowrap'
        >
          <UsableButton link='/events'>Show All Events</UsableButton>
        </Box>
      </Box>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        location={event.location}
        image={event.image}
        imageAlt={event.imageAlt}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};
export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: true,
  };
};

export default EventsDetail;
