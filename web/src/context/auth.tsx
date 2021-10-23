import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

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

interface AuthContextData {
    user: UserProps | null;
    signInUrl: string;
    signOut: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: AuthProviderProps) {
    const [user, setUser] = useState<UserProps | null>(null);

    const CLIENT_ID = process.env.GITHUB_CLIENT_ID;

    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${CLIENT_ID}`;

    async function signIn(githubCode: string) {
        const response = await api.post<AuthResponseProps>('authenticate', {
            code: githubCode
        });

        const { token, user } = response.data;

        console.log(response.data);

        localStorage.setItem('@dowhile2021:token', token);

        api.defaults.headers.common.authorization = `Bearer ${token}`;

        setUser(user);
    }

    function signOut() {
        setUser(null);
        localStorage.removeItem('@dowhile2021:token');
    }

    useEffect(() => {
        const token = localStorage.getItem('@dowhile2021:token');

        if (token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`;

            api.get<UserProps>('profile').then((response) => {
                setUser(response.data);
            });
        }
    }, []);
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
        <AuthContext.Provider value={{ signInUrl, user, signOut }}>
            {props.children}
        </AuthContext.Provider>
    );
}
