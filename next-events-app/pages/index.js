import EventList from '../components/events/event-list'
import { getFeaturedEvents } from '../dummy-data'
export default function Home() {
  const featuredEventsHandler = getFeaturedEvents()
  return (
    <div>
      <h1>HomePage</h1>
      <EventList items = {featuredEventsHandler}/>
    </div>
  )
}
