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
         // this.state = {
         //     dataArchetypes: []
         // }
         // console.log("got DataArchetypeList")
         // console.log(props)
     }


 render() {
     var objProps = this.props;
     var {AddArchetypeSelection, selectedArchetypes}=this.props
     if (this.props.value.dataArchetypes.length > 0){
         return (
             <div className="DataArchtypeList">
                 {
                     this.props.value.dataArchetypes.map(function(dataArchetype){
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