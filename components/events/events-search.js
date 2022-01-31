import { useRef } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Center,
  useColorModeValue,
  FieldGroup,
} from '@chakra-ui/react';
import React from 'react';
import UsableButton from '../../lib/button';

const EventsSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  };
  return (
    <form onSubmit={submitHandler}>
      <Center my={'12'}>
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyItems={'center'}
          textAlign={'center'}
          alignItems={'end'}
          gap={'4'}
          py={'6'}
          px={'10'}
          rounded={'xl'}
          boxShadow={'md'}
          bg={useColorModeValue('gray.100', 'gray.600')}
        >
          <FormControl>
            <FormLabel htmlFor='year'>Year</FormLabel>
            <Select
              ref={yearInputRef}
              id='year'
              placeholder='Select Year'
              size={'lg'}
              width={'24'}
              _focus={{
                borderColor: 'green.400',
              }}
            >
              <option value='2021'>2021</option>
              <option value='2022'>2022</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='month'>Month</FormLabel>
            <Select
              ref={monthInputRef}
              id='year'
              placeholder='Select Month'
              size={'lg'}
              width={'24'}
              _focus={{
                borderColor: 'green.400',
              }}
            >
              <option value='1'>Jan</option>
              <option value='2'>Feb</option>
              <option value='3'>Mar</option>
              <option value='4'>Apr</option>
              <option value='5'>May</option>
              <option value='6'>June</option>
              <option value='7'>July</option>
              <option value='8'>Aug</option>
              <option value='9'>Sep</option>
              <option value='10'>Oct</option>
              <option value='11'>Nov</option>
              <option value='12'>Dec</option>
            </Select>
          </FormControl>

          <Box pb={'1'} _focus={'none'}>
            <UsableButton>Search</UsableButton>
          </Box>
        </Box>
      </Center>
    </form>
  );
};

export default EventsSearch;
