import React from 'react';
import Grid from '@material-ui/core/Grid';
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
        <Grid item xs={12}>
          <p className="hello-text">
            Hello there, nice to meet you. My name is Lucas Andrade, a software engineer with a lot of dreams (really, a lot). Right now I'm focus on Javascript and React. This page is just to introduce myself, later I might add a small blog here.
          </p>
        </Grid>
        <Grid item xs={4}>
          <img src={linkedinLogo} alt="linkedin-logo" width="80" />
        </Grid>

        <Grid item xs={4}>
          <img src={githubLogo} alt="github-logo" width="50" />
        </Grid>

        <Grid item xs={4}>
          <img src={twitterLogo} alt="twitter-logo" width="40" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
