import React from 'react';
import DataArchetype from "../data_archetype/data_archetype";


/**
 * @render react
 * @name DataSet
 * @description Card for a Data Set
 * @example
 * <Dataset title="Budget Numbers" />
 */


//TODO: make stateless component
class DataArchetypeList extends React.Component{
     constructor(props) {
         super(props);
         this.state = {
             dataArchetypes: []
         }
         // console.log("got DataArchetypeList")
         // console.log(props)
     }

    // TODO: move up to data dictionary
    componentDidMount() {
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
    }

 render() {
     var objProps = this.props;
     var {AddArchetypeSelection, selectedArchetypes}=this.props
     if (this.state.dataArchetypes.length > 0){
         return (
             <div className="DataArchtypeList">
                 {
                     this.state.dataArchetypes.map(function(dataArchetype){
                         return(
                             <DataArchetype
                                 sources={objProps}
                                 id={dataArchetype.id}
                                 AddArchetypeSelection={AddArchetypeSelection}
                                 value={dataArchetype}
                                 key={dataArchetype.id}
                                 // isSelected={selectedArchetypes.indexOf(dataArchetype.id)>-1}
                             />
                         )
                     })
                 }
             </div>
         )

     }else{
         return null
     }
 }
}

export default DataArchetypeList;