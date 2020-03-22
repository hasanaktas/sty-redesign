import moment from 'moment';

export default {};

export const generateMonth = (year, month) => {
  const momentDays = [
    ...Array(moment(`${year} ${month}`, 'YYYY-MM').daysInMonth()).keys()
  ];

  const days = momentDays.map((day, index) => {
    const newDate = moment(`${year} ${month}`, 'YYYY-MM').date(day + 1);

    return {
      day: newDate.format('DD-MM-YYYY'),
      sunday: newDate.format('dddd') === 'Pazar',
      off: newDate.format('dddd') === 'Pazar',
      weekend:
        newDate.format('dddd') === 'Pazar' ||
        newDate.format('dddd') === 'Cumartesi',
      index: index,
      order: newDate.format('DD'),
      short: newDate.format('dd')
    };
  });
  const firstSunday = days.findIndex(item => {
    return item.sunday;
  });
  const weeks = () => {
    const weeksObject = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [] };
    const firstWeek = [];

    for (let i = 0; i < firstSunday; i++) {
      firstWeek.push(i);
    }
    for (const day of days) {
      if (firstWeek.includes(day.index)) {
        weeksObject[0].push(day.index);
      }
      if (
        [
          firstWeek.length + 1,
          firstWeek.length + 2,
          firstWeek.length + 3,
          firstWeek.length + 4,
          firstWeek.length + 5,
          firstWeek.length + 6
        ].includes(day.index)
      ) {
        weeksObject[1].push(day.index);
      }
      if (
        [
          firstWeek.length + 8,
          firstWeek.length + 9,
          firstWeek.length + 10,
          firstWeek.length + 11,
          firstWeek.length + 12,
          firstWeek.length + 13
        ].includes(day.index)
      ) {
        weeksObject[2].push(day.index);
      }
      if (
        [
          firstWeek.length + 20,
          firstWeek.length + 15,
          firstWeek.length + 16,
          firstWeek.length + 17,
          firstWeek.length + 18,
          firstWeek.length + 19
        ].includes(day.index)
      ) {
        weeksObject[3].push(day.index);
      }
      if (
        [
          firstWeek.length + 27,
          firstWeek.length + 22,
          firstWeek.length + 23,
          firstWeek.length + 24,
          firstWeek.length + 25,
          firstWeek.length + 26
        ].includes(day.index)
      ) {
        weeksObject[4].push(day.index);
      }
      if (
        [
          firstWeek.length + 34,
          firstWeek.length + 29,
          firstWeek.length + 30,
          firstWeek.length + 31,
          firstWeek.length + 32,
          firstWeek.length + 33
        ].includes(day.index)
      ) {
        weeksObject[5].push(day.index);
      }
    }

    return weeksObject;
  };

  return {
    days,
    year,
    monthName: moment(`${month}`, 'MM').format('MMMM'),
    firstSunday: firstSunday,
    weeks: weeks()
  };
};
