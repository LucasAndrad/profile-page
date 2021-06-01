import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { twitterLogo, linkedinLogo, githubLogo } from 'src/assets';
import './App.css';

function App() {
  return (
    <div className="container">
      <Grid container justify="center" alignItems="center" spacing={5}>
        <Grid item xs={12}>
          <img
            className="profile-image"
            src="https://lucas-profile.s3.amazonaws.com/lucas-profile-cut.png"
            alt="Lucas_Andrade_profile_image"
          />
        </Grid>
        <Grid item xs={12}>Some text description</Grid>
        <Grid item xs={4}>
          <IconButton aria-label="github">
            <img src={githubLogo} alt="github-logo" width="50" />
          </IconButton>
        </Grid>

        <Grid item xs={4}>
          <IconButton aria-label="linkedin">
            <img src={linkedinLogo} alt="linkedin-logo" width="80" />
          </IconButton>
        </Grid>

        <Grid item xs={4}>
          <IconButton aria-label="twitter">
            <img src={twitterLogo} alt="twitter-logo" width="40" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
