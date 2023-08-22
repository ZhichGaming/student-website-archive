"use client"

import GradesCard from "./_components/GradesCard";
import NavigationCard from "./_components/NavigationCard";
import InfoCards from "./_components/InfoCards";
import { useState } from "react";

export default function GradesPage() {
    const gradeCategories: GradeCategory[] = [
        { category: "Réfléchir et dialoguer", class: "ECR343 - Éthique et culture religieuse", weight: 50, grades: [
            { name: "Projet antipub - contenu", category: "Étape 1", weight: 60, average: 83.9, value: 84.5 , total: 100 },
            { name: "Projet antipub - affiche", category: "Étape 1", weight: 40, average: 84.5, value: 90 , total: 100 },
            { name: "Projet antipub - contenu", category: "Étape 2", weight: 60, average: 83.9, value: 84.5 , total: 100 }
        ]},
        { category: "Comprendre et dialoguer", class: "ECR343 - Éthique et culture religieuse", weight: 50, grades: [
            { name: "Examen pub et philosophies", category: "Étape 1", weight: 65, average: 21.3, value: 25 , total: 26 },
            { name: "Pratique appropriée dialogue", category: "Étape 1", weight: 35, average: 76.8, value: 80 , total: 100 },
            { name: "Examen quest. existentielles", category: "Étape 2", weight: 35, average: 24.2, value: 25 , total: 27 },
            { name: "Justifier sa position - outils", category: "Étape 2", weight: 65, average: 82.7, value: 85 , total: 100 }            
        ]},
        { category: "Communiquer oralement en anglais", class: "EESL304 - Anglais, langue seconde programme enrichi", weight: 40, grades: [
            { name: "StarGirl round table", category: "Pertinence of the message", weight: 1, average: 16.9, value: 17 , total: 20 },
            { name: "StarGirl round table 2", category: "Pertinence of the message", weight: 1, average: 17, value: 18 , total: 20 },
            { name: "Striped Pajamas Evaluation", category: "Pertinence of the message", weight: 1, average: 17.1, value: 18.5 , total: 20 }
        ]}     
    ]

    const [selectedClass, setSelectedClass] = useState("All");
    const [term, setTerm] = useState("Term 1");
    const [search, setSearch] = useState("");

    return (
        <div className="flex flex-col w-screen h-screen pl-12 pr-12 pb-12">
            <div className="flex items-center my-4">
                <h1 className="font-bold text-lg">Grades</h1>
            </div>

            <div className="flex flex-grow items-center my-4 space-x-6">
                <div className="flex flex-col flex-grow h-full space-y-6">
                    <NavigationCard gradeCategories={gradeCategories} selectedClass={selectedClass} onSelectedClassChange={setSelectedClass} term={term} onTermChange={setTerm} search={search} onSearchChange={setSearch}/>
                    <GradesCard gradeCategories={gradeCategories} selectedClass={selectedClass} term={term} search={search}/>
                </div>
                
                <InfoCards gradeCategories={gradeCategories}/>
            </div>
        </div>
    );
}

type GradeCategory = {
    category: string,
    class: string,
    weight: number,
    grades: Grade[]
}

type Grade = {
    name: string,
    category: string,
    weight: number,
    average: number,
    value: number,
    total: number
}
