import {Card, Grid, Typography} from '@mui/material';

export const BrowseByDressStyle = () => {
  return (
    <Card
    sx={{backgroundColor: '#f0f0f0', boxShadow: 'none', borderRadius: '20px'}}
    className={'flex flex-col mt-16 py-6 px-2 md:py-16 md:px-10'}
  >
    <Typography
      variant='h4'
      className='text-center'
      fontWeight={900}
      fontFamily={'Inter'}
      component={'div'}
    >
      BROWS BY DRESS STYLE
    </Typography>
    <Grid container className='mt-8 md:mt-16'>
      <Grid  xs={12} sm={6} md={4} sx={{height: '290px', overflow: 'hidden', padding: '8px', position: 'relative'}}>
      <img
      src='https://images.unsplash.com/photo-1571153041701-728931a0ff63?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      style={{height: '100%', width: '100%', objectFit: 'cover', borderRadius: '20px',}}
      />
       <Typography
      variant='h5'
      fontWeight={500}
      fontFamily={'Inter'}
      component={'div'}
      className='absolute z-10 text-white top-6 left-6  bg-black rounded-xl px-2'
    >
      Casual
    </Typography>
      </Grid>
      <Grid xs={12} sm={6} md={8} sx={{height: '290px', overflow: 'hidden', padding: '8px', position: 'relative'}}>
         <img
      src='https://images.unsplash.com/photo-1603252109360-909baaf261c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      style={{height: '100%', width: '100%', objectFit: 'cover', borderRadius: '20px',}}
      />
      <Typography
      variant='h5'
      fontWeight={500}
      fontFamily={'Inter'}
      component={'div'}
      className='absolute z-10 text-white top-6 left-6 bg-black rounded-xl px-2'
    >
      Formal
    </Typography>
      </Grid>
      <Grid xs={12} sm={6} md={8} sx={{height: '290px', overflow: 'hidden', padding: '8px', position: 'relative'}}>
         <img
      src='https://images.unsplash.com/photo-1696579866263-886c77a611cb?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      style={{height: '100%', width: '100%', objectFit: 'cover', borderRadius: '20px',}}
      />
      <Typography
      variant='h5'
      fontWeight={500}
      fontFamily={'Inter'}
      component={'div'}
      className='absolute z-10 text-white top-6 left-6  bg-black rounded-xl px-2'
    >
      Party
    </Typography>
      </Grid>
      <Grid xs={12} sm={6} md={4} sx={{height: '290px', overflow: 'hidden', padding: '8px', position: 'relative'}}>
         <img
      src='https://images.unsplash.com/photo-1604480133080-602261a680df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      style={{height: '100%', width: '100%', objectFit: 'cover', borderRadius: '20px',}}
      />
      <Typography
      variant='h5'
      fontWeight={500}
      fontFamily={'Inter'}
      component={'div'}
      className='absolute z-10 text-white top-6 left-6  bg-black rounded-xl px-2'
    >
      Gym
    </Typography>
      </Grid>
    </Grid>
  </Card>
  )
}
