import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reduxLogger from 'redux-logger';
import rootReducer from '../../reducers/index'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = createStore(
    rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk, reduxLogger)
));
import PropTypes from 'prop-types';
import style from './dictionary_workspace.scss';
import DataSource from "../data_source/data_source";
import DataArchetypeList from "../data_archetype_list/data_archetype_list";
import FormModal from "../form_modal/form_modal";
import FormModalButton from "../form_modal_button/form_modal_button";

/**
 * @render react
 * @name DataSet
 * @description Card for a Data Set
 * @example
 * <Dataset title="Budget Numbers" />
 */

function loadData (dispatch) {
    dispatch({type: 'LOAD_START'})
    var dataSourceData={};
    var dataArchetypeData={};
    fetch("/data_sources.json")
        .then((response) => response.json())
        .then(
            (result) =>
                dataSourceData = {
                    isLoaded: true,
                    dataSources: result
                }
            )
        .then((result)=> {
            console.log('dispatching archetypes');
            store.dispatch({type: 'DATASOURCES_LOADED', data: dataSourceData})
        })
        .catch((error) => {
            console.error(error);
            this.setState({
                isLoaded: true,
                error: error
            });
        });
    fetch("/data_archetypes.json")
        .then((response) => response.json())
        .then(
            (result) => {
                dataArchetypeData= {
                    isLoaded: true,
                    dataArchetypes: result
                };
                console.log('Data Archetype Result:');
                console.log(result);
                console.log('dataArchetypeData var:');
                console.log(dataArchetypeData);
            })
        .then((result)=> {
            console.log('dispatching archetypes');
            store.dispatch({type: 'ARCHETYPES_LOADED', data: dataArchetypeData})
        })
        .catch((error) => {
            console.error(error);
            this.setState({
                isLoaded: true,
                error: error
            });
        });
}


class DictionaryWorkspace extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            dataSources: [],
            dataArchetypes: [],
            selectedArchetypes: [],
            formModalShow: false,
            formModalClass: 'DataArchetypeForm',
            store: store
        };
        // console.log('workspace selected archetypes:');
        // console.log(this.state.selectedArchetypes);
        this.AddArchetypeSelection = this.AddArchetypeSelection.bind(this);
        this.formModalHandleShow = this.formModalHandleShow.bind(this);
        this.formModalHandleClose = this.formModalHandleClose.bind(this);
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
                        dataSources: [
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
        fetch("/data_archetypes.json")
            .then((response) => response.json())
            .then(
                (result) => {
                    this.setState({
                        dataArchetypes: result
                    });
                    // console.log(result);
                })
            .catch((error) => {
                console.error(error);
                this.setState({
                    isLoaded: true,
                    error: error
                });
            });
        store.dispatch(loadData);
    }



    AddArchetypeSelection(id){
        // console.log(id);
        // e.preventDefault();
        // console.log(this.state.selectedArchetypes);
        var newArray= this.state.selectedArchetypes.indexOf(id) > -1
            ? this.state.selectedArchetypes.filter(saId => saId !== id)
            : [...this.state.selectedArchetypes, id]
        this.setState({selectedArchetypes: newArray})
        // console.log("I'm Adding Archetypres!!")

    }

    formModalHandleShow(formClass){
        this.setState({ formModalShow: true,
                        formModalClass: formClass
        });
    }

    formModalHandleClose(){
        this.setState({ formModalShow: false });
        // console.log("I'm setting form modal to False!")
    }




    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Provider store={store}>
                    <div className="dictionary-app">
                        <div className="ArchetypeArea">
                            <DataArchetypeList
                                value={this.state}
                                AddArchetypeSelection={this.AddArchetypeSelection}
                                selectedArchetypes={this.state.selectedArchetypes}
                            />
                        </div>

                        <div className="DataDiagramArea">
                            {/*<FormModal*/}
                                {/*value={this.state}*/}
                                {/*formModalHandleClose={this.formModalHandleClose}*/}

                            {/*/>*/}
                            {/*<FormModalButton*/}
                                {/*value={this.state}*/}
                                {/*formModalHandleShow={this.formModalHandleShow}*/}
                            {/*/>*/}
                            <DataSource value={this.state} />
                        </div>
                    </div>
                </Provider>
            );
        }
    }
}

export default DictionaryWorkspace;



