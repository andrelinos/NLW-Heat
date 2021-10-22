import React from 'react';
import { UserPhoto } from '../UserPhoto';

import { Container, UserMessage, UserInfoContainer, UserName } from './styles';

interface UserProps {
    name: string;
    avatar_url: string;
}

export interface MessageDataProps {
    id: string;
    text: string;
    user: UserProps;
}

interface MessageProps {
    data: MessageDataProps;
}

export function Message({ data }: MessageProps) {
    return (
        <Container>
            <UserMessage>{data.text}</UserMessage>

            <UserInfoContainer>
                <UserPhoto imageUri={data.user.avatar_url} sizes="SMALL" />
                <UserName>{data.user.name}</UserName>
            </UserInfoContainer>
        </Container>
    );
}
