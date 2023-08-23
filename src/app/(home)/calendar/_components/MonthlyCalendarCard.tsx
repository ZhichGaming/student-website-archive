import { getFirstDayOfMonth, getNumDaysInMonth } from "../../../_utils/dateFunctions";

export default function MonthlyCalendar({ selectedDate }: { selectedDate: Date }) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var numDaysInMonth = getNumDaysInMonth(selectedDate);
    var numDaysInLastMonth = getNumDaysInMonth(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
    var firstDayOfMonth = getFirstDayOfMonth(selectedDate);

    return (
        <div className="flex flex-col flex-grow bg-white items-center space-x-2 p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-7 grid-rows-1 gap-1 justify-around w-full text-center mb-2">
                {days.map((day) => (
                    <p className="text-lg">{day}</p>
                ))}
            </div>
            <div className="grid grid-cols-7 grid-rows-6 gap-1 flex-grow w-full">
                {Array.from({ length: (42-(42-numDaysInMonth-firstDayOfMonth)-numDaysInMonth) }, (_, index) => (
                    <div className="flex rounded border-black border-opacity-25 border bg-black bg-opacity-10">
                        {/* <p className="p-1 ml-1">{numDaysInLastMonth - index}</p> */}
                        <MonthCalendarDayText text={(numDaysInLastMonth - index).toString()} date={new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, numDaysInLastMonth - index)}/>
                    </div>
                )).reverse()}
                {Array.from({ length: numDaysInMonth }, (_, index) => (
                    <div className="flex rounded border-black border-opacity-25 border">
                        {/* <p className="p-1 ml-1">{index + 1}</p> */}
                        <MonthCalendarDayText text={(index + 1).toString()} date={new Date(selectedDate.getFullYear(), selectedDate.getMonth(), index + 1)}/>
                    </div>
                ))}
                {Array.from({ length: (42-numDaysInMonth-firstDayOfMonth) }, (_, index) => (
                    <div className="flex rounded border-black border-opacity-25 border bg-black bg-opacity-10">
                        {/* <p className="p-1 ml-1">{index + 1}</p> */}
                        <MonthCalendarDayText text={(index + 1).toString()} date={new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, index + 1)}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

function MonthCalendarDayText({ text, date }: { text: string, date: Date }) {
    const today = new Date();
    var isToday = date.getDate() == today.getDate() && date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear();

    return (
        <p className={"p-1 m-1" + (isToday ? " font-bold text-white bg-[#5F9EA0] rounded-md text-center w-8 h-8" : "")}>{text}</p>
    );
}
