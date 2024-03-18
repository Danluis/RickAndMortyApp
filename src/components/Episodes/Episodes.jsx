export default function Episodes({ episodes }) {
    return (
      <div className="flex items-center justify-center text-center pt-8  text-white">
        <div className="p-8 border bg-gray-900 h-full border-gray-700 rounded-lg">
          <p className="text-2xl text-blue-500 mb-4">Episode: {episodes.id}</p>
          <p className="text-xl pb-4">Name: {episodes.name} </p>
          <p className="text-xl pb-2">Air Date: {episodes.air_date} </p>
          <p className="text-xl pt-2">Episode: {episodes.episode}</p>
        </div>
      </div>
    );
  }
  