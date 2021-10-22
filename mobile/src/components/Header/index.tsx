import React from 'react';

import { Container, LogoutButton, LogoutTitle } from './styles';

import { UserPhoto } from '../UserPhoto';

import LogoSvg from '../../assets/logo.svg';

export function Header() {
    return (
        <Container>
            <LogoSvg />
            <UserPhoto imageUri='https://github.com/andrelinos.png' />
            <LogoutButton>
                <LogoutTitle>Sair</LogoutTitle>
            </LogoutButton>
        </Container>
    );
}
