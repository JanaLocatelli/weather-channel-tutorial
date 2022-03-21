import { Box, Button, ButtonBaseClassKey, TextField } from '@mui/material';
import React, { useState } from 'react';

interface TextInputProps{
  buttonText?: string
  onClick:(text:string) => void
}

const TextInput = (props: TextInputProps) => {

  const [textFieldText, setTextFieldText] = useState("Show Text Here");

  return (
    <Box sx={{margin: '5px',display: 'flex'}}>
      <TextField sx={{marginRight: '5px'}} id="standard-basic" label="Standard" variant="standard" onChange={(e) => setTextFieldText(e.target.value)}/>
      <Button type="button" variant='contained' onClick={() => props.onClick(textFieldText)}>{getButtonText(props.buttonText)}</Button>
    </Box>
  )
}

function getButtonText(b:string|undefined){
  if(b === undefined){
    return "OK";
  }
  return b;
}

export default TextInput;
