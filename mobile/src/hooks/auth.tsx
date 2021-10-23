import React, { createContext, useContext, useState } from 'react';
import * as AuthSessions from 'expo-auth-session';

const GITHUB_CLIENT_ID = '456ed1e3ab29a16cccf2';
const SCOPE = 'read:user';

interface UserProps {
    id: string;
    avatar: string;
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
    };
}

export const AuthContext = createContext({} as AuthContextDataProps);

function AuthProvider({ children }: AuthProviderProps) {
    const [isSignIng, setIsSignIng] = useState(false);
    const [user, setUser] = useState<UserProps | null>(null);

    async function signIn() {
      setIsSignIng(true);
        const authUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=${SCOPE}`;
        const { params } = (await AuthSessions.startAsync({
            authUrl
        })) as AuthorizationResponseProps;

        console.log( 'teste:', params);
    }
    async function signOut() {}

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
