import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import uk from 'date-fns/locale/uk';
registerLocale('uk', uk)

function TrainingDatePicker({ startDate, setStartDate }) {

  return (
    <DatePicker
      fixedHeight
      locale="uk"
      dateFormat="dd / MMMM / yyyy"
      todayButton="Сьогодні"
      selected={startDate} 
      onChange={(date) => setStartDate(date)}
      className="outline-0 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    />
  );
}

export default TrainingDatePicker