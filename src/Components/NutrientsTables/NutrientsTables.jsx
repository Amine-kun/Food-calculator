import React from 'react';
import './NutrientsTables.css';

const NutrientsTables = ({width}) => {
	return (
			<table cellPadding="0" cellSpacing="0" style={{width:width}}>
				<tbody>
					<tr>
						<td className="table-title" colSpan="3">General</td>
					</tr>
					<tr className="data-cells">
						<td className="table-keys cell">General</td>
						<td className="value cell" style={{fontWeight:'bold'}}>5.2</td>
						<td className="value cell">mg</td>
					</tr>
					<tr className="data-cells">
						<td className="table-keys cell">General</td>
						<td className="cell" style={{fontWeight:'bold'}}>5.2</td>
						<td className="cell">mg</td>
					</tr>
					<tr className="data-cells">
						<td className="table-keys cell">General</td>
						<td className="cell" style={{fontWeight:'bold'}}>5.2</td>
						<td className="cell">mg</td>
					</tr>
					<tr className="data-cells">
						<td className="table-keys cell">General</td>
						<td className="cell" style={{fontWeight:'bold'}}>5.2</td>
						<td className="cell">mg</td>
					</tr>
				
				</tbody>
			</table>
	)
}

export default NutrientsTables;