import UsableButton from '../../lib/button';

import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const ResultTitle = (props) => {
  const { date } = props;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  return (
    <Box
      display={'grid'}
      flexDirection={'column'}
      justifyItems={'center'}
      textAlign={'center'}
      py={'8'}
    >
      <Text as='h1' fontSize={'2xl'} fontWeight={'700'} pb={'4'}>
        Events In {humanReadableDate}
      </Text>
      <Box
        fontSize={'lg'}
        fontWeight={700}
        rounded={'full'}
        bg={useColorModeValue('green.400', 'green.400')}
        color={useColorModeValue('gray.800', 'white')}
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
};

export default ResultTitle;
