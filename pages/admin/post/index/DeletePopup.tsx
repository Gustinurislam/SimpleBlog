import axios from 'axios';
import { useState } from 'react';
import { FaBackward, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setSnackbar } from 'slices/snackbarSlice';

type DeletePopupPropType = {
  postId: number;
  setPostId: (postId: number | null) => void;
};

const DeletePopup = ({ postId, setPostId }: DeletePopupPropType) => {
  // global state
  const dispatch = useDispatch();

  // local state
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    try {
      await axios.delete('/posts/' + postId);
      dispatch(setSnackbar({ text: 'Data delete', type: 'success' }));
      setPostId(null);
    } catch {
      dispatch(
        setSnackbar({ text: 'Sorry, an error occcured', type: 'error' }),
      );
      // setError('Sorry, an error occcured');
    }
    setLoading(false);
  };

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
            disabled={loading}
          >
            <FaBackward />
            Cancel
          </button>
          <button
            className="btn-post box-equal gap-x-1"
            disabled={loading}
            onClick={submit}
          >
            <FaTrash />
            Confirm
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
