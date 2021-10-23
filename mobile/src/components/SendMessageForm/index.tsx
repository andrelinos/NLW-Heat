import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { Container, MessageInput } from './styles';

export function SendMessageForm() {
    const [message, setMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false);

    async function handleSendMessageSubmit() {
        const messageFormatted = message.trim();

        if (messageFormatted.length > 0) {
            setSendingMessage(true);
            await api.post('/messages', { message: messageFormatted });

            setMessage('');
            Keyboard.dismiss();
            Alert.alert('Mensagem enviada com sucesso!');

            setSendingMessage(false);
        } else {
            Alert.alert('Escreva uma mensagem para enviar.');
            setSendingMessage(false);
        }
    }

    return (
        <Container>
            <MessageInput
                keyboardAppearance="dark"
                placeholder="Qual sua expectativa para o evento"
                onChangeText={setMessage}
                value={message}
                editable={!sendingMessage}
            />

            <Button
                title="ENVIAR MENSAGEM"
                color={COLORS.BLACK_PRIMARY}
                backgroundColor={COLORS.PINK}
                isLoading={sendingMessage}
                onPress={handleSendMessageSubmit}
            />
        </Container>
    );
}
