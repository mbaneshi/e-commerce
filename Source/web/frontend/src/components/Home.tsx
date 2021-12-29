import AppBar from '@mui/material/AppBar';
import { Box, Grid, Stack, styled, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button'
import React,{useState} from 'react';
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux'
import { buyer, seller } from '../app/roleSlice'


//--------



//--------

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Home() {
  const role =useSelector(state =>state)  
  console.log(role)
  const dispatch = useDispatch()
    return (
      <>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Multi-Vendor-Site
          </Typography>
          <Button color="inherit"><Link to="/signin">Sign In</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
       <nav>
        
        <Link to="/about">About</Link>
        <br/>
        <Link to="/dashbord">dashbord</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
      >
        

  <Grid item xs={3}>
          <main>
            <Stack direction="row" spacing={2}>
  <Item> <Button variant="outlined" onClick = {() =>dispatch(seller())}>I Am Seller</Button></Item>
  <Item> <Button variant="outlined" onClick = {() =>dispatch(buyer())}>I am Buyer</Button></Item>
</Stack>
        <h2>Welcome to the homepage!</h2>
              <p>You can do this, I believe in you.</p>
              {/* <p>i am {role.item()} </p> */}
       
       
        
      </main>
  </Grid>   
   
</Grid> 
      
     
    </>
  );
}
export default Home;