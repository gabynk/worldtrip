import { GetStaticPaths, GetStaticProps } from 'next';
import { useRef } from 'react';
import { Flex, Text, Tooltip, Icon, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { FiAlertCircle } from "react-icons/fi";

import { api } from '../../services/api';
import { Header } from "../../components/Header";
import { PopularCity } from '../../components/PopularCity';
import { ContinentDetailInfo } from '../../components/ContinentDetailInfo';

interface ContinentsProps {
  id: string;
  uid: string;
  image: string;
  data: {
    title: string;
    subtitle: string;
    description: string;
    countryNumbers: number;
    mostUsedLanguages: number;
    cityNumbers: number;
    popularCities: [
      {
        cityImage: string;
        cityName: string;
        countryImage: string;
        countryName: string;
      },
    ]
  }
}

interface ContinentProps {
  continent: ContinentsProps;
}

export default function Continent({ continent }: ContinentProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  const ref = useRef();

  return (
    <Flex direction="column" h="100%" w="100%">
      <Header hasBackArrow />

      <Flex
        backgroundImage={continent.image}
        backgroundSize="cover"
        h={["150px", "500px"]}
        w="100%"
        align={isWideVersion ? "flex-end" : "center"}
        justify={!isWideVersion && "center"}
      >
        <Text
          ml={isWideVersion && "140px"}
          mb={isWideVersion && "59px"}
          fontWeight={["semibold", "medium"]}
          fontSize={["1.75rem", "3rem"]}
          color="gray.50"
        >
          {continent.data.title}
        </Text>
      </Flex>

      <Flex
        direction={isWideVersion ? "row" : "column"}
        mt={isWideVersion ? "80px" : "1.5rem"}
        mb={isWideVersion ? "80px" : "1.5rem"}
        ml={isWideVersion ? "8.75rem" : "1rem"}
        mr={isWideVersion ? "8.75rem" : "1rem"}
        justify="space-between"
        align="center"
      >
        <Text
          fontWeight="normal"
          fontSize={["0.875rem", "1.5rem"]}
          lineHeight={["1.3125rem", "2.25rem"]}
          w={isWideVersion && "600px"}
          mb={!isWideVersion && "1rem"}
          mr={isWideVersion && "1rem"}
          textAlign="justify"
        >
          {continent.data.description}
        </Text>

        <Flex
          justify="space-between"
          align="center"
          w={isWideVersion ? "490px" : "100%"}
          minHeight={isWideVersion ? "99px" : "59px"}
        >
          <ContinentDetailInfo number={String(continent.data.countryNumbers)} description="países" />

          <ContinentDetailInfo number={String(continent.data.mostUsedLanguages)} description="línguas" />

          <Flex align="flex-end">
            <ContinentDetailInfo number={String(continent.data.cityNumbers)} description="cidades +100" />
            <Tooltip label="Search places" color="black">
              <Icon as={FiAlertCircle} fontSize={["10", "20"]} ml="5px" mb="8px" color="gray.450" ref={ref} />
            </Tooltip>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        ml={isWideVersion ? "140px" : "1rem"}
        mr={isWideVersion ? "140px" : "1rem"}
        direction="column"
        mb="35px"
      >
        <Flex>
          <Text fontWeight="500" fontSize={isWideVersion ? "36px" : "24px"} lineHeight="54px" >Cidades +100</Text>
        </Flex>

        <SimpleGrid
          columns={[1, 1, 2, 3, 4]}
          spacing={isWideVersion ? "45px" : "20px"}
          mt={isWideVersion ? "40px" : "20px"}
          justifyItems={!isWideVersion && "center"}
        >
          {continent.data.popularCities.map(city => (
            <PopularCity
              cityImage={city.cityImage}
              cityName={city.cityName}
              countryImage={city.countryImage}
              countryName={city.countryName}
            />
          ))}
        </SimpleGrid>

      </Flex>
    </Flex >
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const continent = await api.get(`/continents?uid=${params.slug}`).then(response => response.data);

  return {
    props: {
      continent: continent[0]
    }
  }
};
