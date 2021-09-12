import { Flex, Text } from "@chakra-ui/react";

interface ContinentDetailInfoProps {
    number: string;
    description: string;
}

export function ContinentDetailInfo({ number, description }: ContinentDetailInfoProps) {
    return (
        <Flex direction="column" justify="center" align="center">
            <Text fontWeight="600" fontSize={["24px", "48px"]} color="orange.300">{number}</Text>
            <Text fontWeight="600" fontSize={["18px", "24px"]}>{description}</Text>
        </Flex>
    )
}