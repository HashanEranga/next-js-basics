import EventList from '../../components/events/event-list'
import {getAllEvents} from '../../dummy-data'
import EventSearch from '../../components/events/event-search'
import {useRouter} from 'next/router'

function AllEventsPage() {
    const allEventsHandler = getAllEvents() 
    const router = useRouter()
    function findEventsHandler(year, month){
        const filteredRoute = `/events/${year}/${month}`
        router.push(filteredRoute)
    }
    return(
        <div>
            <div>
                <EventSearch onSearch={findEventsHandler}/>                
                <EventList items = {allEventsHandler}/>
            </div>
        </div>
    )
}

export default AllEventsPage 