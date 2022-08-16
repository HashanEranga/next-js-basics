import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/result-title";
import Button from "../../components/UI/button";
import ErrorAlert from "../../components/UI/error-alert";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  const date = new Date(filteredYear, filteredMonth - 1);

  if (
    isNaN(filteredMonth) ||
    isNaN(filteredYear) ||
    filteredYear > 2030 ||
    filteredYear < 2018 ||
    filteredMonth > 12 ||
    filteredMonth < 1
  ) {
    return(
    <>
      <ErrorAlert>
        <p>Invalid Filter!</p>;
      </ErrorAlert>
      <div className="center">
        <Button link="/events">Show All Events</Button>
      </div>
    </>
        )

  }

  if (!filterData) return <p className="center">Loading ...</p>;

  const filteredEvent = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvent || filteredEvent.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events were found for the given filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvent} />
    </>
  );
}

export default FilteredEventsPage;
