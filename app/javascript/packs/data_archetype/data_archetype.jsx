import React from 'react';
const defaultBackground = '#666'


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
         this.state={backgroundColor: defaultBackground}
         // console.log("got DataArchetypes");
         // console.log(props);
         // this.ArchetypeData= props.value;
         // this.state = {ArchetypeSelected: false, id: props.value.id};
         // this.handleClick = this.handleClick.bind(this);
         // this.AddArchetypeSelection = this.AddArchetypeSelection.bind(this);
     }

    componentDidMount() {
    }

    clickMe(id){
        var newColor = (this.state.backgroundColor==defaultBackground
            ? this.props.value.color_swatch_css
            : '#5f7fab');
        this.setState({backgroundColor: newColor});
        this.props.AddArchetypeSelection(id);
    }


    render() {
         return (
             <div
                 className={`DataArchetype`}
                 // className={`DataArchetype ${this.props.isSelected ? 'selected' : ''}`}
                 key={this.props.id}
                 onClick={()=>this.clickMe(this.props.id)}
                 style={{backgroundColor: this.state.backgroundColor}}

             >
                 {this.props.value.name}
             </div>
         )
    }
}

export default DataArchetype;