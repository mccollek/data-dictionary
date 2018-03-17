import React from 'react';
import style from './data_set.scss';


/**
 * @render react
 * @name DataSet
 * @description Card for a Data Set
 * @example
 * <Dataset title="Budget Numbers" />
 */

function DataSetClass(production){
    if(production == true){
        return("DataSet ProductionDataSet")
    }else{
        return("DataSet")
    }

}

function ArchetypeRelated(dataSetArchetypeIds, selectedArchetypeIDs){
    console.log("archetype related function selectedArchetypeIDs")
    console.log(selectedArchetypeIDs)
    console.log(dataSetArchetypeIds)
    if(selectedArchetypeIDs.length > 0){
        if(selectedArchetypeIDs.some(selectedId=> dataSetArchetypeIds.indexOf(selectedId)>-1)){
            return ""
        }else{
            return "ArchetypeNotSelected"
        }
    }else{
        return ""
    }
}

function DataSetList(props) {
    const SelectedArchetypes = props.source.value.selected_archetypes;
    console.log(SelectedArchetypes);
    const DataSets = props.source.value.data_sets;
    const DataSetItems = DataSets.map((data_set) =>
        <div className={DataSetClass(data_set.production) + " " + ArchetypeRelated(data_set.data_archetypes, SelectedArchetypes)} key={data_set.id}>
            <div className="DataSetTitle">
                {data_set.name}
            </div>
            <div className="DataSetDetails">
                <ul>
                    <li>
                        {data_set.data_starts} - {data_set.data_ends}
                    </li>
                </ul>
            </div>
        </div>
    );
    return(
        DataSetItems
    )
}


class DataSet extends React.Component{
 constructor(props) {
     super(props);
 }

 render() {
     console.log("dataset props:");
     console.log(this.props);

     if (this.props.value.data_sets.length > 0){
         return (
             <DataSetList source={this.props}/>
         )

     }else{
         return null
     }
 }
}

export default DataSet;