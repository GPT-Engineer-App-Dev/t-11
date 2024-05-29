// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Container, Text, VStack } from "@chakra-ui/react";
import TodoList from "../components/TodoList";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Todo App</Text>
        <TodoList />
      </VStack>
    </Container>
  );
};

export default Index;
