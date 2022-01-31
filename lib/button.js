import Link from 'next/link';
import { Button } from '@chakra-ui/react';

const UsableButton = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a>{props.children}</a>
      </Link>
    );
  }
  return (
    <Button
      onClick={props.onClick}
      _focus={'none'}
      fontSize={'md'}
      fontWeight={600}
      rounded={'full'}
      bg={'green.400'}
      color={'white'}
      transform={'auto'}
      px='7'
      py='6'
      boxShadow={
        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
      }
      _hover={{
        bg: 'green.500',
        translateY: '1',
      }}
      className='whitespace-nowrap'
      type='submit'
    >
      {props.children}
    </Button>
  );
};

export default UsableButton;
