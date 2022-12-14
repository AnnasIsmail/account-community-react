import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import Iconify from '../../../components/Iconify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DetailMMR(props) {
    const detailSkin = props.detailSkin;
    let levels = [];

  if(props.detailSkin.data !== undefined){
    levels = props.detailSkin.data;
  }


  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={()=>props.handleClose()}
        closeAfterTransition
        className="detail-agent"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {props.detailSkin.name}#{props.detailSkin.tag}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>

                  <div>
              {levels.map((data , index)=>{
                return(
                  <Accordion>
                      <AccordionSummary
                        expandIcon={<Iconify icon='ic:twotone-expand-more' width={24} height={24} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                      {(data.mmr_change_to_last_game > 1)?
                        <Typography variant='h6' color="primary" >{data.date}</Typography>
                        :
                        <>
                        {
                       (data.mmr_change_to_last_game === 0)? 
                       <Typography variant='h6' >{data.date}</Typography>
                       :
                       <Typography variant='h6' color="error" >{data.date}</Typography>
                        }
                        </>
                      }
                      </AccordionSummary>
                      <AccordionDetails>
                        {/* <img src={data.displayIcon} className="image-detail-agent" alt="imageSkin" /> */}
                        <Typography>
                          <Typography>
                            Rank : {data.currenttierpatched}
                          </Typography>
                          <Typography>
                            MMR Match : {data.mmr_change_to_last_game}
                          </Typography>
                          <Typography>
                            MMR in Tier : {data.ranking_in_tier}
                          </Typography>
                          <Typography>
                            Elo : {data.elo}
                          </Typography>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                );
              })}

                    
                </div>
                
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
