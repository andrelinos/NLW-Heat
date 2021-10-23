import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { COLORS } from '../../theme';

export const Container = styled.View`
    flex: 1;
    background-color: ${COLORS.BLACK_SECONDARY};
`;

export const Title = styled.Text`
    color: ${COLORS.YELLOW};
`;

export const ListContainer = styled.View`
    flex: 1;
    padding: ${RFValue(20)}px;
    padding-bottom: ${String(getBottomSpace() + 32)}px;
`;
