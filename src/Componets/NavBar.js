import React from 'react'
import { Flex, Spacer,Image ,Text,Icon} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {BsSearch,BsBasket3} from 'react-icons/bs'
import {RiUserLine} from 'react-icons/ri'


export const NavBar = () => {
  return (
    <Flex bg="#c2d4de"
    borderBottom="1px solid black"
    p={2}
    alignItems="center"
    justifyContent="center"
    >
      <Spacer/>
    <Image src='https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_224x32.png?v=1647508945' 
    alt='Dan Abramov'
    height="25px"
   
    m={5} />
    <Spacer />
    <Link to="/collation/all" ><Text borderRadius="5px" border="1px solid white" bg="pink" px={3} py={1} m={4}>SHOP</Text>  </Link>
    <Link to="/collation/all" ><Text  borderRadius="5px" border="1px solid white" bg="pink" px={3} py={1} m={4}>WOMEN</Text>  </Link>
    <Link to="/collation/all" ><Text  borderRadius="5px" border="1px solid white" bg="pink" px={3} py={1} m={4}>MEN</Text>  </Link>
    <Link to="/collation/all" ><Text  borderRadius="5px" border="1px solid white" bg="pink" px={3} py={1} m={4}>BOYS</Text>  </Link>
    <Link to="/collation/all" ><Text borderRadius="5px" border="1px solid white" bg="pink" px={3} py={1} m={4}>GIRL</Text>  </Link>
   
   <Spacer/>
   <Icon boxSize="20px" mx={5} as={BsSearch} />
   <Icon boxSize="20px" mx={5} as={RiUserLine}/>
   <Icon boxSize="20px" mx={5} as={BsBasket3}/>
   <Text>0</Text>
    </Flex>
  )
}
