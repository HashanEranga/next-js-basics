import {useRouter} from 'next/router'

export default function HomePage(){
  const router = useRouter()
  console.log(router.pathname)
  console.log(router.query)

  return (
    <div>
      <h1>The HomePage</h1>
    </div>
  )
}