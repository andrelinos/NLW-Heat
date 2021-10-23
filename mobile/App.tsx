import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import { Home } from './src/screens/Home';
import { ContainerApp } from './src/styles/app';
import { AuthProvider } from './src/hooks/auth';

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <AuthProvider>
            <ContainerApp>
                <StatusBar
                    style="light"
                    translucent
                    backgroundColor="transparent"
                />
                <Home />
            </ContainerApp>
        </AuthProvider>
    );
}
