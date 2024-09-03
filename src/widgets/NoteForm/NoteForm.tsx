import { useFormik } from 'formik';
import { useAppDispatch } from '../../app';
import styles from './NoteForm.module.css';
import { noteValidationSchema } from './noteValidationSchema';
import { addNote, Note } from '../../data/notes';
import { Button, ErrorMessage, Input } from '../../common/ui';

export default function NoteForm() {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: { title: '', text: '' },
    validationSchema: noteValidationSchema,
    onSubmit: (values, { resetForm }) => {
      const newNote: Note = {
        id: Date.now(),
        title: values.title,
        text: values.text
      }
      dispatch(addNote(newNote));
      resetForm();
    }
  })

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles.formItem}>
        <Input
          type={'text'}
          name={'title'}
          placeholder={'Введите заголовок заметки'}
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.title && formik.errors.title ? (
          <ErrorMessage text={formik.errors.title}></ErrorMessage>
        ) : null}
      </div>

      <div className={styles.formItem}>
        <Input
          type={'text'}
          name={'text'}
          placeholder={'Введите текст заметки'}
          value={formik.values.text}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.text && formik.errors.text ? (
          <ErrorMessage text={formik.errors.text}></ErrorMessage>
        ) : null}
      </div>

      <Button
        type={'submit'}
        text={'Добавить'}
      />
    </form>
  )
}