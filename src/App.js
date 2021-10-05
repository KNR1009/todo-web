import React, { useState, useEffect } from "react";
import Task from "./component/Task";
import { Center, Box, CheckboxGroup, Text } from "@chakra-ui/react";

const App = () => {
  const initialTasks = [
    {
      name: "買い物",
      isDone: true,
    },
    {
      name: "ランニング",
      isDone: false,
    },
    {
      name: "プログラミングの勉強",
      isDone: false,
    },
  ];

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(initialTasks);
  }, []);

  const toggleIsDone = (index) => {
    const tasksCopy = [...tasks];
    const isDone = tasksCopy[index].isDone;
    tasksCopy[index].isDone = !isDone;
    setTasks(tasksCopy);
  };

  return (
    <Box mt="64px">
      <Center>
        <Box>
          <Box mb="24px">
            <Text fontSize="24px" fontWeight="bold">
              タスク一覧
            </Text>
          </Box>
          <CheckboxGroup>
            {tasks.map((task, index) => {
              return (
                <Task
                  key={index}
                  index={index}
                  name={task.name}
                  isDone={task.isDone}
                  toggleIsDone={toggleIsDone}
                />
              );
            })}
          </CheckboxGroup>
        </Box>
      </Center>
    </Box>
  );
};

export default App;
