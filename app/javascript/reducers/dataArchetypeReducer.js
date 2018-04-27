import React from 'react'
import {ARCHETYPE_ADD, ARCHETYPES_LOADED} from "../constants/ActionTypes";

const initialState = {
    dataArchetypes: [
    {
        name: 'test archetype',
        description: 'test archetype description'
    }
]}


export default function dataArchetypes(state = initialState, action) {
    switch(action.type){
        case 'ARCHETYPE_ADD':
            console.log("Archetype Added!");
            return [
                ...state,
                {
                    name: action.name,
                    description: action.description
                }
            ];
        case 'ARCHETYPES_LOADED':
            console.log("Archetypes Loaded!");
            console.log(action.data)
            return [
                ...state,
                action.data
            ];

        default:
            return state;
    }
}
