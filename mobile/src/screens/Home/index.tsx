import React from 'react';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';

import { Container, Title } from './styles';

export function Home() {
    return (
        <Container>
            <Header />
            <MessageList />
        </Container>
    );
}
