import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import formatCurrency from './../util';

const ProductDetail = ({addToCart, product, openModal}) => {

    const ButtonWrapper = styled('div')({
        float: 'right'
    })
    const Img = styled('img')({
        maxWidth: '100%',
        maxHeight: '100%',
      });
    



    return (
        <Grid item xs={4}>
          <a href={'#' + product.id} onClick={() => openModal(product)}>
            <Img src={product.image} />
            <Typography variant="subtitle1" gutterBottom component="div">{product.title}</Typography>
          </a>
           <Grid container spacing={2}>  
              <Grid item xs={4}>
                <Typography variant="h5" component="span">${formatCurrency(product.price)}</Typography>
              </Grid>
              <Grid item xs={8}>
                <ButtonWrapper>
                    <Button variant="contained" color='warning' onClick={() => addToCart(product)}>Add To Cart</Button>
                </ButtonWrapper>
              </Grid>
           </Grid>
        </Grid>
    )
}

export default ProductDetail;