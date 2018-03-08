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
    // console.log(props)
    const DataArchetypes = props.source.value.data_archetypes;
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
     // console.log("got DataArchetypes")
     // console.log(props)
 }

 render() {
     if (this.props.value.data_archetypes.length > 0){
         return (
             <div className="DataArchtypeList">
                 <DataArchetypeList  source={this.props}/>
             </div>
         )

     }else{
         return null
     }
 }
}

export default DataArchetype;