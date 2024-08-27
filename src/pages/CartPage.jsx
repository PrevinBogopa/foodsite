import { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
  const [date, setDate] = useState(new Date()); // Set to current date by default
  const [events, setEvents] = useState([]);
  const [showMonths, setShowMonths] = useState(false);
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const getEventsForDay = (day) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDay() === day;
    });
  };

  // Calculate the start and end dates of the current week
  const weekStart = new Date(date);
  weekStart.setDate(weekStart.getDate() - weekStart.getDay() + 1); // Adjusted for Monday start
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);

  useEffect(() => {
    // Convert dates to ISO strings for the API request
    const startOfWeek = weekStart.toISOString().split('T')[0];
    const endOfWeek = weekEnd.toISOString().split('T')[0];
  
    // Add event listener to close dropdown when clicking outside
    const handleOutsideClick = (event) => {
      const dropdown = document.querySelector('.months-dropdown');
      if (dropdown && !dropdown.contains(event.target)) {
        setShowMonths(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
  
    // Fetch events from API
    axios.get(`http://localhost:8000/api/events/?start_date=${startOfWeek}&end_date=${endOfWeek}`)
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the events!", error);
      });
  
    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [date, setShowMonths]); // Fetch events and update dropdown whenever `date` or `setShowMonths` changes
  const formatTime = (time) => {
    const [hour, minute] = time.split(":").map(Number); // Convert to numbers
    const formattedHour = hour % 12 || 12; // Adjust for 12-hour format
    const period = hour >= 12 ? 'PM' : 'AM';
    return `${formattedHour}:${minute.toString().padStart(2, '0')} ${period}`;
  };

  const isWholeDay = (startTime, endTime) => {
    return startTime === "00:00:00" && endTime === "23:59:59";
  };

  const nextWeek = () => {
    setDate(new Date(date.setDate(date.getDate() + 7)));
  };

  const prevWeek = () => {
    setDate(new Date(date.setDate(date.getDate() - 7)));
  };

  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleMonthChange = (monthIndex) => {
    const newDate = new Date(date);
    newDate.setMonth(monthIndex);
    setDate(newDate);
    setShowMonths(false); // Close the dropdown after selection
  };

  const today = new Date().getDate(); // Get today's date of the month
  const weekDayIndex = new Date().getDay(); // Get today's day of the week

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
      <div className="inline-block py-1 px-2 rounded-md bg-orange-50 border border-green-100 text-sm font-medium mb-4 text-green">Events</div>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading mb-18 max-w-lg ">Join our weekly events</h1>
          <div className="border border-gray-100 rounded-3xl pt-6 px-6 mb-12">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
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
   <div className="absolute bg-white border rounded-md mt-2 p-2 max-h-60 overflow-y-auto z-10">
        {months.map((monthName, index) => (
          <div
            key={index}
            className="py-1 px-4 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleMonthChange(index)}
          >
            {monthName}
          </div>
        ))}
      </div>
    )}
  </div>
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
        
        {/* Events Display */}
        <div className="overflow-x-auto relative h-screen/2 overflow-y-auto md:h-screen/3 lg:h-screen/4">
          <div className="absolute bottom-0 left-0 w-full h-24" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.60) 53.65%, #FFF 100%)' }}></div>
          <div className="flex">
          {daysOfWeek.map((day, index) => {
  const dayIndex = (index + 1) % 7; // 0 = Sunday, 1 = Monday, etc.
  const currentDayDate = new Date(weekStart); // Start with the week's start date
  currentDayDate.setDate(weekStart.getDate() + index); // Calculate the date for this day

  // Highlight only if the date matches the current date
  const isToday = currentDayDate.toDateString() === new Date().toDateString();

  const dayEvents = getEventsForDay(currentDayDate.getDay());

  return (
    <div key={index} className="flex flex-col flex-1 border-r border-gray-80">
      <div className={`border-t border-b border-gray-50 py-2 px-24 ${isToday ? 'bg-orange-100' : ''}`}>
        {/* Show day and date */}
        <p className="text-center text-gray-500 text-sm font-semibold">
          {day} {currentDayDate.getDate()}
        </p>
      </div>
      <div className="flex-1 border-r border-gray-50 min-h-[200px] md:min-h-[250px] lg:min-h-[300px]">
        {dayEvents.length > 0 ? (
          dayEvents.map((event, idx) => (
            <a key={idx} className="bg-orange-50 py-3 px-4 flex flex-wrap gap-3 hover:bg-orange-100 transition duration-200" href="#">
              <div className="bg-orange-500 w-5 h-5 flex items-center justify-center rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M8.35879 8.2051L8.35996 8.20616C8.77017 8.57643 8.9041 9.14137 8.70399 9.65877C8.50383 10.1713 8.02404 10.5 7.46999 10.5H4.52499C3.97517 10.5 3.49091 10.1706 3.29102 9.65885C3.09086 9.14143 3.22479 8.57645 3.63502 8.20616L3.63502 8.20616L3.63619 8.20509L5.51319 6.5H6.48179L8.35879 8.2051ZM5.08999 9.57H6.90999C7.37113 9.57 7.74999 9.19114 7.74999 8.73C7.74999 8.27365 7.3809 7.89 6.90999 7.89H5.08999C4.62885 7.89 4.24999 8.26886 4.24999 8.73C4.24999 9.18634 4.61907 9.57 5.08999 9.57Z" fill="white" stroke="white"></path>
                          <path d="M9.17496 2.16C8.89996 1.455 8.22996 1 7.47496 1H4.52496C3.76996 1 3.09996 1.455 2.82496 2.16C2.55496 2.87 2.73996 3.655 3.30496 4.165L5.32496 6H6.67996L8.69996 4.165C9.25996 3.655 9.44496 2.87 9.17496 2.16ZM6.90996 3.615H5.08996C4.89996 3.615 4.74996 3.46 4.74996 3.275C4.74996 3.09 4.90496 2.935 5.08996 2.935H6.90996C7.09996 2.935 7.24996 3.09 7.24996 3.275C7.24996 3.46 7.09496 3.615 6.90996 3.615Z" fill="white"></path>
                        </svg>
              </div>
              <div>
                <p className="text-orange-900 text-xs font-bold font-heading mb-1">{event.title}</p>
                <p className="text-gray-600 text-xs mb-3">
                  {formatTime(event.time)} − {isWholeDay(event.time, event.end_time) ? 'Whole day' : formatTime(event.end_time)}
                </p>
                <div className="inline-block py-1 px-2 rounded-md bg-orange-50 border border-orange-100 text-green text-xs font-medium mb-4">
                  {event.category}
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className="py-3 px-4 text-center text-gray-500">No event</div>
        )}
      </div>
      
    </div>
  );
})}

          </div>
        </div>
        </div>
        </div>
     
    </section>
  );
};

export default Events;
