import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../theme';

export const Container = styled.View`
    width: 100%;
    margin-bottom: ${RFValue(36)}px;
`;

export const UserMessage = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${FONTS.REGULAR};
    color: ${COLORS.WHITE};
    line-height: ${RFValue(20)}px;
    margin-bottom: ${RFValue(12)}px;
`;

export const UserInfoContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const UserName = styled.Text`
   font-size: ${RFValue(15)}px;
    font-family: ${FONTS.REGULAR}; 
    color: ${COLORS.WHITE};
    margin-left: ${RFValue(16)}px;
`;
