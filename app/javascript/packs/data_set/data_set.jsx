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

function dataArchetypeIds(dataArchetypes){
    var dataArchetypeIds = dataArchetypes.map((dataArchetype) => dataArchetype.id);
    // console.log("dataArchetypeIds");
    // console.log(dataArchetypeIds);
    return dataArchetypeIds
}

function SearchRelatedClass(selectedIds, currentId){
    if(selectedIds.length > 0){
        if(selectedIds.includes(currentId)){
            return ""
        }else{
            return "ArchetypeNotSelected"
        }
    }else{
        return ""
    }
}



function DataSetList(props) {
    const SelectedArchetypes = props.source.value.selectedArchetypes;
    console.log(SelectedArchetypes);
    const DataSets = props.source.value.dataSets;
    const DataSetItems = DataSets.map((dataSet) =>
        <div className={DataSetClass(dataSet.production) + " " + ArchetypeRelated(dataArchetypeIds(dataSet.data_archetypes), SelectedArchetypes) + " " + SearchRelatedClass(props.source.value.matchedData, dataSet.id)} key={dataSet.id}>
            <div className="DataSetTitle">
                {dataSet.name}
            </div>
            <div className="DataSetDetails">
                <ul>
                    <li>
                        {dataSet.data_starts} - {dataSet.data_ends}
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


     if (this.props.value.dataSets.length > 0){
         return (
             <DataSetList source={this.props}/>
         )

     }else{
         return null
     }
 }
}

export default DataSet;