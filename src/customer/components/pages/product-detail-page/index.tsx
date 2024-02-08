import {Box, Card, Chip, Divider, Grid, ImageList, ImageListItem, Stack, Typography} from '@mui/material';
import {productsData} from '../../../../utils/constants';
import {useEffect, useState} from 'react';

export const ProductDetail = () => {
  const topImages = productsData.slice(0, 4);
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    if (topImages.length) {
      setSelectedImage(topImages[0]?.img);
    }
  }, []);

  return (
    <Grid className='my-10 md:my-20 px-4 sm:px-6 lg:px-8 grid sm:grid-cols-1 md:grid-cols-2 md:gap-6'>
      <Grid className='grid grid-flow-col gap-6'>
        <ImageList sx={{width: 160, height: 650, overflow: 'hidden'}} cols={1}>
          {topImages.map((item, index) => (
            <ImageListItem
              key={index}
              className='cursor-pointer'
              onClick={() => setSelectedImage(item?.img)}
            >
              <img
                className='rounded-md object-cover'
                srcSet={`${item.img}?fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?fit=crop&auto=format`}
                alt={item.title}
                loading='lazy'
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Grid className='w-full h-full overflow-hidden'>
          <img
            className='w-full h-full object-cover rounded-3xl'
            srcSet={`${selectedImage}?fit=crop&auto=format&dpr=2 2x`}
            src={`${selectedImage}?fit=crop&auto=format`}
            alt={'Breakfast'}
            loading='lazy'
          />
        </Grid>
      </Grid>
      <Grid className='pt-2'>
        <Card variant='outlined'>
          <Box sx={{p: 2}}>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
            >
              <Typography gutterBottom variant='h5' component='div'>
                Toothbrush
              </Typography>
              <Typography gutterBottom variant='h6' component='div'>
                $4.50
              </Typography>
            </Stack>
            <Typography color='text.secondary' variant='body2'>
              Pinstriped cornflower blue cotton blouse takes you on a walk to
              the park or just down the hall.
            </Typography>
          </Box>
          <Divider />
          <Box sx={{p: 2}}>
            <Typography gutterBottom variant='body2'>
              Select type
            </Typography>
            <Stack direction='row' spacing={1}>
              <Chip color='primary' label='Soft' size='small' />
              <Chip label='Medium' size='small' />
              <Chip label='Hard' size='small' />
            </Stack>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};
