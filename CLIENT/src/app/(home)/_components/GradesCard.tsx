export default function GradesCard() {
  const titles = [
    ["Average yearly grade", 90.8],
    ["Average term grade", 93.5],
    ["Median grade", 87.6],
    ["Standard deviation", 6.7],
  ];

  return (
    <div className="h-36">
      {/* I don't know how to add this without breaking the site so I'm just gonna remove it. 
            It doesn't look that bad anyway without it. */}
      <h2 className="mb-4">
        <b>Quick Summary of Your Grades</b>
      </h2>
      <div className="flex space-x-6 mt-1">
        {titles.map((e, i) => {
          return (
            <div className="bg-white rounded-md w-full p-8 space-y-2" key={i}>
              <p className="opacity-50">{e[0]}</p>
              <p className="font-black text-3xl">{e[1]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
