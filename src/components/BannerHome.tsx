import { Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";

export function BannerHome() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Flex
            w="100%"
            h={["10.18rem", "20.93rem"]}
            backgroundImage="/images/background.svg"
            justify={["center", "center", "center", "space-between"]}
        >
            <Flex direction="column" ml={["1rem", "1rem", "1rem", "8.75rem"]}>
                <Text
                    fontWeight="medium"
                    fontSize={["xl", "4xl"]}
                    mt={["1.75rem", "5rem"]}
                    color="gray.50"
                >
                    5 Continentes, <br />
                    infinitas possibilidades.
                </Text>
                <Text
                    fontWeight="medium"
                    fontSize={["0.87rem", "xl"]}
                    mt="1.35rem"
                    mr={["1.75rem"]}
                    color="gray.50"
                >
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
            </Flex>

            {isWideVersion && (
                <Flex mt="4.75rem" mr="8.75rem">
                    <Image
                        src="/images/airplane.svg"
                        alt="Imagem do avião"
                        width="417.15px"
                        height="270.74px"
                        transform={'rotate(3deg)'}
                    />
                </Flex>
            )}
        </Flex>
    )
}