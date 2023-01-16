const Snackbar = () => {
  return (
    <div className="fixed bottom-8 right-8 bg-green-700 text-white p-3 rounded-md box-equal gap-x-2">
      <p>Data Added</p>

      <button className="text-lg">&times;</button>
    </div>
  );
};

export default Snackbar;
