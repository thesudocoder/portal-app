import React, { Fragment } from 'react';

import Header from '../../components/Header'
// import Sidebar from '../../components/Sidebar'
// import Content from '../../components/Content'
// import List from '../../components/List'


import { makeStyles } from '@material-ui/styles';

  const useStyles = makeStyles(theme => ({
    container: {
      ...theme.typography.layout,
    }
  }))

function Users() {
  const classes = useStyles()

  return (
    <Fragment>
        <Header title="" action=""/>
        <div className={classes.container}>
          {/* <Sidebar>
            <List></List>
          </Sidebar>
          <Content /> */}
        </div>
    </Fragment>
  );
}

Users.propTypes = {}

Users.defaultProps = {}

export default Users;
