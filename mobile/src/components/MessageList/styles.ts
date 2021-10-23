import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View``;
export const ContainerScrollView = styled(ScrollView).attrs({
    contentContainerStyle: {
        paddingTop: RFValue(68),
        paddingBottom: RFValue(184),
    },
    keyboardShouldPersistTaps: 'never'
})`
    
`;
