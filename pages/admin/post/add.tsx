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

const AdminAddPost: NextPage<AdminAddPropType> = ({ postId }) => {
  // global state
  const dispatch = useDispatch();

  // local state
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const changeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      title,
      body,
    };

    setLoading(true);

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
      />
      <TextArea
        label="Body"
        value={body}
        onChange={changeBody}
        disabled={loading}
      />
      <button className="btn-post" disabled={loading}>
        Submit
      </button>
    </form>
  );
};

export default AdminAddPost;
