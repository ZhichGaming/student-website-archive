export default function EventsCard() {
  return (
    <div className="bg-white rounded-md p-8 flex flex-col h-4/6">
      <p className="text-lg opacity-50 mb-2">
        <b>Upcoming Events</b>
      </p>
      <div>
        <p className="text-lg">
          Science Exam <span className="text-[0.75rem] text-sm opacity-50">In 4 days</span>
        </p>
      </div>
    </div>
  );
}

