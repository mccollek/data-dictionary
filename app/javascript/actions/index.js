import * as types from "../constants/ActionTypes"
import {ARCHETYPE_ADD} from "../constants/ActionTypes";
import {DATASET_ADD} from "../constants/ActionTypes";
import {DATASOURCE_ADD} from "../constants/ActionTypes";

export const archetypeAdd = (name, description) =>({type: ARCHETYPE_ADD, name, description})
export const dataSetAdd = (name, production, dataStarts, dataEnds, dataSourceId) => (
    {
        type: DATASET_ADD,
        name,
        production,
        dataStarts,
        dataEnds,
        dataSourceId
    }
)
export const dataSourceAdd = (name, production, description, notes, location, refreshFrequency, reliability) => (
    {
        type: DATASOURCE_ADD,
        name,
        production,
        description,
        notes,
        location,
        refreshFrequency,
        reliability
    }
)