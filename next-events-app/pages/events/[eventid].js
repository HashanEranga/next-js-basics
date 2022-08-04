import {getEventById} from '../../dummy-data'
import {useRouter} from 'next/router'
import EventSummary from '../../components/event-details/event-summary'
import EventLogistics from '../../components/event-details/event-logistic'
import EventContent from '../../components/event-details/event-content'

function EventDetailPage() {
    const router = useRouter()
    const eventId = router.query.eventId
    const event = getEventById(eventId)
    if(!event){
        return <p>No Event details for the event</p>
    }
    return(
        <>
        <EventSummary title={event.title}/>
        <EventLogistics
            date = {event.date}
            address = {event.location}
            image = {event.image}
            imageAlt = {event.title}
        />
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
        </>
    )
}

export default EventDetailPage