import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { Dimensions, View } from 'react-native';
import { AppDataElement } from 'types/main-screen';
import styled from 'styled-components/native';
import { AppText } from 'components/app-text';
import { Button } from 'components/button';
import { TypeCarouselItem } from './type-carousel-item';

type Props = {
    data: AppDataElement[];
    title: string;
};

const { width } = Dimensions.get('window');

const TitleContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TypeCarousel: React.FC<Props> = ({ data, title }) => {
    const carouselRef = React.useRef<any>(null);

    const snapToItem = (index: number) => setTimeout(() => carouselRef?.current?.snapToItem(index), 100);

    const renderCarouselItem = React.useCallback((item: { item: AppDataElement; index: number }) => {
        return <TypeCarouselItem data={item.item} onPress={snapToItem} index={item.index} />;
    }, []);

    return (
        <View>
            <TitleContainer>
                <AppText size={17}>{title}</AppText>
                <Button title="Show all" titleSize={13} titleColor="#6979F8" mode="text" />
            </TitleContainer>
            <Carousel ref={carouselRef} data={data} activeSlideAlignment="start" renderItem={renderCarouselItem} sliderWidth={width} itemWidth={150} />
        </View>
    );
};
