import { Text, IconButton, useColorMode, HStack, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { FaCloudSun, FaCloudMoon } from 'react-icons/fa';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      justifyContent={'space-between'}
      p={4}
      bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
      boxShadow={'md'}
    >
      <Link href='/'>
        <a>
          <Text
            as='h1'
            fontSize={'3xl'}
            fontWeight={'bold'}
            color={colorMode === 'light' ? 'gray.600' : 'whiteAlpha.900'}
          >
            NextEvents
          </Text>
        </a>
      </Link>
      <Box display={'flex'} flexDirection={'row'} gap={'6'}>
        <Link href='/events'>
          <a>
            <Text
              as='h1'
              fontSize={'3xl'}
              fontWeight={'bold'}
              color={colorMode === 'light' ? 'gray.600' : 'whiteAlpha.900'}
            >
              All Events
            </Text>
          </a>
        </Link>

        <IconButton
          isRound={true}
          icon={colorMode === 'light' ? <FaCloudSun /> : <FaCloudMoon />}
          onClick={toggleColorMode}
          size='lg'
          _focus={'none'}
        />
      </Box>
    </HStack>
  );
};

export default Navbar;
