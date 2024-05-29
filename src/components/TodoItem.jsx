import { useState } from "react";
import { Box, IconButton, Input, Flex } from "@chakra-ui/react";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    onUpdate(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <Box p={2} borderWidth="1px" borderRadius="lg" mb={2}>
      <Flex align="center">
        {isEditing ? (
          <Input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            mr={2}
          />
        ) : (
          <Box flex="1">{todo.text}</Box>
        )}
        <IconButton
          aria-label={isEditing ? "Save" : "Edit"}
          icon={isEditing ? <FaSave /> : <FaEdit />}
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          mr={2}
        />
        <IconButton
          aria-label="Delete"
          icon={<FaTrash />}
          onClick={() => onDelete(todo.id)}
        />
      </Flex>
    </Box>
  );
};

export default TodoItem;