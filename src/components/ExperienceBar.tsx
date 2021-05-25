import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChanllengesContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar(){

    const { currentExperience,experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = currentExperience/experienceToNextLevel*100;

    return (
        <header className={ styles.experienceBar } >
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }}>
                    <span className={ styles.currentExperience } style={{ left: `${percentToNextLevel}%` }}>
                        {currentExperience}
                    </span>
                </div>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );

}