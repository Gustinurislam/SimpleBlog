const BlueBoxSkeleton = () => {
  return (
    <nav className="bg-blue-500 text-white p-8 grid grid-cols-3 gap-x-4 uppercase">
      <div>
        <p className="font-semibold mb-4">Popular Post</p>

        <div className="h-5 mb-2 bg-gray-300 animate-pulse" />
        <div className="h-5 mb-2 bg-gray-300 animate-pulse w-1/3" />
        <hr className="my-2 border-t border-gray-200" />

        <div className="h-5 mb-2 bg-gray-300 animate-pulse" />
        <div className="h-5 mb-2 bg-gray-300 animate-pulse w-1/3" />
        <hr className="my-2 border-t border-gray-200" />

        <div className="h-5 mb-2 bg-gray-300 animate-pulse" />
        <div className="h-5 mb-2 bg-gray-300 animate-pulse w-1/3" />
        <hr className="my-2 border-t border-gray-200" />
      </div>

      <div>
        <p className="font-semibold mb-4">Category</p>

        <div className="h-5 mb-2 bg-gray-300 animate-pulse w-1/3" />
        <hr className="my-2 border-t border-gray-200" />

        <div className="h-5 mb-2 bg-gray-300 animate-pulse w-1/3" />
        <hr className="my-2 border-t border-gray-200" />

        <div className="h-5 mb-2 bg-gray-300 animate-pulse w-1/3" />
        <hr className="my-2 border-t border-gray-200" />
      </div>
    </nav>
  );
};

export default BlueBoxSkeleton;
