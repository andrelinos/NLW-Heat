import React from 'react';

import { Message } from '../Message';

import { Container, ContainerScrollView } from './styles';

export function MessageList() {
    const message = {
        id: "1",
        text: "Mensagem",
        user: {
            name: "name",
            avatar_url: 'https://github.com/andrelinos.png'
        }

    }
    return (
        <Container>
            <ContainerScrollView 
            
            >
                <Message data={message} />
                <Message data={message} />
                <Message data={message} />
                <Message data={message} />
                <Message data={message} />
                <Message data={message} />

            </ContainerScrollView>
        </Container>
    );
}
