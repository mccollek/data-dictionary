import React from 'react';


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
//



class DataArchetype extends React.Component{
     constructor(props) {
         super(props);
         // console.log("got DataArchetypes");
         // console.log(props.value);
         this.ArchetypeData= props.value;
         this.state = {ArchetypeSelected: false, id: props.value.id};
         this.handleClick = this.handleClick.bind(this);
     }

    componentDidMount() {
    }

    handleClick(e){
        e.preventDefault();
        // console.log(this.state.ArchetypeSelected);
        console.log("The link " + this.state.id +" was clicked.  New Array is: " +  _.uniq(this.props.sources.value.selected_archetypes.push(this.state.id)));
        this.setState(preState =>({
            ArchetypeSelected: !preState.ArchetypeSelected,
            SelectedArchetypes: _.uniq(this.props.sources.value.selected_archetypes.push(this.state.id))
        }));
        console.log(this.props.sources.value.selected_archetypes);
    }

    // componentDidUpdate() {
    //     console.log("updated selected state: " + this.state.ArchetypeSelected +" for id: " + this.state.id);
    //     console.log(this.props);
    //     if(this.state.ArchetypeSelected){
    //         this.setState(preState=>({
    //
    //         }))
    //     }
    // }

    render() {
         return (
             <div className="DataArchetype" key={this.ArchetypeData.id}  onClick={this.handleClick}>
                 {this.ArchetypeData.name}
             </div>
         )
    }
}

export default DataArchetype;