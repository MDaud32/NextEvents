import { Box, IconButton, useColorModeValue } from '@chakra-ui/react';

function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <Box
      display={'flex'}
      fontSize={24}
      alignItems={'start'}
      flexDirection={'column'}
      textAlign={'center'}
      color={'#aefff8'}
    >
      <Box>
        <IconButton
          colorScheme={useColorModeValue('white', 'cyan')}
          icon={<Icon />}
        />
      </Box>
      <Box>{props.children}</Box>
    </Box>
  );
}

export default LogisticsItem;
