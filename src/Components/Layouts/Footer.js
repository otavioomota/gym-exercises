import  React, { Component  } from 'react';

import { Paper, Tabs, Tab} from '@material-ui/core';

 class Footer extends Component  {

  render(){
    const { muscles, category, onSelect } = this.props;
    const index = category
      ? muscles.findIndex(group=> group === category) + 1
      : 0

    const indexCategorySelected = (e, index) => {
      onSelect(index === 0 ? "" : muscles[index - 1])
    }
    return(
      <Paper>
        <Tabs
          value={index}
          onChange={indexCategorySelected}
          indicatorColor="primary"
          textColor="secondary"
          centered
          >
          <Tab label="all" />
          {
            muscles.map((muscle,index) => {
              return (
                <Tab label = {muscle} />
              )
            })
          }
        </Tabs>
      </Paper>
    )
  }
}

export default Footer;
