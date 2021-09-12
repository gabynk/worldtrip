import { Flex, Box, Image, Icon, Link as ChakraLink, useBreakpointValue } from "@chakra-ui/react";
import Link from 'next/link';
import { FiArrowLeft } from "react-icons/fi";

interface HeaderProps {
    hasBackArrow?: boolean;
}

export function Header({ hasBackArrow = false }: HeaderProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        sm: true
    });

    return (
        <Flex
            h={["3.125rem", "6.25rem"]}
            align="center"
            justify={hasBackArrow ? "space-between" : "center"}
            ml={hasBackArrow && ["1rem", "1rem", "140px"]}
            mr={hasBackArrow && ["1rem", "1rem", "140px"]}
        >
            {hasBackArrow && (
                <Link href="/">
                    <ChakraLink >
                        <Icon as={FiArrowLeft} fontSize={["10", "20"]} color="gray.450" />
                    </ChakraLink>
                </Link>
            )}
            <Image
                src="/images/logo.svg"
                alt="Logo da worldtrip"
                width={isWideVersion ? "auto" : "81px"}
                height={isWideVersion ? "auto" : "20px"}
            />

            {hasBackArrow && (
                <Box />
            )}
        </Flex>
    )
}