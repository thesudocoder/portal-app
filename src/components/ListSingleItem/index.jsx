import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

  const useStyles = makeStyles(theme => ({
    listItem: {
      display : "inline-block"
    },
    listFirstRow: {
      paddingTop : "0px",
      paddingBottom : "0px",
      marginTop: "-10px"
    },
    listSecondRow: {
      marginTop: "-5px",
      paddingTop : "0px",
      paddingBottom : "0px"
    },
    secondItem: {
      textAlign : "right"
    },
    divider: {
      marginTop: 7
    }
  }))

function ListSingleItem(props) {
  const classes = useStyles()

  const { index, title, type, option1Key, option2Key, option1Val, option2Val } = props

  return (
    <Fragment>
        <ListItem className={classes.listFirstRow}>
            <ListItemText primary={<Typography variant="h6">{title} {index}</Typography>} />  
            <ListItemText primary={<Typography variant="subtitle2">{type}</Typography>} className={classes.secondItem}/>
        </ListItem>

        <ListItem className={classes.listSecondRow}>
            <ListItemText 
                primary={<Typography variant="body2">{option1Key}</Typography>} 
                secondary={<Typography variant="subtitle2">{option1Val}</Typography>}/>  
            <ListItemText 
                primary={<Typography variant="body2">{option2Key}</Typography>} 
                secondary={<Typography variant="subtitle2">{option2Val}</Typography>} 
                className={classes.secondItem}/>
            <ListItemText 
                primary={<Typography variant="body2">{option2Key}</Typography>} 
                secondary={<Typography variant="subtitle2">{option2Val}</Typography>} 
                className={classes.secondItem}/>
        </ListItem>
        <Divider light className={classes.divider}/>
    </Fragment>
  );
}

ListSingleItem.propTypes = {
  title: PropTypes.string, 
  type: PropTypes.string, 
  option1Key: PropTypes.string, 
  option2Key: PropTypes.string, 
  option1Val: PropTypes.string, 
  option2Val: PropTypes.string
}

ListSingleItem.defaultProps = {
  title: "No Title", 
  type: "type", 
  option1Key: "opt 1", 
  option2Key: "opt 2", 
  option1Val: "value 1", 
  option2Val: "value 2"
}

export default ListSingleItem;
