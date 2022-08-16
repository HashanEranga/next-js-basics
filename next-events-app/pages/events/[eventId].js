import {getEventById, getFeaturedEvents} from '../../helper/api-util'
import EventSummary from '../../components/event-details/event-summary'
import EventLogistics from '../../components/event-details/event-logistic'
import EventContent from '../../components/event-details/event-content'

function EventDetailPage(props) {
    const {event} = props
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


export async function getStaticProps(context) {
    const eventIdValue = context.params.eventId

    const eventDetails = await getEventById(eventIdValue)
    
    return {
        props : {
            event : eventDetails
        },
        revalidate : 1800
    }
}

export async function getStaticPaths() {
    const allEvents = await getFeaturedEvents()
    const eventPaths = allEvents.map((event)=>({params: {eventId : event.id}}))
    return {
        paths : eventPaths,
        fallback : true
    }
}
export default EventDetailPage