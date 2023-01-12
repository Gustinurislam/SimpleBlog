import Link from 'next/link';
import React from 'react';

const RelatedPost = () => {
  return (
    <section className="mt-5 mb-8 border-b border-gray-300 pb-8">
      <div className="box-equal gap-x-4 mb-4">
        <h2 className="text-lg font-bold">Related Posts</h2>
        <hr className="flex-1 border-t border-gray-300" />
      </div>

      <nav className="grid grid-cols-4 gap-x-3">
        {/* title  */}
        {[1, 2, 3, 4].map((post) => (
          <Link key={'post -' + post} href="/post/moto-gp">
            <div className="bg-gray-300 text-gray-500 box-center h-[100px] mb-2">
              img
            </div>

            <span className="text-sm text-gray-700 hover:underline hover:text-red-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </span>
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default RelatedPost;
