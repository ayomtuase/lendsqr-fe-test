const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatAMPM(date: Date) {
  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

export const formatDate = (dateString: string | undefined) => {
  if (dateString === undefined) {
    return "-";
  }
  const d = new Date(dateString);
  const monthName = months[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();

  const timeString = formatAMPM(d);

  //   May 15, 2020 10:00 AM

  return `${monthName} ${date}, ${year} ${timeString}`;
};
