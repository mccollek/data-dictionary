import React from 'react';


/**
 * @render react
 * @name DataSet
 * @description Card for a Data Set
 * @example
 * <Dataset title="Budget Numbers" />
 */
class DataArchetype extends React.Component{
     constructor(props) {
         super(props);
         // console.log("got DataArchetypes");
         // console.log(props);
         // this.ArchetypeData= props.value;
         this.state = {ArchetypeSelected: false, id: props.value.id};
         // this.handleClick = this.handleClick.bind(this);
         // this.AddArchetypeSelection = this.AddArchetypeSelection.bind(this);
     }

    componentDidMount() {
    }

    // handleClick(e){
    //     e.preventDefault();
    //     console.log("The link " + this.state.id +" was clicked.  New Array is: " +  _.uniq(this.props.sources.value.selected_archetypes.push(this.state.id)));
    //     this.setState(preState =>({
    //         ArchetypeSelected: !preState.ArchetypeSelected,
    //         SelectedArchetypes: _.uniq(this.props.sources.value.selected_archetypes.push(this.state.id))
    //     }));
    //     // AddArchetypeSelection(this.state.id);
    //     // console.log(this.props.sources.value.selected_archetypes);
    //
    // }

    render() {
         return (
             <div className="DataArchetype" key={this.state.id}  onClick={(e)=>this.props.AddArchetypeSelection(e, this.state.id)}>
                 {this.props.value.name}
             </div>
         )
    }
}

export default DataArchetype;