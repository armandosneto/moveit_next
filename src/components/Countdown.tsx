import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChanllengesContext';
import styles from '../styles/components/Countdown.module.css'

function useCountdown() {

    let countdownTimeout: NodeJS.Timeout;

    const {startNewChallenge} = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    const hooked = {
        isActive,
        hasFinished,
        minuteLeft,
        minuteRight,
        secondLeft,
        secondRight,
        startCountDown: () => { setIsActive(true) },
        resetCountDown: () => {
            clearTimeout(countdownTimeout)
            setIsActive(false);
            setTime(0.1 * 60)
        }
    }

    return hooked;
}

export const Countdown: React.FC = () => {

    const countDown = useCountdown();

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{countDown.minuteLeft}</span>
                    <span>{countDown.minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{countDown.secondLeft}</span>
                    <span>{countDown.secondRight}</span>
                </div>

            </div>

            {countDown.hasFinished ? (
                <button
                    disabled
                    type="button"
                    className={styles.countdownButton}
                >
                    <div className={styles.countdownButtonText}>
                        Ciclo encerrado
                        <img src='icons/check.svg' alt='check' />
                    </div>
                </button>
            ) : (
                <>
                    {countDown.isActive ? (

                        <button
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={countDown.resetCountDown}
                        >
                            <div className={styles.countdownButtonText}>
                                Abandonar ciclo
                                <img src='icons/uncheck.svg' alt='uncheck' />
                            </div>
                        </button>

                    ) : (

                        <button
                            type="button"
                            className={styles.countdownButton}
                            onClick={countDown.startCountDown}
                        >
                            Iniciar ciclo
                        </button>

                    )}
                </>

            )}




        </div>
    )
}