import React from 'react';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm';
import { SignInBox } from '../../components/SignInBox';
import { useAuth } from '../../hooks/auth';

import { Container, ListContainer } from './styles';

export function Home() {
    const { user } = useAuth();
    return (
        <Container>
            <Header />
            <ListContainer>
                <MessageList />
            </ListContainer>
            {user ? <SendMessageForm /> : <SignInBox />}
        </Container>
    );
}
