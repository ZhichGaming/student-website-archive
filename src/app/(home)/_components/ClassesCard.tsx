export default function ClassesCard() {
  const classes = ["Chimie", "Physique", "Art dramatique", "Mathématiques", "Français"];
  return (
    <div className="bg-white rounded-md w-full h-full p-8 flex flex-col space-y-4">
      <p className="text-lg opacity-50">
        <b>Today&apos;s Classes</b>
      </p>
      <div className="flex-grow flex flex-col justify-between space-y-2">
        {classes.map((x, i) => {
          return (
            <div className="bg-neutral-300 rounded text-center py-2" key={i}>
              {x}
            </div>
          );
        })}

        {/* <div className="flex-grow bg-[#9AB3D9] rounded"></div> */}
      </div>
    </div>
  );
}