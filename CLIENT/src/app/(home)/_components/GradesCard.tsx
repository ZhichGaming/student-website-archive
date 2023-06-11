export default function GradesCard() {
  const titles = [
    ["Average yearly grade", 90.8],
    ["Average term grade", 93.5],
    ["Median grade", 87.6],
    ["Standard deviation", 6.7],
  ];

  return (
    <div className="flex-grow flex flex-col">
      {/* I don't know how to add this without breaking the site so I'm just gonna remove it. 
            It doesn't look that bad anyway without it. */}
      <h2 className="mb-4">
        <b>Quick Summary of Your Grades</b>
      </h2>
      <div className="flex flex-grow space-x-6 mt-1">
        {titles.map((x, i) => {
          return (
            <div className="bg-white rounded-md w-full p-8 space-y-2 h-full" key={i}>
              <p className="opacity-50">{x[0]}</p>
              <p className="font-black text-3xl">{x[1]}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
