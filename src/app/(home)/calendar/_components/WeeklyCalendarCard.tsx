import { getDaysOfWeek } from "../../../_utils/dateFunctions";

export default function WeeklyCalendar({ selectedDate }: { selectedDate: Date }) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var week = getDaysOfWeek(selectedDate);

    var classDays: ClassDay[] = week.map((date) => {
        return { date: date, classes: ["Math", "French", "History", "Music", "Programming"].sort(() => Math.random() - 0.5), events: [] };
    });

    classDays[0].classes = []
    classDays[6].classes = []

    classDays[3].events = ["Final Exam", "Poetry Exam"];
    classDays[4].events = ["Math Exam", "Science Exam", "History Exam", "English Exam"];

    // const colors = ["bg-red-200", "bg-orange-200", "bg-yellow-200", "bg-lime-200", "bg-teal-200", "bg-cyan-200", "bg-blue-200", "bg-violet-200", "bg-green-200", "bg-rose-200"]

    return (
        <div className="flex flex-col flex-grow bg-white items-center space-x-2 p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-7 grid-rows-1 gap-1 justify-around w-full text-center mb-2">
                {Array.from({ length: 7 }, (_, index) => (
                    <WeeklyCalendarDayText text={days[index]} date={week[index]}/>
                ))}
            </div>
            <div className="grid grid-cols-7 grid-rows-1 gap-1 flex-grow w-full">
                {classDays.map((day) => (
                    <div className={"flex flex-col rounded border-black border-opacity-25 border justify-start text-center" + ((day == classDays[0]) || (day == classDays[6]) ? " bg-black bg-opacity-10" : "")}>
                        <p className="my-1">{day.date.getDate()}</p>

                        <div className="flex flex-col mb-auto">
                            {day.classes.map((className) => (
                                // <p className={"text-sm rounded-md mx-2 my-1 py-1 " + colors[Math.floor(Math.random() * 10)]}>{className}</p>
                                <p className={"text-sm rounded-md mx-2 my-1 py-1"}>{className}</p>
                            ))}
                        </div>

                        <hr/>

                        <div className="flex flex-col">
                            {day.events.map((eventName) => (
                                <p className="text-sm rounded-md mx-2 my-1">{eventName}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

type ClassDay = {
    date: Date,
    classes: string[],
    events: string[]
}

function WeeklyCalendarDayText({ text, date }: { text: string, date: Date }) {
    const today = new Date();
    var isToday = date.getDate() == today.getDate() && date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear();

    return (
        <p className={"text-lg" + (isToday ? "font-bold text-white bg-[#5F9EA0] rounded-md text-center text-lg" : "")}>{text}</p>
    );
}