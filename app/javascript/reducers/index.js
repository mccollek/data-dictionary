import { combineReducers } from 'redux'
import dataArchetypes from './dataArchetypeReducer'
import dataSources from './dataSourceReducer'

const rootReducer = combineReducers({
    dataArchetypes,
    dataSources
})

export default rootReducer