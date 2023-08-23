export default function GradesCard({ gradeCategories, selectedClass, term, search }: { gradeCategories: any[], selectedClass: string, term: string, search: string }) {
    var gradeCategoriesHtml = gradeCategories.filter((gradeCategory) => (
        (gradeCategory.category.toLowerCase().includes(search.toLowerCase()) || gradeCategory.class.toLowerCase().includes(search.toLowerCase())) && 
        (gradeCategory.class == selectedClass || selectedClass == "All")
    )).map((gradeCategory) => (
        <div className="flex flex-col bg-black bg-opacity-10 rounded-md p-4 space-y-2">
            <div className="flex justify-between mb-2">
                <p className="text-lg">{gradeCategory.class}</p>
                <p className="text-lg opacity-50">{gradeCategory.category} ({gradeCategory.weight}%)</p>
            </div>

            <div className="bg-white rounded-md p-2 space-y-2">
                <div className="flex text-sm">
                    <p className="opacity-50 flex-grow">Title</p>
                    <p className="opacity-50 w-56">Category</p>
                    <p className="opacity-50 w-20">Weight</p>
                    <p className="opacity-50 w-32">Average</p>
                    <p className="font-semibold w-32">Result</p>
                </div>

                <hr/>

                {gradeCategory.grades.map((grade) => (
                    <div className="flex justify-between text-sm">
                        <p className="flex-grow">{grade.name}</p>
                        <p className="w-56">{grade.category}</p>
                        <p className="w-20">{grade.weight}</p>
                        <p className="w-32">{grade.average}/{grade.total} ({(grade.average/grade.total*100).toFixed()}%)</p>
                        <p className="w-32">{grade.value}/{grade.total} ({(grade.value/grade.total*100).toFixed()}%)</p>
                    </div>
                ))}
            </div>
        </div>
    ));

    return (
        <div className="flex flex-col bg-white p-4 rounded-md h-full space-y-6 shadow-sm">
            {gradeCategoriesHtml}
        </div>
    );
}
