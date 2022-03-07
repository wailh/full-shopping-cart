import React, { useState } from 'react';
import ProductDetail from './ProductDetail'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Modal from 'react-modal'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Products = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [product, setProduct] = useState(null)

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });

      const openModal = (product) => {
        setIsOpen(true)
        setProduct(product)
      }
      const closeModal = () => {
        setIsOpen(false)
      }
    return (
        <Box sx={{ flexGrow: 1, my: '20px' }}>
          <Grid container spacing={2}>  
            <Grid item xs={12}>  
                <Grid container spacing={2}>    
                    {
                        props.products.map(product => (
                            <ProductDetail product={product} openModal={openModal} addToCart={props.addToCart} key={product.id}/>
                        )
                        )
                    }
                </Grid>
            </Grid>
          </Grid>
           {modalIsOpen && <Modal
             isOpen={modalIsOpen}
             onRequestClose={closeModal}
             ariaHideApp={false}
             contentLabel="Example Modal"
             >
             <Box  sx={{ maxHeight: '100%'}}>
                <Grid container>  
                    <Grid item xs={6}>  
                       <Img alt="image" src={product.image} />
                    </Grid>
                    <Grid item xs={6} sx={{ padding: '15px 10px', maxHeight: '100%'}}>  
                        <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            {product.description}
                        </Typography>
                        <Typography gutterBottom variant="h6">
                            Available Size: {product.availableSizes.map(size => <span>{' '}<button> {size} </button></span>)}
                        </Typography>
                        <Box >
                            <Grid container>
                                <Grid item xs={6} sx={{textAlign: 'center'}}>
                                    <Typography gutterBottom variant="h6">
                                        ${product.price}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} sx={{textAlign: 'right', width: '100%'}}>
                                <Button variant="contained" color='warning' sx={{width: '100%'}} onClick={()=>props.addToCart(product)}>Add to cart</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    
                    </Grid>
                </Grid>
            </Box>
           </Modal> }
        </Box>
    );
}
 
export default Products;