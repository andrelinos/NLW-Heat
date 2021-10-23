import React from 'react';

import {
    Container,
    UserInfoContainer,
    LogoutButton,
    LogoutTitle
} from './styles';

import { UserPhoto } from '../UserPhoto';

import LogoSvg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { TouchableOpacity } from 'react-native';

export function Header() {
    const { user, signIn, signOut } = useAuth();

    return (
        <Container>
            <LogoSvg />
            <UserInfoContainer>
                {user ? (
                    <>
                        <LogoutButton onPress={signOut}>
                            <LogoutTitle>Sair</LogoutTitle>
                        </LogoutButton>

                        <UserPhoto imageUri={user?.avatar_url} />
                    </>
                ) : (
                    <TouchableOpacity onPress={signIn}>
                        <UserPhoto imageUri={user?.avatar_url} />
                    </TouchableOpacity>
                )}
            </UserInfoContainer>
        </Container>
    );
}
