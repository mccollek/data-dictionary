import React from 'react';
import {Button}from 'react-bootstrap';

/**
 * @render react
 * @name Form Modal Button
 * @description Button to Lauch Modal component, form is child
 */


class FormModalButton extends React.Component{
    constructor(props) {
        super(props);

    }

    handleShow() {
        this.props.formModalHandleShow("DataSourceForm");
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
