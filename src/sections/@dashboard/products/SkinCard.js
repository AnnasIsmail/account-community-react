import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Card, Link, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import DetailSkin from '../app/DetailSkin';
// utils

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

SkinsCard.propTypes = {
  product: PropTypes.object,
};

export default function SkinsCard({ product }) {
  const { uuid , displayName , displayIcon , chromas } = product;

  const [openDetail, setOpenDetail] = React.useState(false);
  const [detailSkin,setDetailSkin] = React.useState([]);
  const handleCloseDetailSkin = () => setOpenDetail(false);

  const openDetailSkin =(uuid , name)=> {
    if(name === 'skin'){
      axios.get(`https://valorant-api.com/v1/weapons/skins/${uuid}`).then((response) =>{
        setDetailSkin(response.data.data);
        setOpenDetail(true);
      });
    }
  }

  return (
    <Card sx={{ pt:3 }}>
      <Box sx={{ pt: '25%', position: 'relative' }} >
        <ProductImgStyle alt={displayName} src={(displayIcon !== null)?displayIcon:chromas[0].displayIcon} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }} >
        <Link to="#" color="inherit" onClick={()=>openDetailSkin(uuid , 'skin')} underline="hover" component={RouterLink}>
        <Typography variant="subtitle1" noWrap sx={{ mb: -2.5 }}>
            {displayName}
          </Typography>
        </Link>

      </Stack>

      <DetailSkin open={openDetail} handleClose={handleCloseDetailSkin} detailSkin={detailSkin} />
    </Card>
  );
}
