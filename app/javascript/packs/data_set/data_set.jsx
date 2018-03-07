import React from 'react';
import style from './data_set.scss';


/**
 * @render react
 * @name DataSet
 * @description Card for a Data Set
 * @example
 * <Dataset title="Budget Numbers" />
 */

function DataSetClass(production){
    if(production == true){
        return("DataSet ProductionDataSet")
    }else{
        return("DataSet")
    }

}

function DataSetList(props) {
    const DataSets = props.source.value;
    const DataSetItems = DataSets.map((data_set) =>
        <div className={DataSetClass(data_set.production)} key={data_set.id}>
            <div className="DataSetTitle">
                {data_set.name}
            </div>
            <div className="DataSetDetails">
                <ul>
                    <li>
                        {data_set.data_starts} - {data_set.data_ends}
                    </li>
                </ul>
            </div>
        </div>
    );
    return(
        DataSetItems
    )
}


class DataSet extends React.Component{
 constructor(props) {
     super(props);
 }

 render() {
     // console.log(this.props.value);

     if (this.props.value.length > 0){
         return (
             <DataSetList source={this.props}/>
         )

     }else{
         return null
     }
 }
}

export default DataSet;