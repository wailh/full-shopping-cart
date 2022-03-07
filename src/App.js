import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useState } from 'react'
import data from './data.json'
import "./App.css";
import Filter from './components/Filter';
import Form from './components/form';

const App = () => {
    const [products, setProducts] = useState(data.products)
    const [size, setSize] = useState('')
    const [sort, setSort] = useState('')
    const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])

    const filterProducts = (e) => {
        if (e.target.value === '') {
            setProducts(data.products)
            setSize(e.target.value)
        } else {
            setSize(e.target.value)
            setProducts(data.products.filter(product => product.availableSizes.indexOf(e.target.value) >= 0))
        }
    }
    
    const sortProducts = (e) => {
        const sort = e.target.value; 
        setSort(sort)
        setProducts(data.products.slice().sort((a, b) => 
            sort === 'lowest'
            ? a.price > b.price
                ? 1 
                : -1
            : sort === 'highest'
            ? a.price < b.price
                ? 1
                : -1
            : a.id > b.id 
            ? 1
            : -1
        ))
    }

    const addToCart = (product) => {
        const cartItems = [...cart]
        let alreadyInCart = false
        cartItems.forEach((item) => {
            if (item.id === product.id) {
                item.count++;
                alreadyInCart = true
            }
        })
        if(!alreadyInCart) {
            cartItems.push({...product, count: 1})
        }
        setCart(cartItems)
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    const removeItem = (id) => {
        let removed = cart.filter(item => item.id !== id)
        setCart([...removed])
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    return (
        <div className='grid-container'>
            <header>
                <a href="#">React Shopping Cart</a>
            </header>
            <main>
            <Container maxWidth="xl" >
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}> 
                    <Grid item xs={9} sx={{padding: '40px'}}>
                      <Filter count={products.length} 
                          size={size}
                          sort={sort}
                          filterProducts={filterProducts}
                          sortProducts={sortProducts}
                      />
                      <Products products={products} addToCart={addToCart}/>
                    </Grid> 
                    <Grid item xs={3}>
                        <Cart cart={cart} handleRemove={removeItem}/>
                    </Grid> 
                 </Grid>
                </Box>
            </Container>
            </main>
            <footer>
                All rights reserved
            </footer>
        </div>
    )
}

export default App;
