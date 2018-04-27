import React from 'react';
import { connect } from 'react-redux'
import DataArchetype from "../data_archetype/data_archetype";


/**
 * @render react
 * @name DataSet
 * @description Card for a Data Set
 * @example
 * <Dataset title="Budget Numbers" />
 */

function mapStateToProps(state){
    return {dataArchetypes: state.dataArchetypes.dataArchetypes}
}

class DataArchetypeList extends React.Component{
     constructor(props) {
         super(props);
     }


 render() {
     var objProps = this.props;
     var {AddArchetypeSelection, selectedArchetypes}=this.props
     if (this.props.value.dataArchetypes.length > 0){
         return (
             <div className="DataArchetypeArea">
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
                                 />
                             )
                         })
                     }
                 </div>
             </div>
         )
     }else{
         return null
     }
 }
}

export default connect(mapStateToProps)(DataArchetypeList);