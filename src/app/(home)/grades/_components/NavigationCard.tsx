"use client"

import { useState } from "react";

export default function NavigationCard({ gradeCategories, selectedClass, onSelectedClassChange, term, onTermChange, search, onSearchChange }: { gradeCategories: any[], selectedClass: string, onSelectedClassChange: (selectedClass: string) => void, term: string, onTermChange: (term: string) => void, search: string, onSearchChange: (search: string) => void }) {
    const classOptionsSet = [new Set(gradeCategories.map((gradeCategory) => gradeCategory.class))];
    const classOptions = Array.from(classOptionsSet[0]);

    const handleSelectedClassChange = (event) => {
        onSelectedClassChange(event.target.value);
    }

    const handleTermChange = (event) => {
        onTermChange(event.target.value);
    }

    const handleSearchChange = (event) => {
        onSearchChange(event.target.value);
    }

    return (
        <div className="flex bg-white items-center space-x-2 p-2 px-6 rounded-md justify-between shadow-sm">
            <div className="flex space-x-2">
                <select className="border border-gray-300 rounded-md p-1 w-64" onChange={handleSelectedClassChange}>
                    <option>All</option>
                    {classOptions.map((option) => (
                        <option>{option}</option>
                    ))}
                </select>
                <select className="border border-gray-300 rounded-md p-1 w-24" onChange={handleTermChange}>
                    <option>Term 1</option>
                    <option>Term 2</option>
                    <option>Term 3</option>
                </select>
            </div>

            <input type="text" placeholder="Search" className="border border-gray-300 rounded-md p-1 w-64 px-2" onChange={handleSearchChange}/>
        </div>
    );
}
