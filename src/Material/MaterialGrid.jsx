import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import ImgMediaCard from './Materialcard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
 
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid size={{ sm: 12, md: 6, lg:4 }}>
          <Item><ImgMediaCard /></Item>
        </Grid>

        <Grid size={{ sm: 12, md: 6, lg:4 }}>
          <Item><ImgMediaCard /></Item>
        </Grid>

        <Grid size={{ sm: 12, md: 6, lg:4 }}>
          <Item><ImgMediaCard /></Item>
        </Grid>

        <Grid size={{ sm: 12, md: 6, lg:4 }}>
          <Item><ImgMediaCard /></Item>
        </Grid>

      </Grid>
    </Box>
  );
}
