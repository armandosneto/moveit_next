import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChanllengesContext';
import styles from '../styles/components/CompletedChallenges.module.css'

export const CompletedChallenges: React.FC = () => {

    const { challengesCompleted } = useContext(ChallengesContext)

    return(
        <div className={styles.completedChallenges} >
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}