import { Box, Container, Flex, Heading, HStack, IconButton, Image, Input, Text, VStack } from "@chakra-ui/react";
import { FaBars, FaPlus } from "react-icons/fa";

const notes = [
  {
    title: "lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tristique augue, ut egestas velit. Mauris condimentum sed ante at sagittis. Suspendisse vitae lacinia purus. Donec a tristique augue, ut egestas velit.",
    timestamp: "last opened yesterday 16:03",
    bgColor: "green.100",
  },
  {
    title: "lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tristique augue, ut egestas velit.",
    timestamp: "last opened yesterday 9:03",
    bgColor: "pink.100",
  },
  {
    title: "lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tristique augue, ut egestas velit.",
    timestamp: "last opened friday",
    bgColor: "green.100",
  },
  {
    title: "lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tristique augue, ut egestas velit. Sed venenatis, nunc ut fermentum interdum, quam eros sollicitudin enim, eu porttitor risus enim ut felis. Nunc tellus libero, fringilla eu commodo sit amet, maximus a mauris. Mauris aliquam.",
    timestamp: "last opened august 20",
    bgColor: "yellow.100",
  },
];

const Index = () => {
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
          {notes.map((note, index) => (
            <Box key={index} bg={note.bgColor} p={4} borderRadius="md" m={2} flexBasis="45%">
              <Heading as="h3" size="md" mb={2}>{note.title}</Heading>
              <Text mb={4}>{note.description}</Text>
              <Text fontSize="sm" color="gray.500">{note.timestamp}</Text>
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