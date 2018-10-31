import React, { Component, Fragment} from 'react';
import  {  Button,
          Dialog,
          DialogActions,
          DialogContent,
          DialogTitle,
          FormControl,
          InputLabel,
          MenuItem,
          Select,
          TextField,
          withStyles  } from '@material-ui/core';


const styles = theme => ({
  FormControl: {
    width: 500
  }
})
export default withStyles(styles)(class Create extends  Component  {
   state = {
     open: false,
     exercise: {
        title:"",
        description:"",
        muscles:""
      }
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = name => event => {
    this.setState({
      exercise:{
        ...this.state.exercise,
        [name]: event.target.value
      }
    })
  }

  handleSubmit = () => {

    this.props.onCreate({
      ...this.state.exercise,
      id: this.state.exercise.title.toLocaleLowerCase().replace(/ /g, '-')
    })
    this.setState({
      open:false,
      exercise:{
        title:"",
        description:"",
        muscles:""
      }
    })
  }
  render(){
    return (
    <Fragment>
        <Button  variant="fab" color="primary" onClick={this.handleToggle}>
          Add
        </Button>

      <Dialog
        open={this.state.open}
        onClose={this.handleToggle}
        aria-labelledby="form-dialog-title"
       >
         <DialogTitle id="form-dialog-title">Add an Exercise</DialogTitle>
         <DialogContent>
           <form>
             <TextField
               autoFocus
               margin="normal"
               label="Title"
               value={this.state.exercise.title}
               onChange={this.handleChange('title')}
               fullWidth
               className={this.props.classes.FormControl}
             />
             <TextField
               label="Description"
               multiline
               rowsMax="4"
               value={this.state.exercise.description}
               onChange={this.handleChange('description')}
               margin="normal"
               className={this.props.classes.FormControl}
             />
             <br />
             <FormControl
              className={this.props.classes.FormControl}
             >
              <InputLabel htmlFor="muscles">Muscles</InputLabel>
              <Select
                value={this.state.exercise.muscles}
                onChange={this.handleChange("muscles")}
              >
                {this.props.muscles.map(muscle =>
                  <MenuItem
                    value={muscle}
                    key={muscle}
                  >
                    {muscle}
                  </MenuItem>
                )}

              </Select>
            </FormControl>
           </form>
         </DialogContent>
         <DialogActions>
           <Button
           color="primary"
           onClick={this.handleSubmit}
           >
             Create
           </Button>
         </DialogActions>
       </Dialog>
    </Fragment>

    )
  }
})
