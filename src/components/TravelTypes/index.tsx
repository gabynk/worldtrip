import { Flex, Image, Text, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";

import { TravelTypesItens } from "./TravelTypesItens";

export function TravelTypes() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    if (isWideVersion) {
        return (
            <Flex mr="8.75rem" ml="8.75rem" mt="114px" justify="space-between" >
                <TravelTypesItens src="/images/cocktail.svg" title="Vida noturna" />
                <TravelTypesItens src="/images/surf.svg" title="Praia" />
                <TravelTypesItens src="/images/building.svg" title="Moderno" />
                <TravelTypesItens src="/images/museum.svg" title="Clássico" />
                <TravelTypesItens src="/images/earth.svg" title="e mais..." />
            </Flex>
        )
    }
    return (
        <SimpleGrid columns={2} spacing="1.68rem" mr="3.125rem" ml="3.125rem" mt="2.25rem" justifyItems="start">
            <Flex direction="row" justify="center" align="center">
                <Image src="/images/ellipse.svg" width="0.5rem" height="0.5rem" marginRight={4} />
                <Text fontWeight="medium" fontSize={["lg", "2xl"]}>Vida noturna</Text>
            </Flex>
            <Flex direction="row" justify="center" align="center">
                <Image src="/images/ellipse.svg" width="0.5rem" height="0.5rem" marginRight={4} />
                <Text fontWeight="medium" fontSize={["lg", "2xl"]}>Praia</Text>
            </Flex>
            <Flex direction="row" justify="center" align="center">
                <Image src="/images/ellipse.svg" width="0.5rem" height="0.5rem" marginRight={4} />
                <Text fontWeight="medium" fontSize={["lg", "2xl"]}>Moderno</Text>
            </Flex>
            <Flex direction="row" justify="center" align="center">
                <Image src="/images/ellipse.svg" width="0.5rem" height="0.5rem" marginRight={4} />
                <Text fontWeight="medium" fontSize={["lg", "2xl"]}>Clássico</Text>
            </Flex>
            <Flex direction="row" justify="center" align="center">
                <Image src="/images/ellipse.svg" width="0.5rem" height="0.5rem" marginRight={4} />
                <Text fontWeight="medium" fontSize={["lg", "2xl"]}>e mais...</Text>
            </Flex>
        </SimpleGrid>
    )
}