import React from 'react'
import { useRouter } from 'next/router'

function SelectedClientProject() {
    const router = useRouter()
    console.log(router.pathname)
    console.log(router.query)
  return (
    <div>SelectedClientProject</div>
  )
}

export default SelectedClientProject