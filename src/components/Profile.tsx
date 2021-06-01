import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChanllengesContext'

import styles from '../styles/components/Profile.module.css'

export function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer} >
            <img src="https://github.com/armandosneto.png" alt="Armando Neto" />
            <div>
                <strong>Armando Neto</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )

}