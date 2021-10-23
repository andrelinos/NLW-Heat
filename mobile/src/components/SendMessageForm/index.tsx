import React, { useState } from 'react';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { Container, MessageInput } from './styles';

export function SendMessageForm() {
    const [message, setMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false);

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
            />
        </Container>
    );
}
