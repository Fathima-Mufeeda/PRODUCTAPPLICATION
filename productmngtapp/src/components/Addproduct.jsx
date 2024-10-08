import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Addproduct = () => {
  const navigate=useNavigate()

  // navigate
  const handleSubmit=()=>{
    navigate('/h')
  }

  return (
    <div>
      <h2>ADDING PRODUCT</h2>
      <TextField label="title" variant="outlined" /><br /><br />
      <TextField label="image" variant="outlined" /><br /><br />
      <TextField label="price" variant="outlined" /><br /><br />
      <TextField label="category" variant="outlined" /><br /><br />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

export default Addproduct