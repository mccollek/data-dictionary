import React from 'react';
import DataSet from "../data_set/data_set";


/**
 * @render react
 * @name DataSet
 * @description Card for a Data Set
 * @example
 * <Dataset title="Budget Numbers" />
 */

function BackgroundStyle(source_id, selected_archetypes){
    console.log("backgroundstyle touched")
    if(selected_archetypes.indexOf(source_id)==-1){
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
    // console.log(props.sources.value.data_sources)
    console.log(props.sources);
    var DataSources = props.sources.value.data_sources[0];
    var DataSourceItems = DataSources.map((data_source) =>
        <div className="DataSource" key={data_source.id}>
            <div className="DataSourceTitle">
                {data_source.name}
            </div>
            <div className="DataSetArea">
                <DataSet sources={props} style={BackgroundStyle(data_source.id, props.sources.value.selected_archetypes)} value={{data_sets: data_source.data_sets, selected_archetypes: props.sources.value.selected_archetypes}}/>
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

