export default function EventsCard() {
  return (
    <div className="bg-white rounded-md p-8 flex flex-col h-4/6">
      <p className="text-lg opacity-50 mb-2">
        <b>Upcoming Events</b>
      </p>
      <div className="">
        <p>Science Exam</p>
        {/* For some reason, this text goes up when I try to put these two on a same line using flex. Very weird. */}
        <p className="text-sm opacity-50">In 4 days</p>
      </div>
    </div>
  );
}
