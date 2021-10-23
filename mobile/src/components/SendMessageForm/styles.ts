import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { COLORS } from '../../theme';

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(184)}px;
    padding: 0 ${RFValue(20)}px;
    background-color: ${COLORS.BLACK_TERTIARY};
    justify-content: space-between;
`;

export const MessageInput = styled.TextInput.attrs({
    placeholderTextColor: COLORS.GRAY_PRIMARY,
    multiline: true,
    maxLength: 140,
})`
    width: 100%;
    height: ${RFValue(88)}px;

    color: ${COLORS.WHITE};
`;
