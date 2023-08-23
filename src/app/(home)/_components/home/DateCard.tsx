export default function DateCard() {
  return (
    <div className="flex space-x-6 text-center">
      <div className="bg-white rounded-md p-8 flex-1 shadow-sm">
        <p className="text-3xl font-bold">20</p>
        <p className="text-sm">days left</p>
      </div>
      <div className="bg-white rounded-md p-8 flex-1 shadow-sm">
        <p className="text-sm">Day</p>
        <p className="text-3xl font-bold">8</p>
      </div>
    </div>
  );
}

