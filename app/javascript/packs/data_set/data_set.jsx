import React from 'react';
import style from './data_set.scss';


/**
 * @render react
 * @name DataSet
 * @description Card for a Data Set
 * @example
 * <Dataset title="Budget Numbers" />
 */
class DataSet extends React.Component{
 constructor(props) {
     super(props);
     this.state = {
         title: 'No Title'
     };
 }

 render() {
     return (
         <div className={style.DataSet}>
             This is the DataSet
             <div className={style.DataSetTitle}>
                 {this.props.value.title}
             </div>
         </div>
     )
 }
}
//
// DataSet.propTypes = {
//     /**
//      * @property {boolean} primary determines is a primary button (emphasized)
//      */
//     // primary: PropTypes.bool,
//
//     /**
//      * @property {string} text label to be displayed within the button
//      */
//     text: PropTypes.string
// }
//
// DataSet.defaultProps = {
//     title: 'DataSet Title!'
// }
//
// // document.addEventListener('DOMContentLoaded', () => {
// //     ReactDOM.render(
// //         <DataSet title="DataSetTest" />,
// //         document.body.appendChild(document.createElement('div')),
// //     )
// // })
//
//
//
//
export default DataSet;