import { Box, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Card from './Card';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1035&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  },
  paper: {
    width: '100vw',
    height: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    paddingTop: '20px',
    opacity: '0.6',
  },
});

function App() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const covid = await axios.get(
        'https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces'
      );
      setData(covid.data);
    };
    fetchData();
  }, []);

  return (
    <Box display="flex" flexDirection="column" className={classes.root}>
      <Paper square className={classes.paper}>
        <Typography variant="h3">Memo Hospital</Typography>
      </Paper>
      <Container maxWidth="md" style={{ marginTop: '30px' }}>
        {data.map((c, index) => (
          <Card key={index} covid={c} />
        ))}
      </Container>
    </Box>
  );
}

export default App;
