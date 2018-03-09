import React from 'react';


/**
 * @render react
 * @name DataSet
 * @description Card for a Data Set
 * @example
 * <Dataset title="Budget Numbers" />
 */

function DataArchetypeList(props) {
    // console.log("got DataArchetypes")
    console.log(props)
    const DataArchetypes = props.source.data_archetypes;
    const DataArchetypeItems = DataArchetypes.map((data_archetype) =>
        <div className="DataArchetype" key={data_archetype.id}>
                {data_archetype.name}
        </div>
    );
    return(
        DataArchetypeItems
    )
}


class DataArchetype extends React.Component{
     constructor(props) {
         super(props);
         this.state = {
             data_archetypes: []
         }
         // console.log("got DataArchetypes")
         // console.log(props)
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
     if (this.state.data_archetypes.length > 0){
         return (
             <div className="DataArchtypeList">
                 <DataArchetypeList  source={this.state}/>
             </div>
         )

     }else{
         return null
     }
 }
}

export default DataArchetype;