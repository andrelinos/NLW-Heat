import React from 'react';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm';
import { SignInBox } from '../../components/SignInBox';


import { Container, ListContainer } from './styles';

export function Home() {

    return (
        <Container>
            <Header />
            <ListContainer>
                <MessageList />
            </ListContainer>
            <SignInBox />
        </Container>
    );
}
