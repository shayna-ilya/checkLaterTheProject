import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

type Props = {
    img: ImageSourcePropType;
};

const StyledImage = styled.Image`
    width: 24px;
    height: 24px;
`;

export const Icon: React.FC<Props> = ({ img, ...props }) => {
    return (
        <>
            <StyledImage source={img} resizeMode="contain" />
        </>
    );
};
