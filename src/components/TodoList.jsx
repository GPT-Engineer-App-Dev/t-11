import { useState } from "react";
import { Box, Button, Input, VStack } from "@chakra-ui/react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: newTodo.trim() }
    ]);
    setNewTodo("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <VStack spacing={4}>
        <Box display="flex" width="100%">
          <Input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
            mr={2}
          />
          <Button onClick={addTodo} colorScheme="teal">
            Add
          </Button>
        </Box>
        <VStack spacing={2} width="100%">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onUpdate={updateTodo}
            />
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default TodoList;