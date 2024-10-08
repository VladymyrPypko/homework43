import styles from './ErrorMessage.module.css'

export default function ErrorMessage({text}: {text: string}) {
  return (
    <div className={styles.errorMessage}>
      <p>{text}</p>
    </div>
  )
}