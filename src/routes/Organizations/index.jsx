import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Content from '../../components/Content'
import SideList from '../../components/SideList'

import OrgDetails from './OrgDetails'

import * as orgActions from '../../store/organization/actions'

import { makeStyles } from '@material-ui/styles';

  const useStyles = makeStyles(theme => ({
    container: {
      ...theme.typography.layout,
    }
  }))

function Organizations(props) {
  const classes = useStyles()

  const { details } = props

  return (
    <Fragment>
        <Header title="Org" action="Reg new Org"/>
        <div className={classes.container}>
          <Sidebar>
            <SideList />
          </Sidebar>
          <Content>
            <OrgDetails details={details} />
          </Content>
        </div>
    </Fragment>
  );
}

Organizations.propTypes = {}

Organizations.defaultProps = {}

const mapStateToProps = state => {
  return {
    details: state.organization.details,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewOrganization : (org) =>  dispatch(orgActions.addNewOrganization(org))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Organizations);
