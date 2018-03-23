import React from 'react';
import { Form, Text, Radio, TextArea, Checkbox } from 'react-form';


/**
 * @render react
 * @name Form Modal
 * @description Modal component, form is child
 */


class FormModal extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div className="FormModal">
                <div className="static-modal" tabindex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">Modal title</h4>
                            </div>
                            <div className="modal-body">
                                Test
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default FormModal;