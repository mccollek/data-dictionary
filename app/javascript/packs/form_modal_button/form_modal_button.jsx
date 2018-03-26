import React from 'react';
import {Button}from 'react-bootstrap';

/**
 * @render react
 * @name Form Modal
 * @description Modal component, form is child
 */


class FormModalButton extends React.Component{
    constructor(props) {
        super(props);

    }

    handleShow() {
        this.props.formModalHandleShow();
        // this.setState({ modalShow: true });
    }

    render() {
        return(
            <div className="FormModalButton">
                <Button bsStyle="primary" bsSize="large" onClick={()=>this.handleShow()}>
                    Launch demo modal
                </Button>
            </div>

            )
    }
}

export default FormModalButton;
