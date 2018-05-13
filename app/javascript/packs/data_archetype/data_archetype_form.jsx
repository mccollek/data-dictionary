import React from 'react';
import { Form, Text, Radio, TextArea, Checkbox } from 'react-form';
import { connect } from 'react-redux';
const defaultBackground = '#666'


/**
 * @render react
 * @name DataSet
 * @description Card for a Data Set
 * @example
 * <Dataset title="Budget Numbers" />
 */
class DataArchetypeForm extends React.Component{
     constructor(props) {
         super(props);
         this.state={backgroundColor: defaultBackground}
     }

    componentDidMount() {
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Archetype handleSubmit Clicked!");
        const title = this.getTitle.value;
        const message =  this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message
        }

    }

    render() {
         return (
             <Form>
                 { formApi => (
                     <form>
                         <h1>Data Archetype Form 2</h1>

                         <Text field="hello" id="hello" />
                         <button type="submit">Submit</button>
                     </form>
                 )}
             </Form>
         )
    }
}

export default DataArchetypeForm;