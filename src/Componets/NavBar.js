import React from 'react'
import { Flex, Spacer,Image ,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'



export const NavBar = () => {
  return (
    <Flex bg="white"
    borderBottom="1px solid black"
    p={1}
    alignItems="center"
    justifyContent="center"
    >
      <Spacer/>
    <Image src='https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_224x32.png?v=1647508945' 
    alt='Dan Abramov'
    height="25px"
   
    m={5} />
    <Spacer />
    <Link to="/collation/all" ><Text  px={4} py={2} fontSize="xl">SHOP</Text>  </Link>
    <Link to="/collation/all" ><Text  px={4} py={2}>WOMEN</Text>  </Link>
    <Link to="/collation/all" ><Text  px={4} py={2}>MEN</Text>  </Link>
    <Link to="/collation/all" ><Text  px={4} py={2}>BOYS</Text>  </Link>
    <Link to="/collation/all" ><Text  px={4} py={2}>GIRL</Text>  </Link>
   
   


    </Flex>
  )
}
