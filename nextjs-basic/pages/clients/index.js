import React from 'react'
import {useRouter} from 'next/router'

function ClientsPage() {
    const router = useRouter()
    console.log(router.pathname)
    console.log(router.query)
  return (
    <div>ClientsPage</div>
  )
}

export default ClientsPage