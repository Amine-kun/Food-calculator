import React from 'react';
import './NutrientsTables.css';

const NutrientsTables = ({width, data, tableName}) => {
	console.log(data)
	return (
			<table cellPadding="0" cellSpacing="0" style={{width:width}}>
				<tbody>
					<tr>
						<td className="table-title" colSpan="3">{tableName}</td>
					</tr>
					
					{data?.map((nutrient,i )=>(
						<tr className="data-cells" key={i}>
							<td className="table-keys cell">{nutrient.label}</td>
							<td className="value cell">{nutrient.quantity.toFixed(2)}</td>
							<td className="value cell">{nutrient.unit}</td>
						</tr>
						))}
				</tbody>
			</table>
	)
}

export default NutrientsTables;