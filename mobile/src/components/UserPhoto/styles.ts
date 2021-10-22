import styled from 'styled-components/native';
import { Image } from 'react-native';
import { COLORS } from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Avatar = styled(Image)`
    border-width: 4px;
    border-color: ${COLORS.BLACK_SECONDARY};
`;
