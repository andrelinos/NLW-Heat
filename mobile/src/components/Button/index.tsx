import React from 'react';
import { ColorValue, ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    color: ColorValue;
    backgroundColor: ColorValue;
    icon?: React.ComponentProps<typeof AntDesign>['name'];
    isLoading?: boolean;
    onPress: () => Promise<void>;
}

export function Button({
    title,
    color,
    icon,
    isLoading = false,
    backgroundColor
}: ButtonProps) {
    return (
        <Container style={{ backgroundColor }} disabled={isLoading}>
            {isLoading ? (
                <ActivityIndicator color={color} />
            ) : (
                <>
                    <AntDesign name={icon} size={24} />
                    <Title style={{ color }}>{title}</Title>
                </>
            )}
        </Container>
    );
}
