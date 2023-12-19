import { Button, Flex, Img, Text } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"

const NavigationMenu = () => {
  return (
    <Flex position={'fixed'} w={'100%'} top={0} bgColor={'white'} zIndex={'999'} >
      <Flex w={"100%"} flexDirection={"column"} alignItems={"center"}>
        <Flex
          justifyContent={"space-between"}
          w={"100%"}
          h={"100%"}
          px={"10%"}
          py={6}
          gap={6}
        >
          <Img src="./assets/DipologBookingHub1.webp" maxW={"300px"} />
          <Flex gap={8} alignItems={'center'}>
            <Link to={'/'}><Text>Home</Text></Link>
            <Link to={'/services'}><Text>Services</Text></Link>
            
            <Text>Contact Us</Text>
            <Button colorScheme="twitter">Login</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default NavigationMenu
