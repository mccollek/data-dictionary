import React from 'react'
import {DATASOURCE_ADD, DATASOURCES_LOADED} from "../constants/ActionTypes";

const initialState = {
    dataSources: [
        {
            name: 'test datasource',
            description: 'test datasource description'
        }
    ]}


export default function dataSources(state = initialState, action) {
    switch(action.type){
        case 'DATASOURCE_ADD':
            console.log("Data Sources Added!");
            return [
                ...state,
                {
                    name: action.name,
                    description: action.description
                }
            ];
        case 'DATASOURCES_LOADED':
            console.log("Data Sources Loaded!");
            console.log(action.data)
            return [
                ...state,
                action.data
            ];

        default:
            return state;
    }
}
