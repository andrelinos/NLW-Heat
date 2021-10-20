import { MessageList } from './components/MessageList';

import { LoginBox } from './components/LoginBox';
import { useContext } from 'react';
import { AuthContext } from './context/auth';

import styles from './App.module.scss';
import { SendMessageForm } from './components/SendMessageForm';

export function App() {
    const { user } = useContext(AuthContext);
    return (
        <main className={styles.contentWrapper}>
            <MessageList />
            {!!user ? <SendMessageForm /> : <LoginBox />}
        </main>
    );
}
