import React, { ReactNode } from 'react';
import styles from './NoteList.module.css';

export default function NoteList({ children }: { children: ReactNode }) {
  return (
    <div className={styles.notesContainer}>
        <h2 className={styles.title}>Заметки:</h2>
        <ul className={styles.notesList}>
            {React.Children.map(children, (child, index) => (<li key={index}>{child}</li>))}
        </ul>
    </div>
  );
}