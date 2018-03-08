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

// function loadData(url) {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (xhttp.readyState == 4 && xhttp.status == 200) {
//             console.log(xhttp.responseText);
//         }
//     };
//     xhttp.open("GET", url, true);
//     xhttp.send();
// };

// function getDataSourcesFromApiAsync() {
//     return
// }
class DictionaryWorkspace extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data_sources: [],
            data_archetypes: []
        };

    }

    //https://reactjs.org/docs/faq-ajax.html
    componentDidMount() {
        fetch("/data_archetypes.json")
            .then((response) => response.json())
            .then(
                (result) => {
                    this.setState({
                        data_archetypes: result
                    });
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
                })
            .catch((error) => {
                console.error(error);
                this.setState({
                    isLoaded: true,
                    error: error
                });
            });

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
                    <DataSource value={this.state}/>
                </div>
            );
        }
    }
}

export default DictionaryWorkspace;



