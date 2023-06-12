export default function GeneralCard() {
  return (
    <div className="bg-white rounded-md w-full p-8 flex flex-col justify-between flex-grow">
      <div>
        <h1 className="text-4xl opacity-50 mb-1">
          Welcome back, <b>Your Name</b>!
        </h1>
        <p className="text-lg opacity-50">
          Today is <b>Wednesday</b>, the <b>7th of June</b>.
        </p>
      </div>
      <div>
        <p className="opacity-50 mb-1">Quote of the day</p>
        <div className="bg-[#FAF4EF] rounded-md h-28 flex items-center justify-center">
          <p className="text-lg text-center m-4">Teamwork makes dreams work!</p>
        </div>
      </div>
    </div>
  );
}
