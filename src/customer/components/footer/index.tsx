import { Grid, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React from 'react'

export const Footer = observer(() => {
  return (
    <Grid
    container
    sx={{bgcolor: 'black', color: 'white', textAlign: 'center', mt: 5, p: 2}}
    >
        <Grid container xs={12} sm={6} md={3} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Typography sx={{pb:2, cursor: 'pointer'}} variant='h4'>Company</Typography>
            <Typography sx={{pb:2, cursor: 'pointer'}} variant='h6'>About</Typography>
            <Typography sx={{pb:2, cursor: 'pointer'}} variant='h6'>Company</Typography>            
        </Grid>
        <Grid container xs={12} sm={6} md={3} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Typography sx={{pb:2, cursor: 'pointer'}} variant='h4'>Company</Typography>
            <Typography sx={{pb:2, cursor: 'pointer'}} variant='h6'>About</Typography>
            <Typography sx={{pb:2, cursor: 'pointer'}} variant='h6'>Company</Typography>            
        </Grid>
        <Grid container xs={12} sm={6} md={3} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Typography sx={{pb:2, cursor: 'pointer'}} variant='h4'>Company</Typography>
            <Typography sx={{pb:2, cursor: 'pointer'}} variant='h6'>About</Typography>
            <Typography sx={{pb:2, cursor: 'pointer'}} variant='h6'>Company</Typography>            
        </Grid>
        <Grid container xs={12} sm={6} md={3} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Typography sx={{pb:2, cursor: 'pointer'}} variant='h4'>Company</Typography>
            <Typography sx={{pb:2, cursor: 'pointer'}} variant='h6'>About</Typography>
            <Typography sx={{pb:2, cursor: 'pointer'}} variant='h6'>Company</Typography>            
        </Grid>
    </Grid>
  )
})
