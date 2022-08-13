export default function UserPage(props){
    // console.log(props)
    return <h1>{props.userId}</h1>
}

export async function getServerSideProps(context){
    const {params} = context
    const id = params.uid
    console.log(id)
    return {
        props : {
            userId : 'userid-'+id
        }
    }

}