"use client";
import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import Todo from './Todo';

const MainContainer = () => {
  const [toDos, setToDos] = useState<any>([]);
  
  const handleSubmit = (event: any) => {
  const newList = [...toDos, event.target[0].value];
  setToDos(newList);
  };

  return (
    <Box>
        <form onSubmit={handleSubmit} className='text-white'>
          <TextField/>

        </form>
        {toDos.map((toDo: string) => {
          return <Todo key={toDo} toDo={toDo}/>;
    })}
    </Box>
  )
}

export default MainContainer