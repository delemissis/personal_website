import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import atlas_logo from '../assets/images/atlas.png';
import emb_logo from '../assets/images/embs.png';
import fotiadis_logo from '../assets/images/fotiadis.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid className="image_container" item xs={4}>
          <img className="image" src={fotiadis_logo} alt={'Fotiadis'} />
          <div class="middle">
            <a href="https://www.fotiadis.com.gr/" target="_blank">
              <div class="text">
                {' '}
                <i class="fas fa-link"></i>
              </div>
            </a>
          </div>
        </Grid>
        <Grid className="image_container" item xs={4}>
          <img className="image" src={atlas_logo} alt={'ATLAS'} />
          <div class="middle">
            <a href="https://www.atlascarrental.gr/" target="_blank">
              <div class="text">
                <i class="fas fa-link"></i>
              </div>
            </a>
          </div>
        </Grid>
        <Grid className="image_container" item xs={4}>
          <img className="image" src={emb_logo} alt={'EMBS'} />
          <div class="middle">
            <a href="https://emb.web.auth.gr/" target="_blank">
              <div class="text">
                {' '}
                <i class="fas fa-link"></i>
              </div>
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
