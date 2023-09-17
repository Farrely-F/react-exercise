const SkeletonLoader = () => {
  return (
    <div className="min-w-[240px] animate-pulse md:mr-4 p-5 max-w-xs md:min-w-[180px] flex flex-col gap-y-2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20 border border-gray-100/20 transition-all ease-in-out duration-500">
      <div className="w-full h-40 min-h-[160px] bg-gray-300/50 rounded"></div>
      <div className="h-4 bg-gray-300/50 mb-2 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300/50 mb-2 rounded w-1/2"></div>
      <div className="h-4 bg-gray-300/50 rounded w-2/3"></div>
    </div>
  );
};

export default SkeletonLoader;
