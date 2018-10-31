import  React, { Component  } from 'react';

import  Create  from '../Exercises/Dialog/Create';
import {
         AppBar,
         Toolbar,
         Typography
                      } from '@material-ui/core';

class Header extends Component  {
  render(){
    return(
      <AppBar position="static" >
        <Toolbar >
          <Typography variant="display1" color="inherit" style={{flex:1}}>
            Gym Exercises
          </Typography>
          <Create
          muscles={this.props.muscles}
          onCreate={this.props.onExerciseCreate}
          />
        </Toolbar>
      </AppBar>
    )
  }
}


export  default Header;
