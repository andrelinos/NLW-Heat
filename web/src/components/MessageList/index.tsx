import styles from './styles.module.scss';
import { api } from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { useEffect } from 'react';

export function MessageList() {

  useEffect(() => {
    api.get('messages').then((response) => {
      console.log(response.data)
    })
  },[])

    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContainer}>
                        lorem ipsum dolor sit amet, consect lorem ipsum dolor
                        sit amet
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img
                                src="https://github.com/andrelinos.png"
                                alt="Andrelino Silva"
                            />
                        </div>
                        <span>Andrelino Silva</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContainer}>
                        lorem ipsum dolor sit amet, consect lorem ipsum dolor
                        sit amet
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img
                                src="https://github.com/andrelinos.png"
                                alt="Andrelino Silva"
                            />
                        </div>
                        <span>Andrelino Silva</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContainer}>
                        lorem ipsum dolor sit amet, consect lorem ipsum dolor
                        sit amet
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img
                                src="https://github.com/andrelinos.png"
                                alt="Andrelino Silva"
                            />
                        </div>
                        <span>Andrelino Silva</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
