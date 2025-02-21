import {
  Box,
  Button,
  Text,
  Input,
  CircularProgress,
  SimpleGrid,
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import useMutation from '../hooks/useMutation';
import useQuery from '../hooks/useQuery';

const validFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
const URL = '/images';

const ErrorText = ({ children, ...props }) => (
  <Text fontSize="lg" color="red.300" {...props}>
    {children}
  </Text>
);

const Posts = () => {
  const {
    mutate: uploadImage,
    isLoading: uploading,
    error: uploadError,
  } = useMutation({ url: URL });
  const [error, setError] = useState('');

  const {
    data: imageUrls = [],
    isLoading: imagesLoading,
    error: fetchError,
  } = useQuery(URL);

  const handleImageUpload = async e => {
    const file = e.target.files[0];

    if (!validFileTypes.find(type => type === file.type)) {
      setError('Invalid file type. Please upload a JPEG or PNG image.');
      return;
    }

    const form = new FormData();
    form.append('image', file);

    await uploadImage(form);
  };

  return (
    <Box mt={6}>
      <Input id="imageInput" type="file" hidden onChange={handleImageUpload} />
      <Button
        as="label"
        htmlFor="imageInput"
        colorScheme="blue"
        variant="outline"
        mb={4}
        cursor="pointer"
        isLoading={uploading}
      >
        Upload
      </Button>
      {error && <ErrorText>{error}</ErrorText>}
      {uploadError && <ErrorText>{uploadError}</ErrorText>}
      <Text textAlign="left" mb={4}>
        Posts
      </Text>
      {imagesLoading && (
        <CircularProgress
          color="gray.600"
          trackColor="blue.300"
          size={7}
          thickness={10}
          isIndeterminate
        />
      )}
      {fetchError && (
        <ErrorText textAlign="left">Failed to load images</ErrorText>
      )}
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {imageUrls?.map(url => (
          <Image src={url} key={url} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default Posts;
