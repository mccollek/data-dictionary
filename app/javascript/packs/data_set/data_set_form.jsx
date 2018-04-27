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
class DataSetForm extends React.Component{
     constructor(props) {
         super(props);
         this.state={backgroundColor: defaultBackground
         }
     }

    componentDidMount() {
    }


    render() {
         return (
             <Form>
                 { formApi => (

                     <form onSubmit={formApi.submitForm}>
                         <h1>Data Source Form</h1>
                         <div className="form-group">
                         <label htmlFor="name" className="mr2">Name:</label>
                         <Text field="name" id="name" />
                         </div>
                         <div className="form-group">
                         <label htmlFor="description" className="mr2">Description:</label>
                         <TextArea field="description" id="description" />
                         </div>
                         <div className="form-group">
                         <label htmlFor="production" className="mr2">Live Data?:</label>
                         <Checkbox field="production" id="production"/>
                         </div>
                     </form>
                 )}
             </Form>
         )
    }
}

export default DataSetForm;