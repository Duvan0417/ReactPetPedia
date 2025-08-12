import { useState } from 'react';

const Calendar = ({ appointments, selectedDate, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  
  const daysOfWeek = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };
  
  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + (direction === 'prev' ? -1 : 1));
    setCurrentMonth(newMonth);
  };
  
  const renderDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    // Adjust first day to make Monday the first day of the week
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
    
    // Days from previous month
    const prevMonthDays = [];
    const prevMonthDaysCount = adjustedFirstDay;
    const prevMonth = new Date(year, month - 1, 1);
    const daysInPrevMonth = getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());
    
    for (let i = 0; i < prevMonthDaysCount; i++) {
      prevMonthDays.push(
        <div key={`prev-${i}`} className="day disabled">
          {daysInPrevMonth - prevMonthDaysCount + i + 1}
        </div>
      );
    }
    
    // Current month days
    const currentMonthDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const hasAppointments = appointments.some(appt => appt.date === dateStr);
      const isToday = new Date().toISOString().split('T')[0] === dateStr;
      const isSelected = selectedDate === dateStr;
      
      currentMonthDays.push(
        <div 
          key={`current-${i}`}
          className={`day ${hasAppointments ? 'has-appointments' : ''} ${isToday ? 'today' : ''} ${isSelected ? 'active' : ''}`}
          onClick={() => onDateSelect(dateStr)}
        >
          {i}
        </div>
      );
    }
    
    // Days from next month
    const nextMonthDays = [];
    const totalCells = prevMonthDays.length + currentMonthDays.length;
    const remainingCells = totalCells > 35 ? 42 - totalCells : 35 - totalCells;
    
    for (let i = 1; i <= remainingCells; i++) {
      nextMonthDays.push(
        <div key={`next-${i}`} className="day disabled">
          {i}
        </div>
      );
    }
    
    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };
  
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="calendar-title">
          <i className="fas fa-calendar-alt mr-2"></i> 
          Calendario de Citas - {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </div>
        <div className="calendar-nav">
          <button onClick={() => navigateMonth('prev')}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={() => navigateMonth('next')}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="calendar-days">
        {daysOfWeek.map(day => (
          <div key={day} className="day-name">{day}</div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;