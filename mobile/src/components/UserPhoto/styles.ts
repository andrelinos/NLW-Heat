import styled from 'styled-components/native';
import { Image } from 'react-native';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';

import { COLORS } from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const AvatarContainer = styled(LinearGradient)`
    justify-content: center;
    align-items: center;
`;

export const Avatar = styled(Image)`
    border-width: ${RFValue(4)}px;
    border-color: ${COLORS.BLACK_SECONDARY};
`;
