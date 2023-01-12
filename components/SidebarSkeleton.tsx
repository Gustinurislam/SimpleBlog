const SidebarSkeleton = () => {
  return (
    <nav className="w-[350px] min-w-[350px] max-w-[350px] p-4 uppercase">
      {/* title  */}
      <div className="box-equal gap-x-2 mb-4">
        <div className="w-[20px] h-[20px] bg-red-500" />
        <span className="font-semibold">Featured post</span>
      </div>

      <div className="w-3/4 h-5 bg-gray-300 animate-pulse mb-3" />
      <div className="w-3/4 h-5 bg-gray-300 animate-pulse" />

      <div className="bg-gray-300 h-[130px] mt-4 mb-8 animate-pulse" />

      {/* title  */}
      <div className="box-equal gap-x-2 mb-4">
        <div className="w-[20px] h-[20px] bg-red-500" />
        <span className="font-semibold">Popular post</span>
      </div>

      {/* post  */}
      <div className="h-5 mb-2 bg-gray-300 animate-pulse" />
      <div className="h-5 mb-2 bg-gray-300 animate-pulse w-1/3" />
      <hr className="my-2 border-t border-gray-200" />

      <div className="h-5 mb-2 bg-gray-300 animate-pulse" />
      <div className="h-5 mb-2 bg-gray-300 animate-pulse w-1/3" />
      <hr className="my-2 border-t border-gray-200" />

      <div className="h-5 mb-2 bg-gray-300 animate-pulse" />
      <div className="h-5 mb-2 bg-gray-300 animate-pulse w-1/3" />
      <hr className="my-2 border-t border-gray-200" />

      {/* title  */}
      <div className="box-equal gap-x-2 mt-8 mb-4">
        <div className="w-[20px] h-[20px] bg-red-500" />
        <span className="font-semibold">Categories</span>
      </div>

      <div className="h-5 mb-2 bg-gray-300 animate-pulse w-1/6 inline-block mr-2" />
      <div className="h-5 mb-2 bg-gray-300 animate-pulse w-1/6 inline-block mr-2" />
      <div className="h-5 mb-2 bg-gray-300 animate-pulse w-1/6 inline-block mr-2" />
    </nav>
  );
};

export default SidebarSkeleton;
