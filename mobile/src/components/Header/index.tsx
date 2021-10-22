import React from 'react';

import { Container, UserInfoContainer, LogoutButton, LogoutTitle } from './styles';

import { UserPhoto } from '../UserPhoto';

import LogoSvg from '../../assets/logo.svg';

export function Header() {
    return (
        <Container>
            <LogoSvg />
            <UserInfoContainer>
                <LogoutButton>
                    <LogoutTitle>Sair</LogoutTitle>
                </LogoutButton>
                <UserPhoto imageUri="https://github.com/andrelinos.png" />
            </UserInfoContainer>
        </Container>
    );
}
