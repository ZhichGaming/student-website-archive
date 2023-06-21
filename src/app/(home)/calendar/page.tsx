"use client"

import { useState } from "react";
import NavigationCard from "./_components/NavigationCard";
import EventsCard from "./_components/EventsCard";
import MonthlyCalendarCard from "./_components/MonthlyCalendarCard";
import WeeklyCalendarCard from "./_components/WeeklyCalendarCard";
import YearlyCalendarCard from "./_components/YearlyCalendarCard";

export default function CalendarPage() {
    // The calendars are "week", "month", and "year".
    const [selectedCalendar, setSelectedCalendar] = useState("month");
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className="flex flex-col w-screen h-screen pl-12 pr-12 pb-12">
            <div className="flex items-center my-4">
                <h1 className="font-bold text-lg">Calendar</h1>
            </div>

            <div className="flex flex-grow items-center my-4 space-x-6">
                <div className="flex flex-col flex-grow h-full space-y-6">
                    <NavigationCard selectedCalendar={selectedCalendar} onCalendarChange={setSelectedCalendar} selectedDate={selectedDate} onDateChange={setSelectedDate}/>
                    <CalendarCard selectedCalendar={selectedCalendar} selectedDate={selectedDate}/>
                </div>
                
                <EventsCard selectedCalendar={selectedCalendar} selectedDate={selectedDate}/>
            </div>
        </div>
    );
}

function CalendarCard({ selectedCalendar , selectedDate }: { selectedCalendar: string, selectedDate: Date }) {
    if (selectedCalendar == "week") {
        return <WeeklyCalendarCard selectedDate={selectedDate}/>
    } else if (selectedCalendar == "month") {
        return <MonthlyCalendarCard selectedDate={selectedDate}/>
    } else {
        return <YearlyCalendarCard selectedDate={selectedDate}/>
    }
}