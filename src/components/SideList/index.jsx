import React, { Fragment } from 'react';

import VirtualList from '../VirtualList'
import ListSingleItem from '../ListSingleItem'

import List from '@material-ui/core/ListItem'
import { makeStyles } from '@material-ui/styles';

  const useStyles = makeStyles(theme => ({
    container: {
        margin: 10,
        backgroundColor : "#ffffff",
        overflowY: "auto",
        height: "calc(100% - 20px)"
    },
    listItem: {
      display : "inline-block"
    }
  }))

function SideList(props) {
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.container}>
        <VirtualList itemCount={2000} itemSize={95}>
            {({ index, style}) => (
              <List button style={style} className={classes.listItem} key={index}>
                <ListSingleItem index={index}></ListSingleItem>
          </List>
            )}
        </VirtualList>
      </div> 
    </Fragment>
  );
}

SideList.propTypes = {}

SideList.defaultProps = {}

export default SideList;
