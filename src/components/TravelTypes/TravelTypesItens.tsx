import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelTypesItensProps {
    src: string;
    title: string
}

export function TravelTypesItens({ src, title }: TravelTypesItensProps) {
    return (
        <Flex direction="column" justify="center" align="center">
            <Image src={src} alt="Coquitel" width="5.31rem" height="5.31rem" mb="1.5rem" />
            <Text fontWeight="semibold" fontSize="2xl">{title}</Text>
        </Flex>
    )
}