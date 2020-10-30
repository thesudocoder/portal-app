import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/styles';

  const useStyles = makeStyles(theme => ({
    container: {
        width: 350
    }
  }))

function Sidebar(props) {
  const classes = useStyles()
  const { children } = props

  return (
    <Fragment>
      <div className={classes.container}>
          {children}
      </div>
    </Fragment>
  );
}

Sidebar.propTypes = {}

Sidebar.defaultProps = {}

export default Sidebar;
