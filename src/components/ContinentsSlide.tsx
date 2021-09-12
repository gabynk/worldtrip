import { Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/swiper-react.cjs.js';

import { api } from "../services/api";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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

export function ContinentsSlide() {
    const [continents, setContinents] = useState<ContinentsProps[]>([]);

    useEffect(() => {
        async function loadContinents() {
            await api.get('/continents').then(response => {
                setContinents(response.data)
            });
        }

        loadContinents();
    }, [])

    return (
        <Flex
            h={["250px", "450px"]}
            mt={["1.25rem", "3.25rem"]}
            pl={["0", "0", "6.25rem"]}
            pr={["0", "0", "6.25rem"]}
            pb={["1.5rem", "2.5rem"]}
        >
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                style={{ width: '100%', flex: '1' }}
            >
                {continents.map(continent => (
                    <SwiperSlide key={continent.id}>
                        <Link href={`/continent/${continent.uid}`}>
                            <a>
                                <Flex
                                    h={["250px", "450px"]}
                                    backgroundImage={continent.image}
                                    backgroundSize="cover"
                                    justify="center"
                                    align="center"
                                    direction="column"
                                >
                                    <Text
                                        fontWeight="bold"
                                        fontSize={["1.5rem", "3rem"]}
                                        color="gray.50"
                                        mb="1rem"
                                    >
                                        {continent.data.title}
                                    </Text>
                                    <Text
                                        fontWeight="bold"
                                        fontSize={["0.875rem", "1.5rem"]}
                                        lineHeight={["2.25rem"]}
                                        color="gray.100"
                                    >
                                        {continent.data.subtitle}
                                    </Text>
                                </Flex>
                            </a>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Flex>
    )
}