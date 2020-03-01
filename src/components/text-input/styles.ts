import styled from 'styled-components/native';

// TODO: move out the border color into a constant
export const Input = styled.TextInput`
    width: 100%;
    border: rgba(228, 228, 228, 0.6) 1px solid;
    border-radius: 5px;
    padding-left: 20px;
    font-size: 13px;
    line-height: 18px;
    height: 50px;
`;

type LabelProps = {
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
};

export const Label = styled.Text<LabelProps>`
    width: 100%;
    font-size: 15px;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'bold')};
    line-height: 20px;
    margin-bottom: 15px;
    text-transform: ${(props) => (props.textTransform ? props.textTransform : 'uppercase')};
`;
export const Container = styled.View``;
