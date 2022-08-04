import EventList from '../components/events/event-list'
import { getFeaturedEvents } from '../dummy-data'
export default function Home() {
  const featuredEventsHandler = getFeaturedEvents()
  return (
    <div>
      <EventList items = {featuredEventsHandler}/>
    </div>
  )
}
