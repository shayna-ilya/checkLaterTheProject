import styled from 'styled-components/native';

export const Title = styled.Text`
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
`;
export const IconContainer = styled.View`
    padding: 0 10px 0 10px;
    border-right-width: 1px;
    border-color: rgba(255, 255, 255, 0.3);
`;
export const InvisibleContainer = styled.View`
    opacity: 0;
`;
export const ActivityIndicator = styled.ActivityIndicator`
    width: 24px;
    height: 24px;
`;
export const defaultColor = '#6979f8';
export const defaultTextColor = '#fff';
export const Container = styled.View`
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    margin: 0 25px 0 25px;
`;
