import { useState } from 'react';

const Events = () => {
  const [date, setDate] = useState(new Date('2024-08-27')); // Hard-coded current date for now
  const [showMonths, setShowMonths] = useState(false);

  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const weekStart = new Date(date);
  weekStart.setDate(weekStart.getDate() - weekStart.getDay());

  const nextWeek = () => {
    setDate(new Date(date.setDate(date.getDate() + 7)));
  };

  const prevWeek = () => {
    setDate(new Date(date.setDate(date.getDate() - 7)));
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="inline-block py-1 px-2 rounded-md bg-orange-50 border border-green-100 text-sm font-medium mb-4 text-green">Events</div>
        <h1 className="text-4xl lg:text-5xl font-bold font-heading mb-18 max-w-lg">Join our weekly events</h1>
        <div className="border border-gray-100 rounded-3xl pt-6 px-6 mb-12">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="font-bold font-heading">{month}</p>
              <p className="text-gray-500 font-medium">{year}</p>
              <a
                className="text-gray-400 hover:text-gray-600 transition duration-200"
                href="#"
                onClick={() => setShowMonths(!showMonths)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13 5.5L8 10.5L3 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              {showMonths && (
                <div className="absolute bg-white border rounded-md mt-2 p-2">
                  {/* Month Selection Dropdown */}
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={prevWeek} className="py-2 px-4 rounded-full border border-gray-200 shadow text-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200">
                Previous Week
              </button>
              <button onClick={nextWeek} className="py-2 px-4 rounded-full border border-gray-200 shadow text-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200">
                Next Week
              </button>
            </div>
          </div>
          <div className="overflow-x-auto relative">
            <div className="absolute bottom-0 left-0 w-full h-24" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.60) 53.65%, #FFF 100%)' }}></div>
            <div className="flex">
              {/* Display Days and Events */}
              {/* Your day and event display logic goes here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
