import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles';

  const useStyles = makeStyles(theme => ({
    toolbarMargin: {
      ...theme.mixins.toolbar
    },
    container: {
      borderBottom: "1px solid #c5d1d8"
    },
    option: {
      marginLeft: "auto"
    }
    
  }))

function Header(props) {
  const classes = useStyles()
  const { title, action, btnVariant } = props

  const  handleAction = (e) => {
    alert("Open modal")
  }

  return (
    <Fragment>
        <Toolbar className={classes.container}>
            <Typography variant="h5">
            {title}
            </Typography>
            <Button 
              variant={btnVariant}
              color="primary"
              className={classes.option}  
              onClick={(e)=> handleAction(e)}>
                {action}
            </Button>
        </Toolbar>
    </Fragment>
  );
}

Header.propTypes = {
    title : PropTypes.string,
    action: PropTypes.string,
    btnVariant: PropTypes.string,
}

Header.defaultProps = {
    title : "test",
    action: "test opt",
    btnVariant: "outlined"
}

export default Header;
