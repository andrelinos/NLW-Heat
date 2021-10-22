import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import { COLORS } from '../../theme';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${RFValue(20)}px;
    background-color: ${COLORS.BLACK_SECONDARY};
`;

export const UserInfoContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const LogoutButton = styled(TouchableOpacity)`
    margin-right: ${RFValue(16)}px;
`;

export const LogoutTitle = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${COLORS.YELLOW};
`;
