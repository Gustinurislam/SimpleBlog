import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSnackbar, currentSnackbar } from 'slices/snackbarSlice';

const Snackbar = () => {
  // global state
  const snackbar = useSelector(currentSnackbar);
  const dispatch = useDispatch();

  const className =
    'fixed bottom-8 bg-green-700 text-white p-3 rounded-md box-equal gap-x-2 shadow-lg';

  useEffect(() => {
    if (snackbar) {
      setTimeout(() => {
        dispatch(setSnackbar(''));
      }, 5000);
    }
  }, [dispatch, snackbar]);

  return (
    <div className={`${className} ${snackbar ? 'right-8' : 'right-[9999px]'}`}>
      <p>{snackbar}</p>

      <button className="text-lg" onClick={() => dispatch(setSnackbar(''))}>
        &times;
      </button>
    </div>
  );
};

export default Snackbar;
