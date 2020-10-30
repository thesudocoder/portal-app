import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/styles';

  const useStyles = makeStyles(theme => ({
    container: {
        width: "calc(100% - 350px)"
    }
  }))

function Content(props) {
  const classes = useStyles()

  return (
    <Fragment>
        <div className={classes.container}>Content</div>
    </Fragment>
  );
}

Content.propTypes = {}

Content.defaultProps = {}

export default Content;
