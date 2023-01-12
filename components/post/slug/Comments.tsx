import { CommentType } from 'pages/post/[id]';
import Comment from './Comment';

type CommentsPropType = {
  comments: CommentType[];
};

const Comments = ({ comments }: CommentsPropType) => {
  return (
    <section>
      <h2 className="mb-8 font-bold">{comments.length} Comments:</h2>

      {/* comment  */}
      {comments.map((comment) => (
        <Comment key={'comment-' + comment.id} comment={comment} />
      ))}
    </section>
  );
};

export default Comments;
