import { Box, useColorModeValue } from '@chakra-ui/react';

function EventContent(props) {
  return (
    <Box
      fontSize={30}
      fontWeight={'bold'}
      color={useColorModeValue('#3a3a3a', 'gray.300')}
      w={'90%'}
      maxW={'40em'}
      m={'auto'}
      mt={'12'}
      textAlign={'center'}
    >
      {props.children}
    </Box>
  );
}

export default EventContent;
