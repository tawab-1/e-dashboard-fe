import React, { ReactNode } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
type cardProps = {
  img: string;
  title: ReactNode | string;
  description: ReactNode | string;
}

export const CommonCard = ({img, title, description}: cardProps) => {
  return (
    <Card sx={{ maxWidth: 300 , height: '540px', margin: '10px 0px'}}>
      <CardActionArea>
        <CardMedia
          component='img'
          style={{height: 430}}
          image={img}
          alt={'card image'}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
