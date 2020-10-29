import React, { useState, Fragment, useEffect } from 'react';
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/styles';


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0, 
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  const useStyles = makeStyles(theme => ({
    toolbarMargin: {
      ...theme.mixins.toolbar
    },
    tabContainer: {
      marginLeft: 50
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px"
    }
  }))

function NavHeader() {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleNavChange = (e, value) => {
    setValue(value)
  }

  useEffect(() => {
    if(window.location.pathname === "/" && value !== 0){
      setValue(0)
    }else if(window.location.pathname === "/orders" && value !== 1){
      setValue(1)
    }else if(window.location.pathname === "/users" && value !== 2){
      setValue(2)
    }
  }, [value])

  return (
    <Fragment>
      <ElevationScroll>
          <AppBar position="fixed" color="primary">
              <Toolbar>
                <Button 
                  disableRippleEffect
                  component={Link} to="/" 
                  onClick={() => setValue(0)}>
                  <Typography variant="h4" color="secondary">
                    LOGO
                  </Typography>
                </Button>
              <Tabs value={value} onChange={handleNavChange} className={classes.tabContainer} indicatorColor="none">
                <Tab className={classes.tab} component={Link} to="/" label="Manage Organizations"></Tab>
                <Tab className={classes.tab} component={Link} to="/orders" label="Manage Orders"></Tab>
                <Tab className={classes.tab} component={Link} to="/users" label="Manage Users"></Tab>
              </Tabs>
              </Toolbar>

          </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </Fragment>
  );
}

export default NavHeader;
