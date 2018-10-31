import React, { Fragment } from 'react';

import { Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';

const LeftPanel = ({styles, exercises, category, onSelect, onDelete}) => {
  return(
    <Paper style={styles.Paper}>
      {
        exercises.map(([group,exercises]) => {
          return (
            !category || category === group
            ? <Fragment>
                <Typography
                  variant="headline"
                  style={{textTransform:"capitalize"}}>
                  {group}
                </Typography>
                <List component="ul">
                  {
                    exercises.map(({ id, title }) =>
                      <ListItem
                        button
                        onClick ={ () =>  onSelect(id)}
                      >
                        <ListItemText
                          primary={ title }
                        />
                        <ListItemSecondaryAction>
                          <IconButton onClick={() => onDelete(id)}>
                            x
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    )
                  }
                </List>
              </Fragment>
          : null
          )
        })
      }
    </Paper>
  )
}

export default LeftPanel;
