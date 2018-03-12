import React from 'react';
import PropTypes from 'prop-types';
import style from './dictionary_workspace.scss';
import DataSource from "../data_source/data_source";
import DataArchetypeList from "../data_archetype_list/data_archetype_list";


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
            error: null,
            isLoaded: false,
            data_sources: [],
            data_archetypes: [],
            selected_archetypes: []
        };
        this.AddArchetypeSelection = this.AddArchetypeSelection.bind(this);
    }
    //https://reactjs.org/docs/faq-ajax.html
    componentDidMount() {
        fetch("/data_sources.json")
                .then((response) => response.json())
                .then(
                    (result) => {
                        // console.log(result);
                        this.setState({
                            isLoaded: true,
                            data_sources: [
                                result
                            ]
                        });
                    })
                .catch((error) => {
                    console.error(error);
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
        });
    }

    AddArchetypeSelection(ArchetypeId){
        console.log("ArchetypeId: "+ ArchetypeId + " added");
    }


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="dictionary-app">
                    <div className="ArchetypeArea">
                        <DataArchetypeList value={this.state} addArchetypeSelection={this.AddArchetypeSelection}/>
                    </div>
                    <div className="DataDiagramArea">
                        <DataSource value={this.state} />
                    </div>
                </div>
            );
        }
    }
}

export default DictionaryWorkspace;



