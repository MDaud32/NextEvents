import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';
import Image from 'next/image';
import { Box, Center, Text, Flex, useColorModeValue } from '@chakra-ui/react';

function EventLogistics(props) {
  const { date, location, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const humanReadbleLocation = location.replace(', ', '\n');
  return (
    <Center>
      <Center
        boxShadow={'lg'}
        borderRadius={'2xl'}
        bg={'#2b2b2b'}
        p={'16'}
        maxW={'55rem'}
        width={'80%'}
        my={'-6'}
        color={'#d5eeeb'}
        display={'flex'}
        justifyContent={'space-between'}
        gap={'14'}
        flexDirection={'row'}
        alignItems={'center'}
        textAlign={'start'}
      >
        <Box
          width={'20rem'}
          h={'20rem'}
          borderWidth={'4px'}
          borderRadius={'full'}
          borderColor={useColorModeValue('white', 'white')}
        >
          <Image
            src={image}
            alt={imageAlt}
            width={340}
            height={340}
            className='rounded-full'
          />
        </Box>
        <Flex flexDirection={'column'} gap={'8'}>
          <LogisticsItem icon={DateIcon}>
            <time>{humanReadableDate}</time>
          </LogisticsItem>
          <LogisticsItem icon={AddressIcon}>
            <Text> {humanReadbleLocation}</Text>
          </LogisticsItem>
        </Flex>
      </Center>
    </Center>
  );
}

export default EventLogistics;
