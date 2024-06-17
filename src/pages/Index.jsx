import { Box, Container, Flex, Heading, HStack, IconButton, Image, Input, Text } from "@chakra-ui/react";
import { useNotes } from "../integrations/supabase/index.js";
import { FaBars, FaPlus } from "react-icons/fa";

const Index = () => {
  const { data: notes, error, isLoading } = useNotes();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const getColor = (color) => {
    switch (color) {
      case 'green':
        return 'green.100';
      case 'red':
        return 'red.100';
      case 'orange':
        return 'orange.100';
      case 'pink':
        return 'pink.100';
      default:
        return 'gray.100';
    }
  };

return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={8}>
        <HStack spacing={4}>
          <Image src="/images/logo.png" alt="Logo" boxSize="50px" />
          <Heading as="h1" size="lg" color="purple.500">Notes</Heading>
        </HStack>
        <HStack spacing={4}>
          <Text>Puneet Shakya</Text>
          <IconButton aria-label="Menu" icon={<FaBars />} />
        </HStack>
      </Flex>
      <Box mb={8}>
        <Input placeholder="Search notes" size="lg" />
      </Box>
      <Box>
        <Flex wrap="wrap" justifyContent="space-between">
          {notes.map((note) => (
            <Box key={note.id} bg={getColor(note.color)} p={4} borderRadius="md" m={2} flexBasis="45%">
              <Heading as="h3" size="md" mb={2}>{note.title}</Heading>
              <Text mb={4}>{note.content}</Text>
              <Text fontSize="sm" color="gray.500">{new Date(note.created_at).toLocaleString()}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
      <IconButton
        aria-label="Add Note"
        icon={<FaPlus />}
        size="lg"
        colorScheme="purple"
        position="fixed"
        bottom={8}
        right={8}
        borderRadius="full"
      />
    </Container>
  );
};

export default Index;