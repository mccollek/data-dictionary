import React from 'react';
import { Form,  Text, Radio, TextArea, Checkbox } from 'react-form';
import {Modal, Button}from 'react-bootstrap';

/**
 * @render react
 * @name Form Modal
 * @description Modal component, form is child
 */
class FormModal extends React.Component{
    constructor(props, context) {
        super(props, context);

    }
    handleClose() {
        this.props.formModalHandleClose();
    }


    render() {
        return(
            <div className="FormModal" >
                <div className="static-modal">
                <Modal show={this.props.value.formModalShow} onHide={()=>this.handleClose()}>
                    <Modal.Header>
                        <Button onClick={()=>this.handleClose()}><span aria-hidden="true">&times;</span></Button>
                        <h4 className="modal-title">Modal title</h4>
                    </Modal.Header>
                    <Modal.Body>
                        Test
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>this.handleClose()}>Close</Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal>
                </div>
            </div>

        )
    }
}

export default FormModal;