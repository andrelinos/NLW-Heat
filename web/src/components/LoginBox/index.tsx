import { useEffect } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';

import { api } from '../../services/api';

import styles from './styles.module.scss';

interface UserProps {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
}

interface AuthResponseProps {
    token: string;
    user: UserProps;
}

export function LoginBox() {
    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=75eed3cef9f613b4ac91`;

    async function signIn(githubCode: string) {
        const response = await api.post<AuthResponseProps>('authenticate', {
            code: githubCode
        });

        const { token, user } = response.data;

        localStorage.setItem('@dowhile2021:token', token);

        console.log(user);
    }

    useEffect(() => {
        const url = window.location.href;
        const hasGithubCode = url.includes('?code=');

        if (hasGithubCode) {
            const [urlWithOutCode, githubCode] = url.split('?code=');

            window.history.pushState({}, '', urlWithOutCode);
            signIn(githubCode);
        }
    }, []);

    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={styles.signInWithGithub}>
                <VscGithubInverted size={24} />
                Entrar com Github
            </a>
        </div>
    );
}
