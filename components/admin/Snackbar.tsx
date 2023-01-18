import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSnackbar, currentSnackbar } from 'slices/snackbarSlice';

const Snackbar = () => {
  // global state
  const snackbar = useSelector(currentSnackbar);
  const dispatch = useDispatch();

  const className = `fixed bottom-8 ${
    snackbar?.type === 'success' ? 'bg-green-700' : 'bg-red-700'
  } text-white p-3 rounded-md box-equal gap-x-2 shadow-lg`;

  const btnClassName = `
  snackbar?.type === 'success' ? 'bg-green-800' : 'bg-red-800'
  text-lg
  `;

  useEffect(() => {
    if (snackbar) {
      setTimeout(() => {
        dispatch(setSnackbar(null));
      }, 5000);
    }
  }, [dispatch, snackbar]);

  return (
    <div className={`${className} ${snackbar ? 'right-8' : 'right-[9999px]'}`}>
      <p>{snackbar?.text}</p>

      <button
        className={btnClassName}
        onClick={() => dispatch(setSnackbar(null))}
      >
        &times;
      </button>
    </div>
  );
};

export default Snackbar;
