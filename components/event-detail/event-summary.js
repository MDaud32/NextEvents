import { Box, Text } from '@chakra-ui/react';

function EventSummary(props) {
  const { title } = props;

  return (
    <Box w={'full'} h={'40'} bg={'#008b79'}>
      <Text
        pt={3}
        fontSize={80}
        textAlign={'center'}
        textShadow={'2xl'}
        color={'white'}
      >
        {title}
      </Text>
    </Box>
  );
}

export default EventSummary;
