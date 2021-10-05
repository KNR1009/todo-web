import { Checkbox, Box, Text } from "@chakra-ui/react";

const Task = (props) => {
  return (
    <Box mb="16px">
      <Checkbox
        isChecked={props.isDone}
        colorScheme="blue"
        size="lg"
        onChange={() => {
          props.toggleIsDone(props.index);
        }}
      >
        <Text>{props.name}</Text>
      </Checkbox>
    </Box>
  );
};

export default Task;
