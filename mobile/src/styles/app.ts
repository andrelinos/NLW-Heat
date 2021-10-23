import {
    getStatusBarHeight,
    getBottomSpace
} from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

import { COLORS } from '../theme/colors';

export const ContainerApp = styled.View`
    flex: 1;
    background-color: ${COLORS.BLACK_SECONDARY};
    padding-top: ${String(getStatusBarHeight() + RFPercentage(4))}px;
    padding-bottom: ${String(getBottomSpace() + +RFPercentage(4))}px;
`;
