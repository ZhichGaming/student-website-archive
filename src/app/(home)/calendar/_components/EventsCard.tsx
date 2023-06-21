export default function EventsCard({ selectedCalendar , selectedDate }: { selectedCalendar: string, selectedDate: Date }) {
    const events: SchoolEvent[] = [
        { name: "Final Exam", date: new Date(), class: "French" },
        { name: "Poetry Exam", date: new Date(2022, 6, 1), class: "English" },
        { name: "Math Exam", date: new Date(2022, 4, 1), class: "Math" },
        { name: "Science Exam", date: new Date(), class: "Science" },
        { name: "History Exam", date: new Date(2021, 4, 1), class: "History" },
        { name: "English Exam", date: new Date(2021, 4, 1), class: "English" },
    ].sort((a, b) => a.date.getTime() - b.date.getTime());

    const eventsHtml = events.map((event) => (
        <div className="bg-white rounded-md p-4 space-y-1 hover:bg-black hover:bg-opacity-10">
            <p className="font-semibold text-sm">{event.name}</p>

            <div className="flex">
                <p className="text-sm">{event.class}</p>
                <p className="text-sm ml-auto opacity-50">{event.date.toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</p>
            </div>
        </div>
    ));

    return (
        <div className="flex flex-col bg-white p-4 rounded-md w-80 h-full">
            <h2 className="font-bold text-lg ml-2 mb-2">Events This Month</h2>
            {eventsHtml}
        </div>
    );
}

type SchoolEvent = {
    name: string,
    date: Date,
    class: string
}
