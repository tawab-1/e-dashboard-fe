import React, { ReactNode } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
type cardProps = {
  img?: ReactNode | string;
  cardContent?: ReactNode | string;
  style?: React.CSSProperties;
  imgHeight?: string;
  hoverShadow?: string;
}

export const CommonCard = ({img, cardContent, style, imgHeight, hoverShadow}: cardProps) => {
  return (
    <Card style={style} sx={{':hover': {boxShadow: hoverShadow ?? ''}}}>
      <CardActionArea>
        {img && typeof img === 'string' ? 
          <CardMedia
          component='img'
          style={{height: imgHeight ?? '', objectFit: 'cover'}}
          image={img}
          alt={'card image'}
          /> :
          img ?? ''
        }
        <CardContent>{cardContent ?? ''}</CardContent>
      </CardActionArea>
    </Card>
  );
}
