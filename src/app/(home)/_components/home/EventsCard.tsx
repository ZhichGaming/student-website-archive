export default function EventsCard() {
  return (
    <div className="bg-white rounded-md p-8 flex flex-col h-4/6 shadow-sm">
      <p className="text-lg opacity-60 mb-2">
        <b>Upcoming Events</b>
      </p>
      <div>
        <p className="text-lg">
          Science Exam <span className="text-[0.75rem] text-sm opacity-60">In 4 days</span>
        </p>
      </div>
    </div>
  );
}

