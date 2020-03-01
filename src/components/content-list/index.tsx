import React from 'react';
import styled from 'styled-components/native';
import { FlatList, ListRenderItemInfo, ViewStyle } from 'react-native';
import { dataArray } from 'app-constants';
import { ContentListItem } from 'components/content-list/content-list-item';

type Props = {
    style?: ViewStyle;
};

const Container = styled.View``;

const StyledContentListItem = styled(ContentListItem)`
    margin-bottom: 30px;
`;

export const ContentList: React.FC<Props> = ({ style }) => {
    const renderItem = React.useCallback((info: ListRenderItemInfo<any>) => {
        return <StyledContentListItem data={info.item} />;
    }, []);

    return (
        <Container style={style}>
            <FlatList showsHorizontalScrollIndicator={false} data={dataArray} renderItem={renderItem} />
        </Container>
    );
};
