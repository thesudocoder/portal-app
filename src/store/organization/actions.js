import * as types from './types';

// Create Organization
export const addNewOrganization = (org = {}) => {
    console.log(types.ADD_NEW_ORG)
    return {
        type: types.ADD_NEW_ORG,
        payload: org
    }
}

// Create Organization success
export const addNewOrgSuccess = (org = {}) => {
    return {
        type: types.ADD_NEW_ORG_SUCCESS,
        payload: org
    }
}

// Create Organization failure
export const addNewOrgFailed = (org = {}) => {
    return {
        type: types.ADD_NEW_ORG_FAID,
        payload: org
    }
}