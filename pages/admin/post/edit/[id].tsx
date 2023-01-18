import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Add from '../add';

const EditPost: NextPage = () => {
  const { query } = useRouter();

  return <Add postId={typeof query.id === 'string' ? query?.id : null} />;
};

export default EditPost;
