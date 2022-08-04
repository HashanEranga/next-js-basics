import EventList from '../../components/events/event-list'
import {getAllEvents} from '../../dummy-data'

function AllEventsPage() {
    const allEventsHandler = getAllEvents() 
    return(
        <div>
            <h1>Event List Page</h1>
            <div>
                <EventList items = {allEventsHandler}/>
            </div>
        </div>
    )
}

export default AllEventsPage