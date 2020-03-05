import React from 'react';
import styled from 'styled-components/native';
import { FlatList, ListRenderItemInfo, ViewStyle } from 'react-native';
import { dataArray } from 'app-constants';
import { ContentListItem } from 'components/content-list/content-list-item';
import { Entry } from 'types/main-screen';

type Props = {
    style?: ViewStyle;
    data: Entry[];
};

const Container = styled.View``;

const StyledContentListItem = styled(ContentListItem)`
    margin-bottom: 30px;
`;

export const ContentList: React.FC<Props> = ({ style, data }) => {
    return (
        <Container style={style}>
            {data.map((entry) => (
                <StyledContentListItem key={entry.id} data={entry} />
            ))}
        </Container>
    );
};
