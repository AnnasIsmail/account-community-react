import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import { useForm } from 'react-hook-form';
// @mui
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
// components
import { FormProvider, RHFTextField } from '../../../components/hook-form';
import DetailAccount from './DetailAccount';

// ----------------------------------------------------------------------

export default function TrackForm() {
  const navigate = useNavigate();
  
  const [puuid , setpuuid] = React.useState();
  const [error , setError] = React.useState(false);
  const [textError , setTextError] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const RegisterSchema = Yup.object().shape({
    riotId: Yup.string().required('First name required'),
    tagLine: Yup.string().required('Last name required'),
});

  const defaultValues = {
    riotId: '',
    tagLine: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;


  const onSubmit = async (e) => {
    setLoading(true);
    const riotId = e.riotId;
    const tagline = e.tagLine;


      axios.get(`https://api.henrikdev.xyz/valorant/v1/account/${riotId}/${tagline}`).then((response) =>{
        setpuuid(response.data.data.puuid);
        setLoading(false);
        setError(false);
      }).catch((error)=> {
        setError(true);
        setTextError('Account Not Found');
        setLoading(false);
      });

  }


  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
      {(error)?
        <Typography variant="h6" gutterBottom component="div" color="error" >
          {textError}
        </Typography>
      :
      <></>
      }
      <Stack spacing={3}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} className="form-new-account" >
          <RHFTextField name="riotId" label="Riot ID" className="form-new-account-first"id="riotId" />
          <h1>#</h1>
          <RHFTextField name="tagLine" label="Tag Line" id="tagline" />
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={loading}>
          Track Account
        </LoadingButton>
        <DetailAccount  />

      </Stack>
    </FormProvider>
  );
}
