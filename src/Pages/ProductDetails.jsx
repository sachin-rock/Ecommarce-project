import React, { useEffect, useState } from "react";
import {getCurrentProductData} from "../Redux/Products/action"
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../Components/Filter";
import { Product } from "../Components/Product";
import { Grid, GridItem, Flex, Box, Text, HStack, Button } from '@chakra-ui/react'
import {useParams} from "react-router-dom"
import { addToCart } from "../Redux/Cart/action";

const ProductDetails = () => {
    const loading = useSelector((state) => state.product.loading)
    const currentProduct = useSelector((state) => state.product.currentProduct)
    const error = useSelector((state) => state.product.error)

    const {id} = useParams();

    const dispatch = useDispatch();

    const [size, setSize] = useState(null)

    useEffect(() => {
        if(id){
            dispatch(getCurrentProductData(id))
        }
    }, [dispatch, id])

    const handleCart = () => {
        let payload = {
            ...currentProduct,
            size
        }

        dispatch(addToCart(payload))
    }

    if(loading){
        return <h1>Loading....</h1>
    }
    if(error){
        return <h1>Something went wrong...</h1>
    }
    if(Object.keys(currentProduct).length === 0){
        return <h2>Product {id} not found</h2>
    }
    return (
        <Flex justify="center" align="center">
            <Product product={currentProduct}/>
            <Box>
                <Text as="em">Choose a size</Text>
                <HStack p={4}>
                    {
                        currentProduct?.sizes.map((size) => {
                            return <Button 
                            key={size}
                            onClick={() => setSize(size)}
                            >{size}</Button>
                        })
                    }
                </HStack>
                <Button bg="yellow" m={4} p={5} disabled={!size}
                    onClick = {handleCart}
                >
                    {!size ? "PLEASE SELECT A SIZE" : "ADD TO CART"}
                </Button>
            </Box>
        </Flex>
    )
}


export {ProductDetails}