import React from 'react';

const TblRowSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-3 border-y py-4 items-center animate-pulse">
        <div className="w-32 h-4 bg-gray-300 " />
        <div className="w-32 h-4 bg-gray-300 " />

        <div className="flex space-x-2">
          <div className="w-8 h-4 bg-gray-300 " />
          <div className="w-8 h-4 bg-gray-300 " />
        </div>
      </div>
      
      <div className="grid grid-cols-3 border-y py-4 items-center animate-pulse">
        <div className="w-32 h-4 bg-gray-300 " />
        <div className="w-32 h-4 bg-gray-300 " />

        <div className="flex space-x-2">
          <div className="w-8 h-4 bg-gray-300 " />
          <div className="w-8 h-4 bg-gray-300 " />
        </div>
      </div>
      <div className="grid grid-cols-3 border-y py-4 items-center animate-pulse">
        <div className="w-32 h-4 bg-gray-300 " />
        <div className="w-32 h-4 bg-gray-300 " />

        <div className="flex space-x-2">
          <div className="w-8 h-4 bg-gray-300 " />
          <div className="w-8 h-4 bg-gray-300 " />
        </div>
      </div>
      <div className="grid grid-cols-3 border-y py-4 items-center animate-pulse">
        <div className="w-32 h-4 bg-gray-300 " />
        <div className="w-32 h-4 bg-gray-300 " />

        <div className="flex space-x-2">
          <div className="w-8 h-4 bg-gray-300 " />
          <div className="w-8 h-4 bg-gray-300 " />
        </div>
      </div>

    </>
  );
};

export default TblRowSkeleton;
