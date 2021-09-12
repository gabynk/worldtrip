import { Flex, Divider, Text } from "@chakra-ui/react";

import { BannerHome } from "../components/BannerHome";
import { ContinentsSlide } from "../components/ContinentsSlide";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex direction="column" h="100%" w="100%">
      <Header />

      <BannerHome />

      <TravelTypes />

      <Flex justify="center" align="center" mt={["2.25rem", "5rem"]}>
        <Divider borderColor="gray.600" w={["3.75rem", "5.625rem"]} />
      </Flex>

      <Flex justify="center" align="center" mt={["1.5rem", "3.25rem"]}>
        <Text
          fontWeight="medium"
          fontSize={["1.25rem", "2.25rem"]}
          lineHeight={["1.875rem", "3.375rem"]}
          color="gray.600"
          textAlign="center"
        >
          Vamos nessa? <Divider as='br' />
          Então escolha seu continente
        </Text>
      </Flex>

      <ContinentsSlide />
    </Flex>
  )
}
