import { Box, Typography } from '@mui/material'
import React from 'react'

const MainContainer = () => {
  return (
    <Box sx={{backgroundColor: 'pink', height: '100vh'}}>
        <Typography sx={{textAlign: 'center', fontSize: '2rem', paddingTop: '2rem'}}>
            Here we go!
        </Typography>
    </Box>
  )
}

export default MainContainer