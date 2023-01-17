import { FaBackward, FaTrash } from 'react-icons/fa';

type DeletePopupPropType = {
  postId: number;
  setPostId: (postId: number | null) => void;
};

const DeletePopup = ({ postId, setPostId }: DeletePopupPropType) => {
  return (
    <div className="fixed inset-0 box-center">
      {/* content  */}
      <div className="relative z-10 rounded-md bg-white w-[400px] p-4">
        {/* title  */}
        <h3 className="font-bold text-xl border-b pb-4 text-blue-500">
          Warning
        </h3>

        {/* desc  */}
        <h3 className="py-4 border-b pb-4">
          Are you sure you want to <span className="text-red-500">Delete</span>
        </h3>

        {/* btn  */}
        <div className="flex justify-end gap-x-4 mt-4">
          <button
            className="btn-post box-equal gap-x-1"
            onClick={() => setPostId(null)}
          >
            <FaBackward />
            Cancel
          </button>
          <button className="btn-post box-equal gap-x-1">
            <FaTrash />
            Delete
          </button>
        </div>
      </div>

      {/* bg */}
      <div
        className="bg-black/50 absolute inset-0"
        onClick={() => setPostId(null)}
      />
    </div>
  );
};

export default DeletePopup;
