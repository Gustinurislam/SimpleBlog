import PostSkeleton from './index/PostSkeleton';

function MainPageSkeleton() {
  return (
    <section className="flex-1 border-r border-gray-300 p-4">
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </section>
  );
}

export default MainPageSkeleton;
