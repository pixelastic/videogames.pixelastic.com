module.exports = {
  displayedDate(inputDateString) {
    const inputDate = new Date(inputDateString);
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return `${monthNames[inputDate.getMonth()]} ${inputDate.getFullYear()}`;
  },
};
