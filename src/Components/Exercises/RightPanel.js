import React from 'react';

import { Paper, Typography } from '@material-ui/core';
const RightPanel = (
  {
    styles,
    exercise: {
      id,
      title,
      description
    }
  }) => {

  return(
    <Paper style={styles.Paper}>
      <Typography variant="display1">
        {title}
      </Typography>
      <Typography variant="subheading" style={{marginTop:20}}>
        {description}
      </Typography>
    </Paper>
  )
}

export default RightPanel;
