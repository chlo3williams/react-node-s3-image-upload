import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import axiosClient from '../config/axios';

const useMutation = ({ url, method = 'POST' }) => {
  const toast = useToast();
  const [state, setState] = useState({
    isLoading: false,
    error: '',
  });

  const fn = async data => {
    setState(prev => ({ ...prev, isLoading: true }));

    axiosClient({ url, method, data })
      .then(() => {
        setState({ isLoading: false, error: '' });
        toast({
          title: 'Success',
          description: 'Image uploaded successfully',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      })
      .catch(error => {
        setState({ isLoading: false, error: error.message });
      });
  };

  return { mutate: fn, ...state };
};

export default useMutation;
