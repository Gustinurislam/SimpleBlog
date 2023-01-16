'use strict';

import axios from 'axios';
import TextArea from 'components/admin/TextArea';
import TextField from 'components/admin/TextField';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { currentCount } from 'slices/counterSlice';

const AdminAddPost: NextPage = () => {
  // global state
  // const count = useSelector(currentCount);
  // const dispatch = useDispatch();

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
    try {
      await axios.post('/posts', payload);
      router.push('/admin/post');
    } catch {
      setError('Sorry, an error occcured');
    }
    setLoading(false);
  };

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
