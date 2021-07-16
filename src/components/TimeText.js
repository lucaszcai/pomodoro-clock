import "./Clock.css";

const TimeText = (props) => {
  let hh = props.hour;
  let ampm;
  let mm = props.min;
  let day = props.day;
  let month = props.month;
  let year = props.year;

  if (hh >= 12) {
    hh -= 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  if (hh === 0) {
    hh = 12;
  }
  if (hh < 10) {
    hh = `0${hh}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div>
      <div class="clock__text">
        <div class="clock__text-hour" id="text-hour">
          {hh}:
        </div>
        <div class="clock__text-minutes" id="text-minutes">
          {mm}
        </div>
        <div class="clock__text-ampm" id="text-ampm">
          {ampm}
        </div>
      </div>
      <div class="clock__date">
        <span id="date-day">{day} </span>
        <span id="date-month">{months[month]} </span>
        <span id="date-year">{year}</span>
      </div>
    </div>
  );
};

export default TimeText;
