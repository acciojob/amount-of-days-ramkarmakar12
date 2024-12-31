function daysOfAYear(year) {
  // A year is a leap year if it is divisible by 4, but not by 100 unless divisible by 400
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366; // Leap year
  }
  return 365; // Non-leap year
}
