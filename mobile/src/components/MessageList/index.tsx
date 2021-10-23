import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import { api } from '../../services/api';
import {MESSAGES_EXAMPLE} from '../../../utils/messages'

import { Message, MessageDataProps } from '../Message';

import { Container, ContainerScrollView } from './styles';

let messagesQueue: MessageDataProps[] = MESSAGES_EXAMPLE;

const socket = io(String(api.defaults.baseURL));
socket.on('new_message', (newMessage) => {
    messagesQueue.push(newMessage);
});

export function MessageList() {
    const [currentMessages, setCurrentMessages] = useState<MessageDataProps[]>(
        []
    );

    async function fetchMessages() {
        const messagesResponse = await api.get<MessageDataProps[]>(
            '/messages/last3'
        );
        setCurrentMessages(messagesResponse.data);
    }

    useEffect(() => {
        fetchMessages();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            if (messagesQueue.length > 0) {
                setCurrentMessages((prevState) => [
                    messagesQueue[0],
                    prevState[0],
                    prevState[1]
                ]);
                messagesQueue.shift();
            }
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Container>
            <ContainerScrollView>
                {currentMessages.map((message) => (
                    <Message key={message.id} data={message} />
                ))}
            </ContainerScrollView>
        </Container>
    );
}
