import classes from './event-item.module.css'
import Button from '../UI/button'

export default function EventItem(props){
    const {id, title, date, image, location} = props
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day : 'numeric',
        month : 'long',
        year: 'numeric'
    })

    const formattedAddress = location.replace(', ', '\n')
    const exploreLink = `/events/${id}`
    return (
        <li key={id} className={classes.item}>
            <img src={'/'+image} alt={title}/>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <p>{humanReadableDate}</p>
                </div>
                <div className={classes.address}>
                    <address>{formattedAddress}</address>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>Explore Event</Button> 
                </div>
            </div>
        </li>
    )
}