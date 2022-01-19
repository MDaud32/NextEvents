import { Text, IconButton, useColorMode, HStack } from '@chakra-ui/react';
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
      <Text
        as='h1'
        fontSize={'3xl'}
        fontWeight={'bold'}
        color={colorMode === 'light' ? 'gray.600' : 'whiteAlpha.900'}
      >
        NextEvents
      </Text>
      <IconButton
        isRound={true}
        icon={colorMode === 'light' ? <FaCloudSun /> : <FaCloudMoon />}
        onClick={toggleColorMode}
        size='lg'
      />
    </HStack>
  );
};

export default Navbar;
