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
    var dataArchetypeIds = [];
    dataSets.map((dataSet) => {dataArchetypeIds.push(...dataSet.data_archetypes.map((dataArchetype) => dataArchetype.id))});
    // console.log("dataSourceArchetypeIds");
    // console.log(dataArchetypeIds);
    return dataArchetypeIds
}

function getColorFromArchetype(dataSetArchId, dataArchetypes){
    var archetype = dataArchetypes.find((dataArchetype) => dataArchetype.id === dataSetArchId)
    return archetype.color_swatch_css
}


function colorRings(selectedArchetypeIDs, dataSets, dataArchetypes){
    var boxShadowValue="";
    var matches = 1;
    var returnValue={};
    dataSourceArchetypeIds(dataSets).forEach(function(dataSetArchId){
      if (selectedArchetypeIDs.indexOf(dataSetArchId) > -1){
          var archetypeColor = getColorFromArchetype(dataSetArchId, dataArchetypes);
          if(matches >1){boxShadowValue += ","};
          boxShadowValue += "0 0 0 " + String(matches*6)+ "px " + archetypeColor + ",0 0 0 " + String((matches+1)*6)+ "px #fff";
          returnValue= {
              boxShadow: boxShadowValue,
              margin: String((matches+1)*6)+"px",
              order: -1
          };
          matches += 2;
      }else{
      }
    });
    return returnValue;
}


function BackgroundStyle(dataSource, selectedArchetypeIDs){
    var dataSets = dataSource.data_sets;
    // console.log("DataSets");
    // console.log(dataSets);
    // console.log("DataSourceArchetypes");
    // console.log(dataSourceArchetypeIds(dataSets));
    // console.log("SelectedArchetypes");
    // console.log(selectedArchetypeIDs)
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
    var dataArchetypes = props.sources.value.dataArchetypes
    var DataSourceItems = DataSources.map((dataSource) =>
        <div
            className={"DataSource" + BackgroundStyle(dataSource, props.sources.value.selectedArchetypes)}
            key={dataSource.id}
            style={colorRings(props.sources.value.selectedArchetypes,dataSource.data_sets, dataArchetypes)}
        >
            <div className="DataSourceTitle">
                {dataSource.name}
            </div>
            <div className="DataSetArea">
                <DataSet sources={props}  value={{dataSets: dataSource.data_sets,
                    selectedArchetypes: props.sources.value.selectedArchetypes,
                    matchedData: props.sources.value.matchedData}}/>
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

