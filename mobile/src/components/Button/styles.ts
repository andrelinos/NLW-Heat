import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { FONTS } from '../../theme';

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: ${RFValue(48)}px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${FONTS.BOLD};
    margin-left: ${RFValue(16)}px;
`;
