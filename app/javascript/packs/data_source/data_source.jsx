import React from 'react';
import DataSet from "../data_set/data_set";


/**
 * @render react
 * @name DataSet
 * @description Card for a Data Set
 * @example
 * <Dataset title="Budget Numbers" />
 */


function DataSourceList(props) {
    // console.log(props.sources.value.data_sources)
    // console.log(props.sources);
    const DataSources = props.sources.value.data_sources[0];
    const DataSourceItems = DataSources.map((data_source) =>
        <div className="DataSource" key={data_source.id}>
            <div className="DataSourceTitle">
                {data_source.name}
            </div>
            <div className="DataSetArea">
                <DataSet value={data_source.data_sets}/>
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

