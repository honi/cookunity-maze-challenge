import styles from './Layout.module.css'

export function Layout({children}) {
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <h1>CookUnity Maze Challenge</h1>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}
