import React from 'react';

import { Container, UserInfoContainer, LogoutButton, LogoutTitle } from './styles';

import { UserPhoto } from '../UserPhoto';

import LogoSvg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

export function Header() {
    const { user } = useAuth();
    return (
        <Container>
            <LogoSvg />
            <UserInfoContainer>
                <LogoutButton>
                    <LogoutTitle>Sair</LogoutTitle>
                </LogoutButton>
                <UserPhoto imageUri={user?.avatar_url} />
            </UserInfoContainer>
        </Container>
    );
}
