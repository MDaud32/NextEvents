import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react';
import Image from 'next/image';
import Button from '../../lib/button';

const EventItems = (props) => {
  const { title, image, date, location, id } = props;
  const humanReadbleDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formatLocation = location.replace(', ', '\n');

  const exploreLink = `/events/${id}`;
  return (
    <Center key={id} mt={4} alignItems={'center'} py='12'>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('gray.200', 'gray.400')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            src={image}
            alt='this is blog image'
            height={230}
            width={282}
            className='object-cover rounded-xl'
          />
        </Box>

        <Stack pt={10} align={'center'}>
          <Heading
            color={'gray.600'}
            fontSize={'lg'}
            textTransform={'uppercase'}
          >
            {title}
          </Heading>
          <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
            {humanReadbleDate}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={600} fontSize={'lg'}>
              {formatLocation}
            </Text>
            <Box
              fontSize={'sm'}
              fontWeight={600}
              rounded={'full'}
              bg={useColorModeValue('blue.600', 'blue.400')}
              color={'white'}
              px='4'
              py='3'
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              className='whitespace-nowrap'
            >
              <Button link={exploreLink}>Explore Event</Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default EventItems;
