import { Box, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '30vh',
    borderBottom: '2px solid lightgray',
  },
});

function Card({ key, covid }) {
  console.log(covid);
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="50px"
        style={{ gap: '6px' }}
      >
        <Typography variant="h4">{covid.province}</Typography>
        <Typography variant="body1">
          newcase:<span>{covid.new_case}</span>
        </Typography>
        <Typography variant="body1">
          death:<span>{covid.new_death}</span>
        </Typography>
        <Typography variant="body1">
          tatal case:<span>{covid.total_case}</span>
        </Typography>
        <Typography variant="body1">
          tatal death:<span>{covid.total_death}</span>
        </Typography>
      </Box>
    </Paper>
  );
}

export default Card;
