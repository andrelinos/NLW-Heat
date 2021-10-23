import React from 'react';
import { useAuth } from '../../hooks/auth';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { Container } from './styles';

export function SignInBox() {
    const { signIn, isSignIng } = useAuth();

    return (
        <Container>
            <Button
                title="ENTRAR COM GITHUB"
                color={COLORS.BLACK_PRIMARY}
                backgroundColor={COLORS.YELLOW}
                icon="github"
                onPress={signIn}
                isLoading={isSignIng}
            />
        </Container>
    );
}
