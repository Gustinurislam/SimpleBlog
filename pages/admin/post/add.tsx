import axios from 'axios';
import TextArea from 'components/admin/form/TextArea';
import TextField from 'components/admin/form/TextField';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSnackbar } from 'slices/snackbarSlice';
import { useEffect } from 'react';

type AdminAddPropType = {
  postId: string | null;
};

type FieldErrorType = {
  title?: string[];
  body?: string[];
};

const AdminAddPost: NextPage<AdminAddPropType> = ({ postId }) => {
  // global state
  const dispatch = useDispatch();

  // local state
  const router = useRouter();

  // field
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // error msgs
  const [fieldErrors, setFieldErrors] = useState<FieldErrorType>({});

  // form
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setTitle(value);

    if (value) {
      setFieldErrors((prevState) => {
        return {
          ...prevState,
          title: [],
        };
      });
    }
  };

  const changeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setBody(value);

    if (value) {
      setFieldErrors((prevState) => {
        return {
          ...prevState,
          body: [],
        };
      });
    }
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    setFieldErrors({});

    if (title && body) {
      const payload = {
        title,
        body,
      };

      if (postId) {
        try {
          await axios.put('/posts/' + postId, payload);
          dispatch(setSnackbar({ text: 'Data edited', type: 'success' }));
          router.push('/admin/post');
        } catch {
          setError('Sorry, an error occcured');
        }
      } else {
        try {
          await axios.post('/posts', payload);
          dispatch(setSnackbar({ text: 'Data added', type: 'success' }));
          router.push('/admin/post');
        } catch {
          setError('Sorry, an error occcured');
        }
      }
    } else {
      let errors: FieldErrorType = {};

      if (!title) errors.title = ['Field is required'];
      if (!body) errors.body = ['Field is required'];

      setFieldErrors(errors);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (postId) {
      const getDetailPost = async () => {
        setLoading(true);

        try {
          const res = await axios.get('/posts/' + postId);
          const { title, body } = res.data;

          setTitle(title);
          setBody(body);
        } catch {
          setError('Sorry, an error occcured');
        }
        setLoading(false);
      };
      getDetailPost();
    }
  }, [postId]);

  return (
    <form onSubmit={submit}>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <TextField
        label="Title"
        value={title}
        onChange={changeTitle}
        disabled={loading}
        errors={fieldErrors?.title || []}
      />
      <TextArea
        label="Body"
        value={body}
        onChange={changeBody}
        disabled={loading}
        errors={fieldErrors?.body || []}
      />
      <button className="btn-post" disabled={loading}>
        Submit
      </button>
    </form>
  );
};

export default AdminAddPost;
