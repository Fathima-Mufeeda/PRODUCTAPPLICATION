import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <AppBar>
                
                <Toolbar>
                    <Typography variant="h6">PRODUCT APP</Typography>
                    &nbsp;&nbsp;
                    <Link to='/h'>
                        <Button variant='contained' color='secondary'>Home</Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Link to='/a'>
                        <Button variant='contained' color='secondary'>Add</Button>
                    </Link>&nbsp;&nbsp;
                </Toolbar>
            </AppBar>
            <br /><br />
        </div>
  )
}
   
export default Navbar