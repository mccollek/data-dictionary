import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import ReactDOM from "react-dom";


/**
 * @render react
 * @name DataSet
 * @description Card for a Data Set
 * @example
 * <Dataset title="Budget Numbers" />
 */
const DataSet = ({ title, }) => (
    <div className="DataSet">
        <div className="DataSetTitle">
            {title}
        </div>


    </div>
);

DataSet.propTypes = {
    /**
     * @property {boolean} primary determines is a primary button (emphasized)
     */
    // primary: PropTypes.bool,

    /**
     * @property {string} text label to be displayed within the button
     */
    text: PropTypes.string
}

DataSet.defaultProps = {
    title: 'DataSet Title!'
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <DataSet title="DataSetTest" />,
        document.body.appendChild(document.createElement('div')),
    )
})


export default DataSet;