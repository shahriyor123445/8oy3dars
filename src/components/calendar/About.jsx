export default function About() {
  return (
    <>
      <div>
        <h2 className="text-4xl font-medium mt-12">17 October 2023</h2>
        <div className="bg-gray-300 flex items-center justify-around h-10 w-[250px] font-semibold mt-4 rounded-xl">
          <button className="hover:bg-gray-400 bg-white w-16 rounded-lg">Day</button>
          <button className="hover:bg-gray-400 bg-white w-16 rounded-lg">Week</button>
          <button className="hover:bg-gray-400 bg-white w-16 rounded-lg">Month</button>
        </div>
        <div className="w-[1080px] h-[500px] border-2 mt-6 rounded-3xl flex">
          <ul>
            <li className="border-t-2 w-60 mt-12 ml-8">
              <p className="ml-48 pt-2">9:00 <br /> AM</p>
            </li>
            <li className="border-t-2 w-60 mt-8 ml-8">
              <p className="ml-48 pt-2">10:00 <br /> AM</p>
            </li>
            <li className="border-t-2 w-60 mt-8 ml-8">
              <p className="ml-48 pt-2">11:00 <br /> AM</p>
            </li>
            <li className="border-t-2 w-60 mt-8 ml-8">
              <p className="ml-48 pt-2">12:00 <br /> AM</p>
            </li>
            <li className="border-t-2 w-60 mt-8 ml-8">
              <p className="ml-48 pt-2">13:00 <br /> AM</p>
            </li>
          </ul>
          <div>
            <h2 className="text-xl font-bold mt-2 ml-12">Tuesday</h2>
          </div>
        </div>
      </div>
    </>
  );
}
