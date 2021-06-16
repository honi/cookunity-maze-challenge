import styles from './Layout.module.css'

export default function Layout({children}) {
    return (
        <div className={styles.root}>
            <h1>CookUnity Maze Challenge</h1>
            {children}
        </div>
    )
}
