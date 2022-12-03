const countHours = (year, holidays) =>
  holidays.reduce((acc, holiday) => {
    const day = new Date(`${holiday}/${year}`).getDay();
    return day !== 0 && day !== 6 ? acc + 2 : acc;
  }, 0);

module.exports = countHours;
