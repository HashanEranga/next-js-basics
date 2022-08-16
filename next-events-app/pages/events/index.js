import EventList from '../../components/events/event-list'
import {getAllEvents} from '../../helper/api-util'
import EventSearch from '../../components/events/event-search'
import {useRouter} from 'next/router'

function AllEventsPage(props) {
    // const allEventsHandler = getAllEvents()
    const router = useRouter()
    function findEventsHandler(year, month){
        const filteredRoute = `/events/${year}/${month}`
        router.push(filteredRoute)
    }
    return(
        <div>
            <div>
                <EventSearch onSearch={findEventsHandler}/>                
                <EventList items = {props.eventItems}/>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const allEvents = await getAllEvents()
    return {
        props : {
            eventItems : allEvents
        },
        revalidate : 10
    }

}

export default AllEventsPage 