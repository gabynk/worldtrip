import { Flex, Text, Image, Avatar, Box } from "@chakra-ui/react";

interface PopularCityProps {
    cityImage: string;
    cityName: string;
    countryImage: string;
    countryName: string;
}

export function PopularCity({ cityImage, cityName, countryImage, countryName }: PopularCityProps) {
    return (
        <Box w="256px" h="279px" borderRadius="4" borderWidth="1px" borderColor="orange.300">
            <Flex direction="column" h="100%">
                <Image
                    src={cityImage}
                    objectFit="cover"
                    alt="Coquitel"
                    w="100%"
                    h="173px"
                    borderTopRadius="4px"
                />

                <Flex ml="24px" mr="24px" justify="space-between" align="center" h="100%">
                    <Flex direction="column">
                        <Text fontWeight="600" fontSize="20px" lineHeight="25px" mb="12px">
                            {cityName}
                        </Text>
                        <Text fontWeight="500" fontSize="16px" lineHeight="26px" color="gray.450">
                            {countryName}
                        </Text>
                    </Flex>
                    <Avatar
                        src={countryImage ? countryImage : cityName}
                        alt="Coquitel"
                        w="30px"
                        h="30px"
                        borderRadius="full"
                    />
                </Flex>
            </Flex>
        </Box>
    )
}