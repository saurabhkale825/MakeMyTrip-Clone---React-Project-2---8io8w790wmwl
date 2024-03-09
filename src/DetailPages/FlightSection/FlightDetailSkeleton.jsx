import React from 'react'
import { Skeleton } from '@mui/material'

function FlightDetailSkeleton() {
  return (
    <div>
        <Skeleton variant="rectangular" width={210} height={118} />
    </div>
  )
}

export default FlightDetailSkeleton