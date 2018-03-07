import React from 'react';
import style from './data_source.scss';
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
        <div>{DataSourceItems}</div>
    )
}

class DataSource extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'test title from workspace',
        };
    }



    render() {
        return (
            <DataSourceList sources={this.props} />
        );
    }
}

export default DataSource;

