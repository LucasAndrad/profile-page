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
          <a href="https://www.linkedin.com/in/lucasandrad" target="_blank" className="external-link">
            <img src={linkedinLogo} alt="linkedin-logo" width="80" />
          </a>
        </Grid>

        <Grid item xs={4}>
          <a href="https://github.com/lucasandrad" target="_blank" className="external-link">
            <img src={githubLogo} alt="github-logo" width="50" />
          </a>
        </Grid>

        <Grid item xs={4}>
          <a href="https://twitter.com/lucasandrad__" target="_blank" className="external-link">
            <img src={twitterLogo} alt="twitter-logo" width="40" />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
