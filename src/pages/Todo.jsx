import { useState } from "react";
import { Box, Button, Container, Heading, Input, VStack, HStack } from "@chakra-ui/react";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const updateTodo = (id, newText, completed = false) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText, completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Todo App</Heading>
        <HStack width="100%">
          <Input
            placeholder="Add a new task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button onClick={addTodo}>Add</Button>
        </HStack>
        <Box width="100%">
          <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Todo;