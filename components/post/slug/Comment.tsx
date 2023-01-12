import { CommentType } from 'pages/post/[id]';
import { FaUser } from 'react-icons/fa';

type CommentPropType = {
  comment: CommentType
}

const Comment = ({comment}: CommentPropType) => {
  return (
    <div className="flex gap-x-4 mb-8">
      {/* profile pic  */}
      <div className="w-8 h-8 bg-gray-300 rounded-full box-center">
        <FaUser />
      </div>

      <div className="text-sm">
        {/* usrename  */}
        <p className="font-bold">{comment.email}</p>
        {/* comment  */}
        <p dangerouslySetInnerHTML={{ __html: comment.body }} className='whitespace-pre' />
        {/* btns  */}
        <div className="flex gap-x-4 mt-4">
          <button className="text-blue-500 hover:text-red-500 hover:underline">
            Reply
          </button>
          <button className="text-blue-500 hover:text-red-500 hover:underline">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
