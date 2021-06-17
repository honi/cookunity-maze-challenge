import styles from './WelcomeOverlay.module.css'

export function WelcomeOverlay({onStart}) {
    return (
        <div className={styles.root}>
            <p>click start to begin</p>
            <button onClick={onStart}>start</button>
        </div>
    )
}
