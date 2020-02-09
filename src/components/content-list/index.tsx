import React from 'react';
import styled from 'styled-components/native';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { dataArray } from 'constants';
import { ContentListItem } from 'components/content-list/content-list-item';

type Props = {};

const Container = styled.View``;

export const ContentList: React.FC<Props> = (props) => {
    const renderItem = React.useCallback((info: ListRenderItemInfo<any>) => {
        return <ContentListItem data={info.item} />;
    }, []);

    return (
        <Container>
            <FlatList showsHorizontalScrollIndicator={false} data={dataArray} renderItem={renderItem} />
        </Container>
    );
};
