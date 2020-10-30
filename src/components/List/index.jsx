import React, { Fragment } from 'react';

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


import { makeStyles } from '@material-ui/styles';

  const useStyles = makeStyles(theme => ({
    container: {
        margin: 10,
        backgroundColor : "#ffffff",
        overflowY: "auto",
        height: "calc(100% - 20px)"
    }
  }))

function List(props) {
  const classes = useStyles()

  return (
    <Fragment>
        <div className={classes.container}>
            {[...Array(200).keys()].map((item) => (
                <ListItem button>
                    <ListItemText primary={`Row ${item}`}/>
                </ListItem>
            ))}
        </div>
    </Fragment>
  );
}

List.propTypes = {}

List.defaultProps = {}

export default List;
