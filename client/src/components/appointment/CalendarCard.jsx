import React from "react";
import { CalendarIcon } from "lucide-react";

const CalendarCard = ({ appointments = [] }) => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const appointmentDays = appointments.map((appt) => new Date(appt.date).getDate());
  return (
    <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 ">
      <div className="relative">
        <div className="w-full h-full sm:w-80 sm:h-72 bg-blue-50 rounded-lg shadow p-4 sm:p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-blue-900">
              {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
            </h3>
            <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          </div>

          <div className="grid grid-cols-7 gap-1 mb-4">
            {days.map((day,index) => (
              <div
                key={index}
                className="text-center text-xs font-medium text-blue-600 p-1"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 flex-1">
            {Array.from({ length: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()  }, (_, i) => {
              const day = i + 1;
              const isToday = day === currentDay;
              const isAppointed = appointmentDays.includes(day);

              return (
                <div
                  key={i}
                  className={`text-center text-xs sm:text-sm p-1 rounded transition-colors ${
                    isToday
                      ? "bg-blue-500 text-white"
                      : isAppointed
                      ? "bg-blue-200 text-blue-900"
                      : "text-blue-700 hover:bg-blue-100"
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CalendarCard;
