import React from 'react';
const defaultBackground = '#666'

class DictionarySearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {idsToHighlight: []};
    }

    componentDidMount() {
    }

    handleChange(event){
        console.log('handle change fired: '+ event.target.value);
        fetch("/search.json?q=" + event.target.value)
            .then((response) => response.json())
            .then(
                (result) => {
                    console.log(result);
                    this.props.setSearchSelection(result);
                    // this.setState({
                    //     isLoaded: true,
                    //     idsToHighLight: [
                    //         result
                    //     ]
                    // });
                })
            .catch((error) => {
                console.error(error);
                // this.setState({
                //     isLoaded: true,
                //     error: error
                // });
            });
    }

    render() {
        var {SetSearchSelection} = this.props;
        return(
            <div className='DictionarySearch'>
                <label>Search:</label> <input type="text" onChange={this.handleChange.bind(this)}/>
            </div>
        )
    }

}
export default DictionarySearch;