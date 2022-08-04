export default function EventItem(props){
    const {event} = props
    return (
        <li>
            {event.title}
        </li>
    )
}