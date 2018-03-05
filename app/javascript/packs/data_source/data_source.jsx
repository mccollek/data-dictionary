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
class DictionaryWorkspace extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: 'test title from workspace',
        };
    }

    render() {
        return (
            <div className={style.DataSource}>
                <div className={style.DataSourceTitle}>
                    {this.props.value.title}
                </div>
                This is the DataSource
                <div className={style.DataSetArea}>
                    <DataSet value={this.state}/>
                </div>
            </div>
        );
    }
}

export default DictionaryWorkspace;



