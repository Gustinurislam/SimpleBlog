function PostSkeleton() {
  return (
    <div className="box-equal gap-x-4 mb-8 animate-pulse">
      <div className="bg-gray-300 w-[200px] h-[130px] min-w-[200px] min-h-[120px] max-w-[200px] max-h-[130px]" />

      <div className="space-y-4 flex-1">
        <div className="bg-gray-300 h-4 w-1/6" />
        <div className="bg-gray-300 h-6" />

        <div className="bg-gray-300 h-4" />
        <div className="bg-gray-300 h-4 w-1/2" />
      </div>
    </div>
  );
}

export default PostSkeleton;
