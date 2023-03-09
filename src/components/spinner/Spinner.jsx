import { CircularProgress } from '@mui/material'
import React from 'react'

const Spinner = () => {
  return (
    <CircularProgress
        color="warning"
        determinate={false}
        size="md"
        value={20}
        variant="soft"
        />
  )
}

export default Spinner