import React from 'react'
import ReactDataSheet from 'react-datasheet';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css';

function CreateExcelTabs({ grid }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
      <ReactDataSheet
        data={grid}
        valueRenderer={(cell, i, j) => cell.value}
        dataRenderer={(cell, i, j) => cell.expr}
      //   onCellsChanged={onCellsChanged}
      />
    </div>
  )
}

export default CreateExcelTabs
