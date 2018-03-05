import React from 'react';
import PropTypes from 'prop-types';
import style from './dictionary_workspace.scss';
import DataSource from "../data_source/data_source";


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
            title: 'test title from datasource',
        };
    }

    render() {
        return (
            <div className="dictionary-app">
                This is the DictionaryWorkspace
                <DataSource value={this.state}/>
            </div>
        );
    }
}

export default DictionaryWorkspace;



