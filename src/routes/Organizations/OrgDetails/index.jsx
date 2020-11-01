import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/styles';

  const useStyles = makeStyles(theme => ({
    container: {
        margin: 10,
        backgroundColor : "#ffffff",
        overflowY: "auto",
        height: "calc(100% - 20px)"
    },
  }))

function OrgDetails(props) {
  const classes = useStyles()

  const {details} = props

  return (
    <Fragment>
        <div className={classes.container}>
            {details}
        </div>
        
    </Fragment>
  );
}

OrgDetails.propTypes = {}

OrgDetails.defaultProps = {}

export default OrgDetails;
