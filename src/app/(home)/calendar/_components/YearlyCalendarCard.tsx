import { getFirstDayOfMonth } from "../../../_utils/dateFunctions";

export default function YearlyCalendar({ selectedDate }: { selectedDate: Date }) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysInMonth = [31, (selectedDate.getFullYear() % 4 == 0 && selectedDate.getFullYear() % 100 != 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    const startOfMonth = [getFirstDayOfMonth(new Date(selectedDate.getFullYear(), 0, 1)), getFirstDayOfMonth(new Date(selectedDate.getFullYear(), 1, 1)), getFirstDayOfMonth(new Date(selectedDate.getFullYear(), 2, 1)), getFirstDayOfMonth(new Date(selectedDate.getFullYear(), 3, 1)), getFirstDayOfMonth(new Date(selectedDate.getFullYear(), 4, 1)), getFirstDayOfMonth(new Date(selectedDate.getFullYear(), 5, 1)), getFirstDayOfMonth(new Date(selectedDate.getFullYear(), 6, 1)), getFirstDayOfMonth(new Date(selectedDate.getFullYear(), 7, 1)), getFirstDayOfMonth(new Date(selectedDate.getFullYear(), 8, 1)), getFirstDayOfMonth(new Date(selectedDate.getFullYear(), 9, 1)), getFirstDayOfMonth(new Date(selectedDate.getFullYear(), 10, 1)), getFirstDayOfMonth(new Date(selectedDate.getFullYear(), 11, 1))];

    return (
        <div className="flex flex-col flex-grow bg-white items-center space-x-2 p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-3 grid-rows-4 gap-1 justify-around h-full w-full text-center mb-2">
                {Array.from({ length: 12 }, (_, index) => (
                    <div className="flex flex-col rounded items-center">
                        <p className="text-lg">{months[index]}</p>
                        <div className="grid grid-cols-7 grid-rows-5">
                            {Array.from({ length: startOfMonth[index] }, (_, dayIndex) => (
                                <p className="text-sm p-1 opacity-0">{dayIndex + 1}</p>
                            ))}
                            {Array.from({ length: daysInMonth[index] }, (_, dayIndex) => (
                                <p className={"text-sm p-1 w-8 h-7" + (index == new Date().getMonth() && dayIndex == new Date().getDate() && selectedDate.getFullYear() == new Date().getFullYear() ? " font-bold text-white bg-[#5F9EA0] rounded-md text-center" : "")}>{dayIndex + 1}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
