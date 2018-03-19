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
    // console.log(dataSets);
    var dataArchetypeIds = [];
    dataSets.map((dataSet) => {dataArchetypeIds.push(...dataSet.data_archetypes.map((dataArchetype) => dataArchetype.id))});
    // console.log("dataSourceArchetypeIds");
    // console.log(dataArchetypeIds);
    return dataArchetypeIds
}

function colorRings(selectedArchetypeIDs, dataSets){
    var boxShadowValue="";
    var matches = 1;
    dataSourceArchetypeIds(dataSets).forEach(function(dataSetArchId){
      if (selectedArchetypeIDs.indexOf(dataSetArchId) > -1){

          if(matches >1){boxShadowValue += ","};
          boxShadowValue += "0 0 0 " + String(matches*6)+ "px #666";
          matches += 1;
      }
    })
    return {
        boxShadow: boxShadowValue,
        margin: String((matches+1)*6)+"px"
    };
}


function BackgroundStyle(dataSource, selectedArchetypeIDs){
    // console.log("backgroundstyle touched for dataSource " + dataSource.name);
    var dataSets = dataSource.data_sets;
    // console.log("DataSets");
    // console.log(dataSets);
    // console.log("DataSourceArchetypes");
    // console.log(dataSourceArchetypeIds(dataSets));
    console.log("SelectedArcehtypes");
    console.log(selectedArchetypeIDs)
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
    // console.log("DataSourceList")
    // console.log(props.sources.value.dataSources[0])
    // console.log(props.sources);
    var DataSources = props.sources.value.dataSources[0];
    var DataSourceItems = DataSources.map((dataSource) =>
        <div
            className={"DataSource" + BackgroundStyle(dataSource, props.sources.value.selectedArchetypes)}
            key={dataSource.id}
            style={colorRings(props.sources.value.selectedArchetypes,dataSource.data_sets)}
        >
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
        return (
            <div className="DataSourceArea">
                <DataSourceList sources={this.props} />
            </div>
        );
    }
}

export default DataSource;

