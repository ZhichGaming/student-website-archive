"use client"

import { useState } from "react";
import { getNumDaysInMonth } from "../../../_utils/dateFunctions";

export default function NavigationCard({ selectedCalendar, onCalendarChange, selectedDate, onDateChange }: { selectedCalendar: string, onCalendarChange: (calendar: string) => void, selectedDate: Date, onDateChange: (date: Date) => void }) {
    const onClickOfPreviousButton = (event) => {
        if (selectedCalendar == "week") {
            if (selectedDate.getDate() - 7 < 1) {
                if (selectedDate.getMonth() - 1 < 0) {
                    onDateChange(new Date(selectedDate.getFullYear() - 1, 11, getNumDaysInMonth(new Date(selectedDate.getFullYear() - 1, 11, 1)) + (selectedDate.getDate() - 7)));

                    return;
                }

                onDateChange(
                    new Date(selectedDate.getFullYear(), 
                    selectedDate.getMonth() - 1, 
                    getNumDaysInMonth(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)) + (selectedDate.getDate() - 7)));

                return;
            }

            onDateChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() - 7));
        } else if (selectedCalendar == "month") {
            if (selectedDate.getMonth() - 1 < 0) {
                onDateChange(new Date(selectedDate.getFullYear() - 1, 11, 1));

                return;
            }

            onDateChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, selectedDate.getDate()));
        } else {
            onDateChange(new Date(selectedDate.getFullYear() - 1, selectedDate.getMonth(), selectedDate.getDate()));
        }
    }

    const onClickOfNextButton = (event) => {
        if (selectedCalendar == "week") {
            if (selectedDate.getDate() + 7 > getNumDaysInMonth(selectedDate)) {
                if (selectedDate.getMonth() + 1 > 11) {
                    onDateChange(new Date(selectedDate.getFullYear() + 1, 0, (selectedDate.getDate() + 7) - getNumDaysInMonth(selectedDate)));

                    return;
                }

                onDateChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, (selectedDate.getDate() + 7) - getNumDaysInMonth(selectedDate)));

                return;
            }

            onDateChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + 7));
        } else if (selectedCalendar == "month") {
            if (selectedDate.getMonth() + 1 > 11) {
                onDateChange(new Date(selectedDate.getFullYear() + 1, 0, 1));

                return;
            }

            onDateChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, selectedDate.getDate()));
        } else {
            onDateChange(new Date(selectedDate.getFullYear() + 1, selectedDate.getMonth(), selectedDate.getDate()));
        }
    }

    const getStyledDate = () => {
        if (selectedCalendar == "week") {
            return selectedDate.toLocaleDateString('en-us', { month: 'short' }) + " " + selectedDate.getDate().toString() + ", " + selectedDate.getFullYear().toString()
        } else if (selectedCalendar == "month") {
            return selectedDate.toLocaleDateString('en-us', { month: 'long' }) + " " + selectedDate.getFullYear()
        } else {
            return selectedDate.getFullYear().toString()
        }
    }

    return (
        <div className="flex bg-white items-center space-x-2 p-2 px-6 rounded-md justify-between shadow-sm">
            <div className="flex items-center space-x-2">
                <p className="w-36">{getStyledDate()}</p>
                <button className="w-10 h-10 bg-black bg-opacity-10 rounded-md" onClick={onClickOfPreviousButton}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="w-10 h-10 bg-black bg-opacity-10 rounded-md" onClick={onClickOfNextButton}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>

            <SegmentedPicker selectedCalendar={selectedCalendar} onCalendarChange={onCalendarChange}/>
        </div>
    );
}

function SegmentedPicker({ selectedCalendar, onCalendarChange }: { selectedCalendar: string, onCalendarChange: (calendar: string) => void }) {
    return (
        <div className="flex bg-black bg-opacity-10 w-72 h-full rounded-md p-1">
            <button 
            className={"flex-grow rounded-md" + (selectedCalendar == "week" ? " bg-white" : "")} 
            onClick={() => onCalendarChange("week")}>
                Week
            </button>
            <button 
            className={"flex-grow rounded-md" + (selectedCalendar == "month" ? " bg-white" : "")} 
            onClick={() => onCalendarChange("month")}>
                Month
            </button>
            <button 
            className={"flex-grow rounded-md" + (selectedCalendar == "year" ? " bg-white" : "")} 
            onClick={() => onCalendarChange("year")}>
                Year
            </button>
        </div>
    );
}
