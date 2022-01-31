import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react';
import Image from 'next/image';
import UsableButton from '../../lib/button';

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
    <Center key={id} alignItems={'center'} py='12'>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('gray.300', 'gray.400')}
        boxShadow={'2xl'}
        rounded={'xl'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'xl'}
          mt={-10}
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
          <Heading
            fontSize={'xl'}
            fontFamily={'body'}
            fontWeight={500}
            color={useColorModeValue('gray.900', 'gray.700')}
          >
            {humanReadbleDate}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text
              fontWeight={700}
              fontSize={'lg'}
              color={useColorModeValue('gray.700', 'gray.900')}
            >
              {formatLocation}
            </Text>
            <Box
              fontSize={'md'}
              fontWeight={600}
              rounded={'full'}
              bg={useColorModeValue('green.500', 'green.400')}
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
              <UsableButton link={exploreLink}>Explore Event</UsableButton>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default EventItems;
