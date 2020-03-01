import React from 'react';
import styled from 'styled-components/native';
import { AppText } from 'components/app-text';
import { SelectTypeList } from 'components/select-type-list';
import { TextInput } from 'components/text-input';
import { Button } from 'components/button';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { categories, genres } from 'app-constants';
import { SelectField } from 'components/select-field';

const Container = styled.View`
    padding: 0 22px 0 22px;
    width: 100%;
    height: 100%;
    background-color: white;
`;

const StyledTextInput = styled(TextInput)`
    margin-top: 15px;
`;

const StyledSelectField = styled(SelectField)`
    margin-top: 15px;
`;

const ButtonContainer = styled.View`
    margin-top: auto;
    margin-bottom: 25px;
`;

export const AddScreen: React.FC = () => {
    const [activeType, setActiveType] = React.useState<number>(1);
    const [selectedGenre, setSelectedGenre] = React.useState<string>(genres[0]);
    const [selectedCategory, setSelectedCategory] = React.useState<string>(categories[0]);

    const { showActionSheetWithOptions } = useActionSheet();
    const [options, cancelButtonIndex] = React.useMemo(() => [[...genres, 'Cancel'], genres.length], []);
    const [categoriesOptions, categoriesCancelButtonIndex] = React.useMemo(() => [[...categories, 'Cancel'], categories.length], []);

    const handleGenreInputPress = React.useCallback(() => {
        showActionSheetWithOptions({ options, cancelButtonIndex }, (buttonIndex) => {
            if (buttonIndex !== cancelButtonIndex) {
                setSelectedGenre(genres[buttonIndex]);
            }
        });
    }, [cancelButtonIndex, options, showActionSheetWithOptions]);

    const handleCategoriesInputPress = React.useCallback(() => {
        showActionSheetWithOptions({ options: categoriesOptions, cancelButtonIndex: categoriesCancelButtonIndex }, (buttonIndex) => {
            if (buttonIndex !== categoriesCancelButtonIndex) {
                setSelectedCategory(categories[buttonIndex]);
            }
        });
    }, [categoriesCancelButtonIndex, categoriesOptions, showActionSheetWithOptions]);

    return (
        <Container>
            <AppText size={17}>Select type</AppText>
            <SelectTypeList activeType={activeType} setActiveType={setActiveType} />
            <StyledTextInput label="Name" labelTextTransform="capitalize" />
            <StyledSelectField label="Genre" text={selectedGenre} onPress={handleGenreInputPress} />
            <StyledSelectField label="Category" text={selectedCategory} onPress={handleCategoriesInputPress} />
            <ButtonContainer>
                <Button title="Add now" titleColor="#fff" />
            </ButtonContainer>
        </Container>
    );
};
