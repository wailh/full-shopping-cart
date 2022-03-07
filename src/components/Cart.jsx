import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Form from './form';


const Cart = ({cart, handleRemove}) => {
    const [showCheckOut, setShowCheckOut] = useState(false)

    const Img = styled('img')({
        maxHeight: '200px',
        maxWidth: '100%'
    })

    return ( 
      <div>
            {cart.length !== 0 ?
                <div>
                    <Typography className='cart-header' sx={{mt: '20px'}} variant='body1' gutterBottom>You Have {cart.length} item in Cart</Typography>
                    {cart.map(item => (
                        <Box sx={{my: '20px'}} key={item.id}>
                            <Grid container spacing={2}>  
                                <Grid item xs={12}>  
                                    <Grid container spacing={2}> 
                                    <Grid item xs={3} sx={{padding: '5px'}}>
                                        <Img src={item.image}/>
                                    </Grid>   
                                    <Grid item xs={9}>
                                        <Typography variant='subtitle1' gutterBottom>{item.title}</Typography>
                                        <Box sx={{float: 'right'}}>
                                            <Typography variant="body1" component="span" sx={{mr: '10px'}}>${item.price} x {item.count}</Typography>
                                            <Button variant="contained" color="error" onClick={() => handleRemove(item.id)}>Remove</Button>
                                        </Box>
                                    </Grid>   
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    )
                    )}
                    <Box sx={{mt: '40px'}}>
                        <Typography variant='h5' component='span'> Total: 
                            ${cart.reduce((a, c) => a + c.price * c.count, 0)}
                        </Typography>
                        <Button variant='contained' color='secondary' sx={{float: 'right'}} onClick={() => setShowCheckOut(true)}>
                           Proceed
                        </Button>
                    </Box>
                   
                    {showCheckOut && (
                        <Form />
                    )}
                </div>  
                :
                <div className='cart-empty cart-header'>
                    Cart is empty
                </div>
            }    
        </div>
     );
}

export default Cart;