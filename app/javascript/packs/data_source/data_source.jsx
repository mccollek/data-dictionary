import React from 'react';
import DataSet from "../data_set/data_set";


/**
 * @render react
 * @name DataSet
 * @description Card for a Data Set
 * @example
 * <Dataset title="Budget Numbers" />
 */

function dataSourceArchetypeIds(dataSets){
    console.log(dataSets);
    var dataArchetypeIds = [];
    dataSets.map((dataSet) => {dataArchetypeIds.push(...dataSet.data_archetypes.map((dataArchetype) => dataArchetype.id))});
    console.log("dataSourceArchetypeIds");
    console.log(dataArchetypeIds);
    return dataArchetypeIds
}


function BackgroundStyle(dataSets, selectedArchetypeIDs){
    console.log("backgroundstyle touched");
    console.log(dataSourceArchetypeIds(dataSets));
    if(selectedArchetypeIDs.length > 0){
        if(selectedArchetypeIDs.some(selectedId=> dataSourceArchetypeIds(dataSets).indexOf(selectedId)>-1)){
            return "";
        }else {
            return " ArchetypeNotSelected"
        }
    }else{
        return ""
    }
}

function DataSourceList(props) {
    console.log("DataSourceList")
    console.log(props.sources.value.dataSources[0])
    console.log(props.sources);
    var DataSources = props.sources.value.dataSources[0];
    var DataSourceItems = DataSources.map((dataSource) =>
        <div className={"DataSource" + BackgroundStyle(dataSource.data_sets, props.sources.value.selectedArchetypes)} key={dataSource.id}>
            <div className="DataSourceTitle">
                {dataSource.name}
            </div>
            <div className="DataSetArea">
                <DataSet sources={props}  value={{dataSets: dataSource.data_sets, selectedArchetypes: props.sources.value.selectedArchetypes}}/>
            </div>
        </div>
    );
    return(
        DataSourceItems
    )
}

class DataSource extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        console.log("rendering DataSource");
        return (
            <div className="DataSourceArea">
                <DataSourceList sources={this.props} />
            </div>
        );
    }
}

export default DataSource;

