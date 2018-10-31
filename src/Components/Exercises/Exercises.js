import  React, { Component  } from 'react';

import {  Grid } from  '@material-ui/core';

import RightPanel from './RightPanel';
import LeftPanel from './LeftPanel';

const styles  ={
  Paper:{
    padding:20,
    marginTop:10,
    marginBottom:10,
    height:500,
    overflowY:"auto"
  }
}

 class Exercises extends Component  {
  render(){
    const {
      exercises,
      category,
      onSelect,
      exercise
    } = this.props;

    return(
      <Grid  container>
        <Grid item sm>
          <LeftPanel
            styles={styles}
            exercises = { exercises }
            category={category}
            onSelect={onSelect}
            onDelete={this.props.onDelete}
          />
        </Grid>
        <Grid item sm>
          <RightPanel
            styles={styles}
            exercise = {exercise}
          />
        </Grid>
      </Grid>
    )
  }
}

export default Exercises;
