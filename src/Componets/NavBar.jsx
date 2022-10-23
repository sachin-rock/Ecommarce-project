import React from 'react'
import { Flex, Spacer,Image } from '@chakra-ui/react'

export const NavBar = () => {
  return (
    <Flex>
        <Image src='https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_224x32.png?v=1647508945' 
        alt='Dan Abramov'
        height="25px"
        m={5} />
        <Spacer />
        SHOP
        WoMEN
        MEN
        NEW ARIVALS
        ABOUT
        HELP
        ICONS...


        </Flex>
  )
}
