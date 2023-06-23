export default function InfoCards({ gradeCategories }: { gradeCategories: any[] }) {
    return (
        <div className="flex flex-col w-80 h-full space-y-4">
            <YearlyAverageCard gradeCategories={gradeCategories}/>
            <TermAverageCard gradeCategories={gradeCategories}/>
            <ClassesAverageCard gradeCategories={gradeCategories}/>
        </div>
    );
}

function YearlyAverageCard({ gradeCategories }: { gradeCategories: any[] }) {
    return (
        <div className="flex flex-col bg-white p-4 rounded-md space-y-4">
            <div className="space-y-1">
                <h2 className="text-sm opacity-50">Yearly Average</h2>
                <p className="text-xl font-bold">57.8%</p>
            </div>
        </div>
    );
}

function TermAverageCard({ gradeCategories }: { gradeCategories: any[] }) {
    return (
        <div className="flex flex-col bg-white p-4 rounded-md space-y-4">
            <div className="space-y-4">
                <div className="space-y-1">
                    <h2 className="text-sm opacity-50">Term Average</h2>
                    <p className="text-xl font-bold">57.8%</p>
                </div>
                <div className="space-y-1">
                    <h2 className="text-sm opacity-50">Term Median</h2>
                    <p className="text-xl font-bold">57.8%</p>
                </div>
                <div className="space-y-1">
                    <h2 className="text-sm opacity-50">Standard Deviation</h2>
                    <p className="text-xl font-bold">57.8%</p>
                </div>
            </div>
        </div>
    );
}

function ClassesAverageCard({ gradeCategories }: { gradeCategories: any[] }) {
    const averages = gradeCategories.map((gradeCategory) => (
        {
            name: gradeCategory.class,
            classAverage: calculateWeightedAverage(gradeCategory.class, gradeCategories, "class"),
            average: calculateWeightedAverage(gradeCategory.class, gradeCategories, "user")
        }
    ))

    return (
        <div className="flex flex-col bg-white p-4 rounded-md space-y-1">
            <h2 className="text-sm opacity-50">Averages</h2>
            <table className="text-left">
                <tr>
                    <th className="w-1/2">Category</th>
                    <th className="w-1/4">Class</th>
                    <th className="w-1/4">Average</th>
                </tr>
                {averages.map((average) => (
                    <tr className="overflow-hidden">
                        {/* 💀 i couldn't find out how to limit this string's width with css so i did it manually lmao */}
                        <td className="text-sm w-1/2">{average.name.substring(0, 15) != average.name ? average.name.substring(0, 15) + "..." : average.name}</td>
                        <td className="text-sm w-1/4">{average.classAverage}%</td>
                        <td className="text-sm w-1/4">{average.average}%</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

// phew first time writing a logic heavy function in a while
function calculateWeightedAverage(classString, gradeCategories, classOrUser) {
    let categories = gradeCategories.filter((gradeCategory) => gradeCategory.class == classString);

    if (categories.length == 0) {
        console.log("No categories found for " + classString);
        return;
    }

    let categoryResults = [];

    // Loop over each category belonging to the class.
    for (let i = 0; i < categories.length; i++) {
        const subcategories = Array.from(new Set(categories[i].grades.map((grade) => grade.category)));

        let subcategoryResults = [];

        // Loop over each subcategory belonging to the category.
        for (let j = 0; j < subcategories.length; j++) {
            // Get all grades belonging to the subcategory.
            const grades = categories[i].grades.filter((grade) => grade.category == subcategories[j]);

            let subcategoryTotalWeight = grades.reduce((accumulator, currentValue) => accumulator + currentValue.weight, 0);

            let weightedSubcategoryAverage = grades.map (
                // Get the percentage of the grade and then multiply by the weight.
                (grade) => (classOrUser == "user" ? grade.value : grade.average) / grade.total * grade.weight
                // Divide by the total weight to get the weighted average.
            ).reduce((a, b) => a + b, 0) / subcategoryTotalWeight;

            subcategoryResults.push(weightedSubcategoryAverage);
        }

        let categoryAverage = subcategoryResults.reduce((a, b) => a + b, 0) / subcategoryResults.length;

        categoryResults.push(categoryAverage);
    }

    var weightedClassAverage = 0;

    for (let i = 0; i < categories.length; i++) {
        weightedClassAverage += categoryResults[i] * categories[i].weight;
    }

    weightedClassAverage = weightedClassAverage / categories.reduce((accumulator, currentValue) => accumulator + currentValue.weight, 0);
    weightedClassAverage = weightedClassAverage * 100;
    weightedClassAverage = weightedClassAverage.toFixed(1);

    return weightedClassAverage;
}
  