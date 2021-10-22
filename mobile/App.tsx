import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    getStatusBarHeight,
    getBottomSpace
} from 'react-native-iphone-x-helper';
import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import { Home } from './src/screens/Home';
import { ContainerApp } from './src/styles/app';

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <ContainerApp>
            <StatusBar style={'light'} />
            <Home />
        </ContainerApp>
    );
}
