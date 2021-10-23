import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSessions from 'expo-auth-session';
import {
    GITHUB_AUTH_URL,
    GITHUB_CLIENT_ID,
    GITHUB_SCOPE,
    USER_STORAGE,
    TOKEN_STORAGE
} from 'react-native-dotenv';

import { api } from '../services/api';

interface UserProps {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
}

interface AuthContextDataProps {
    user: UserProps | null;
    isSignIng: boolean;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthResponseProps {
    token: string;
    user: UserProps;
}

interface AuthorizationResponseProps {
    params: {
        code?: string;
        error?: string;
    };
    type?: string;
}

export const AuthContext = createContext({} as AuthContextDataProps);

function AuthProvider({ children }: AuthProviderProps) {
    const [isSignIng, setIsSignIng] = useState(true);
    const [user, setUser] = useState<UserProps | null>(null);

    console.log(user)

    async function signIn() {
        try {
            const authUrl = `${GITHUB_AUTH_URL}?client_id=${GITHUB_CLIENT_ID}&scope=${GITHUB_SCOPE}`;
            const authSessionResponse = (await AuthSessions.startAsync({
                authUrl
            })) as AuthorizationResponseProps;

            if (
                authSessionResponse.type === 'success' &&
                authSessionResponse.params.error !== 'access_denied'
            ) {
            }
            {
                const authResponse = await api.post('/authenticate', {
                    code: authSessionResponse.params.code
                });
                const { user, token } = authResponse.data as AuthResponseProps;

                api.defaults.headers.common[
                    'Authorization'
                ] = `Bearer ${token}`;

                await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
                await AsyncStorage.setItem(
                    TOKEN_STORAGE,
                    JSON.stringify(token)
                );

                setUser(user);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSignIng(false);
        }

        setIsSignIng(false);
    }
    async function signOut() {}

    async function loadUserStorageData() {
        const userStorage = await AsyncStorage.getItem(USER_STORAGE);
        const tokenStorage = await AsyncStorage.getItem(TOKEN_STORAGE);

        if (userStorage && tokenStorage) {
            api.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${tokenStorage}`;

            setUser(JSON.parse(userStorage));
        }
        setIsSignIng(false);
    }

    useEffect(() => {
        loadUserStorageData();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signIn,
                signOut,
                user,
                isSignIng
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };
