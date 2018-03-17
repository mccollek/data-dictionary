import React from 'react';
import DataSet from "../data_set/data_set";


/**
 * @render react
 * @name DataSet
 * @description Card for a Data Set
 * @example
 * <Dataset title="Budget Numbers" />
 */

function BackgroundStyle(source_id, selectedArchetypes){
    console.log("backgroundstyle touched")
    if(selectedArchetypes.indexOf(source_id)===-1){
        return {
            position: "fixed",
            display: "none",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 2,
            cursor: "pointer"
        }
    }else{
            return "";
    }
}

function DataSourceList(props) {
    console.log("DataSourceList")
    console.log(props.sources.value.dataSources[0])
    console.log(props.sources);
    var DataSources = props.sources.value.dataSources[0];
    var DataSourceItems = DataSources.map((dataSource) =>
        <div className="DataSource" key={dataSource.id}>
            <div className="DataSourceTitle">
                {dataSource.name}
            </div>
            <div className="DataSetArea">
                <DataSet sources={props} style={BackgroundStyle(dataSource.id, props.sources.value.selectedArchetypes)} value={{dataSets: dataSource.data_sets, selectedArchetypes: props.sources.value.selectedArchetypes}}/>
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

