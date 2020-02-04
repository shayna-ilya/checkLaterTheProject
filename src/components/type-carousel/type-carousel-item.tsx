import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { AppDataElement } from 'types/main-screen';

type Props = {
    data: AppDataElement;
    index: number;
    onPress?(index: number): void;
};

export const TypeCarouselItem: React.FC<Props> = ({ data, onPress, index }) => {
    const handlePress = React.useCallback(() => onPress && onPress(index), [index, onPress]);

    return (
        <TouchableOpacity onPress={handlePress}>
            <Image source={data.img} />
        </TouchableOpacity>
    );
};
