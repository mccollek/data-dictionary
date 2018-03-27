import React from 'react';
import { Form, Text, Radio, TextArea, Checkbox } from 'react-form';
const defaultBackground = '#666'


/**
 * @render react
 * @name DataSet
 * @description Card for a Data Set
 * @example
 * <Dataset title="Budget Numbers" />
 */
class DataSourceForm extends React.Component{
     constructor(props) {
         super(props);
         this.state={backgroundColor: defaultBackground}
     }

    componentDidMount() {
    }

    clickMe(id){
        var newColor = (this.state.backgroundColor==defaultBackground
            ? this.props.value.color_swatch_css
            : defaultBackground);
        this.setState({backgroundColor: newColor});
        this.props.AddArchetypeSelection(id);
    }


    render() {
         return (
             <Form>
                 <h1>Data Source Form</h1>
                 { formApi => (
                     <form onSubmit={formApi.submitForm}>
                         <Text field="hello" id="hello" />
                         <button type="submit">Submit</button>
                     </form>
                 )}
             </Form>
         )
    }
}

export default DataSourceForm;