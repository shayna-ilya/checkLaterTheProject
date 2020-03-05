import React from 'react';
import styled from 'styled-components/native';
import { AppText } from 'components/app-text';
import { SelectTypeList } from 'components/select-type-list';
import { TextInput } from 'components/text-input';
import { Button } from 'components/button';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { categories, genres, types } from 'app-constants';
import { SelectField } from 'components/select-field';
import { useTranslation } from 'react-i18next';
import { addEntry } from 'store/ducks/entries/actions';
import { useDispatch } from 'react-redux';
import { Category, Genre, Type } from 'types/main-screen';

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

const StyledText = styled(AppText)`
    margin-bottom: 10px;
`;

export const AddScreen: React.FC = () => {
    const [activeType, setActiveType] = React.useState<Type>(types[1]);
    const [selectedGenre, setSelectedGenre] = React.useState<Genre>(genres[0]);
    const [selectedCategory, setSelectedCategory] = React.useState<Category>(categories[0]);
    const [name, setName] = React.useState<string>('');
    const dispatch = useDispatch();

    const { showActionSheetWithOptions } = useActionSheet();
    const { t } = useTranslation();

    const genresOptions = React.useMemo(() => [...genres.map((item) => t(`genres:${item}`)), t('common:cancel')], [t]);
    const genresCancelButtonIndex = React.useMemo(() => genres.length, []);

    const categoriesOptions = React.useMemo(() => [...categories.map((item) => t(`categories:${item}`)), t('common:cancel')], [t]);
    const categoriesCancelButtonIndex = React.useMemo(() => categories.length, []);

    const handleGenreInputPress = React.useCallback(() => {
        showActionSheetWithOptions({ options: genresOptions, cancelButtonIndex: genresCancelButtonIndex }, (buttonIndex) => {
            if (buttonIndex !== genresCancelButtonIndex) {
                setSelectedGenre(genres[buttonIndex]);
            }
        });
    }, [genresCancelButtonIndex, genresOptions, showActionSheetWithOptions]);

    const handleCategoriesInputPress = React.useCallback(() => {
        showActionSheetWithOptions({ options: categoriesOptions, cancelButtonIndex: categoriesCancelButtonIndex }, (buttonIndex) => {
            if (buttonIndex !== categoriesCancelButtonIndex) {
                setSelectedCategory(categories[buttonIndex]);
            }
        });
    }, [categoriesCancelButtonIndex, categoriesOptions, showActionSheetWithOptions]);

    const handleAddButtonPress = () => {
        dispatch(addEntry({ name, addDate: '123', genre: selectedGenre, category: selectedCategory, type: activeType.name }));
    };

    return (
        <Container>
            <StyledText size={17}>{t('addScreen:selectType')}</StyledText>
            <SelectTypeList activeType={activeType} setActiveType={setActiveType} />
            <StyledTextInput value={name} onChangeText={setName} labelFontWeight="normal" label="Name" labelTextTransform="capitalize" />
            <StyledSelectField label="Genre" text={t(`genres:${selectedGenre}`)} onPress={handleGenreInputPress} />
            <StyledSelectField label="Category" text={t(`categories:${selectedCategory}`)} onPress={handleCategoriesInputPress} />
            <ButtonContainer>
                <Button onPress={handleAddButtonPress} title={t('addScreen:addNow')} titleColor="#fff" />
            </ButtonContainer>
        </Container>
    );
};
