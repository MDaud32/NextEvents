import { Box } from '@chakra-ui/react';
import { getFeaturedEvents } from '../components/halper/api-util';
import Head from 'next/head';
import EventsList from '../components/events/event-list';

export default function Home(props) {
  return (
    <Box>
      <Head>
        <title>Next Events</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box>
        <EventsList items={props.events} />
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
}
