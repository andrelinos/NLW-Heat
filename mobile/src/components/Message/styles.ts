import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MotiView } from 'moti';

import { COLORS, FONTS } from '../../theme';

export const Container = styled(MotiView).attrs({
    from: { opacity: 0, translateY: -50 },
    animate: { opacity: 1, translateY: 1 },
    transition: { type: 'timing', duration: 700 }
})`
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
