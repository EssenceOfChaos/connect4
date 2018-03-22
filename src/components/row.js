// ##### ROW ##### //
import React from 'react';

function Row(props) {
	var style = {
		display: 'flex',
	};
	var cells = [];
	for (let i = 0; i < 7; i++) {
		cells.push(<Cell key={i} cell={props.cells[i]} row={props.row} col={i} handleClick={props.handleClick} />);
	}
	return <div style={style}>{cells}</div>;
}
