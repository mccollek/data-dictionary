import React from 'react';
import DataArchetype from "../data_archetype/data_archetype";


/**
 * @render react
 * @name DataSet
 * @description Card for a Data Set
 * @example
 * <Dataset title="Budget Numbers" />
 */

// function ToggleArchetype(archetype_id){
//     console.log('The link function was called.');
//     function handleClick(e) {
//         e.preventDefault();
//         console.log('The link was clicked.');
//     }
// }

// function DataArchetypeItems(props) {
//     console.log("got DataArchetype Items");
//     console.log(props);
//     const DataArchetypes = props.source;
//     const DataArchetypeItems = DataArchetypes.map((data_archetype) =>
//         <DataArchetype value={data_archetype} key={data_archetype.id} addArchetypeSelection={props.AddArchetypeSelection}/>
//     );
//     return(
//         DataArchetypeItems
//     )
// }



class DataArchetypeList extends React.Component{
     constructor(props) {
         super(props);
         this.state = {
             data_archetypes: []
         }
         console.log("got DataArchetypeList")
         console.log(props)
     }

    componentDidMount() {
        fetch("/data_archetypes.json")
            .then((response) => response.json())
            .then(
                (result) => {
                    this.setState({
                        data_archetypes: result
                    });
                    console.log(result);
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
     if (this.state.data_archetypes.length > 0){
         return (
             <div className="DataArchtypeList">
                 {
                     this.state.data_archetypes.map(function(data_archetype){
                         return(
                             <DataArchetype sources={objProps} value={data_archetype} key={data_archetype.id} />
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