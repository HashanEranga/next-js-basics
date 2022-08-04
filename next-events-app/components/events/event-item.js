import classes from "./event-item.module.css";
import Button from "../UI/button";
import CalendarIcon from "../UI/Icons/calendar-icon";
import LocationIcon from "../UI/Icons/location-icon";
import ArrowIcon from "../UI/Icons/arrow-icon";

export default function EventItem(props) {
  const { id, title, date, image, location } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li key={id} className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.summary}>
        <h2>{title}</h2>
        <div className={classes.date}>
          <CalendarIcon />
          <p>{humanReadableDate}</p>
        </div>
        <div className={classes.address}>
          <LocationIcon />
          <address>{formattedAddress}</address>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
