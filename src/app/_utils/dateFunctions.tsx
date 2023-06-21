export function getNumDaysInMonth(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = [
      31, // January 
      (year % 4 == 0 && year % 100 != 0) ? 29 : 28, // February
      31, // March
      30, // April
      31, // May
      30, // June
      31, // July
      31, // August 
      30, // September
      31, // October
      30, // November
      31 // December
    ];

    return daysInMonth[month] || 0;
}

export function getFirstDayOfMonth(date) {
    const month = date.getMonth();
    const day = new Date(date.getFullYear(), month, 1).getDay();
    return day;
}

export function getDaysOfWeek(inputDate: Date): Date[] {
    var result = [];
  
    // Find the first day (Sunday) of the week
    const firstDayOfWeek = new Date(inputDate);
    firstDayOfWeek.setDate(inputDate.getDate() - inputDate.getDay());
  
    // Generate the days of the week
    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(firstDayOfWeek);
        currentDate.setDate(firstDayOfWeek.getDate() + i);
        result.push(currentDate);
    }
  
    return result;
}
    
