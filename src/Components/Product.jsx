import React, {useState} from "react";
import { Box, Image, Text, HStack } from '@chakra-ui/react'
import { useNavigate } from "react-router";


const Product = ({product}) => {
    const {id, name, color, gender, original_price,final_price, images} = product;

    const [img, setImg] = useState(images[0])
    const navigate = useNavigate();

    const showOtherImage = () => {
        setImg(images[1])
    }

    const showOriginalImage = () => {
        setImg(images[0])
    }

    return (
       <Box 
       onMouseEnter={showOtherImage}
       onMouseLeave={showOriginalImage}

       onClick={() => navigate(`/collections/all/${id}`)}
       style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
       padding: "auto",
       margin: "auto",

       }}
       >
           <Image src={img} alt={name + "shoe"}/>
           <Text>{name }</Text>
           <Text>{  color }</Text>
           <Text>{ gender}</Text>

            <HStack justify="center">
                <Text>{final_price}</Text>
                <Text color="gray" as="s">{original_price}</Text>
            </HStack>
       </Box>
    )
}

export {Product}