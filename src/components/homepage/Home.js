import { Divider, Flex, Heading, Image, Text } from "@chakra-ui/react"
import React from "react"
import { Button } from "@chakra-ui/react"
import { PiTarget } from "react-icons/pi"
import { AiOutlineSchedule } from "react-icons/ai"

const Home = () => {
  return (
    <Flex flexDirection={"column"}>
      <Flex
        // bgImage={'url("./assets/mapwithlocation.webp")'}
        // bgRepeat={'no-repeat'}
        // bgPosition={'bottom right'}
        w={"100%"}
        h={"100vh"}
        flexDirection={"column"}
        alignItems={"center"}
        // bgColor={"blue.50"}
        position={'relative'}
      >
        <Image src="./assets/mapwithlocation.webp" position={'absolute'} w={'55%'} bottom={0} right={0}  />
        <Flex
          flexDirection={"column"}
          alignItems={"flex-start"}
          justifyContent={"center"}
          w={"100%"}
          h={"100%"}
          maxW={"1400px"}
          px={"10%"}
          py={"100px"}
          gap={6}
          zIndex={1}
        >
          <Heading
            as={"h1"}
            fontSize={"xxx-large"}
            pr={"350px"}
            letterSpacing={"-1.5px"}
          >
            Dipolog's Premier Solution for All Your Booking Needs!
          </Heading>
          <Divider
            w={"10%"}
            h={"5px"}
            borderRadius={"100px"}
            bgColor={"gray.300"}
            colorScheme="blue"
          />
          <Text fontSize={"large"} pr={"300px"}>
            Efficiently manage operations across multiple industries using our
            intuitive booking system, optimizing processes and enhancing
            productivity seamlessly.
          </Text>
          <Flex gap={4}>
            <Button
              variant={"outline"}
              borderColor={"green.300"}
              borderWidth={"1px"}
              borderStyle={"solid"}
              color={"green.300"}
              _hover={{ bgColor: "green.300", color: "white" }}
              leftIcon={<PiTarget size={24} />}
              px={10}
              py={8}
            >
              Work With Us
            </Button>
            <Button
              colorScheme="twitter"
              // bgColor={"blue.300"}
              // _hover={{ bgColor: "blue.300" }}
              color={"white"}
              leftIcon={<AiOutlineSchedule size={24} />}
              px={10}
              py={8}
            >
              Our Services
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex w={"100%"} flexDirection={"column"} alignItems={"center"}>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
          maxW={"1400px"}
          px={"10%"}
          py={"100px"}
          gap={6}
          textAlign={"center"}
        >
          <Heading
            as={"h1"}
            fontSize={"xxx-large"}
            px={"125px"}
            letterSpacing={"-1.5px"}
            textTransform={"capitalize"}
          >
            Are you a business owner seeking a hassle-free way to manage your
            bookings and appointments?
          </Heading>
          <Divider
            w={"10%"}
            h={"5px"}
            borderRadius={"100px"}
            bgColor={"gray.300"}
            colorScheme="blue"
          />
          <Text fontSize={"large"} px={"150px"}>
            Look no further! Our cutting-edge platform offers you the tools to
            effortlessly organize your schedules, delight your customers, and
            drive your business forward.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Home
