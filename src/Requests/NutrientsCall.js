const AnalyseFood = () =>{
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '6de05cdd64msh0656569e3d3d523p12f6bcjsn544b9270a356',
			'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com'
		}
	};

	return fetch('https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=1%20large%20apple', options);
}

const LabelData = (data) =>{
	let NutritionData = {
				General:[{label:'Calories', quantity:data.totalNutrients.ENERC_KCAL.quantity, unit:data.totalNutrients.ENERC_KCAL.unit},
						 {label:'Carbs', quantity:data.totalNutrients.CHOCDF.quantity, unit:data.totalNutrients.CHOCDF.unit},
						 {label:'Protein', quantity:data.totalNutrients.PROCNT.quantity, unit:data.totalNutrients.PROCNT.unit},
						 {label:'Fat', quantity:data.totalNutrients.FAT.quantity, unit:data.totalNutrients.FAT.unit},
						 {label:'Water', quantity:data.totalNutrients.WATER.quantity, unit:data.totalNutrients.WATER.unit}],
				Carbohydrates:[{label:'Fiber', quantity:data.totalNutrients.FIBTG.quantity, unit:data.totalNutrients.FIBTG.unit},
							   {label:'Sugar', quantity:data.totalNutrients.SUGAR.quantity, unit:data.totalNutrients.SUGAR.unit},
							   {label:'Net Cards', quantity:data.totalNutrients["CHOCDF.net"].quantity, unit:data.totalNutrients["CHOCDF.net"].unit}],
				Lipids:[{label:'Monounsaturated', quantity:data.totalNutrients.FAMS.quantity, unit:data.totalNutrients.FAMS.unit},
						{label:'Polyunsaturated', quantity:data.totalNutrients.FAPU.quantity, unit:data.totalNutrients.FAPU.unit},
						{label:'Saturated', quantity:data.totalNutrients.FASAT.quantity, unit:data.totalNutrients.FASAT.unit}],
				Minerals:[{label:'Calcium', quantity:data.totalNutrients.CA.quantity, unit:data.totalNutrients.CA.unit},
					      {label:'Iron', quantity:data.totalNutrients.FE.quantity, unit:data.totalNutrients.FE.unit},
					      {label:'Magnesium', quantity:data.totalNutrients.MG.quantity, unit:data.totalNutrients.MG.unit},
					      {label:'Phosphorus', quantity:data.totalNutrients.P.quantity, unit:data.totalNutrients.P.unit},
					      {label:'Potassium', quantity:data.totalNutrients.K.quantity, unit:data.totalNutrients.K.unit},
					      {label:'Sodium', quantity:data.totalNutrients.NA.quantity, unit:data.totalNutrients.NA.unit},
					      {label:'Zinc', quantity:data.totalNutrients.ZN.quantity, unit:data.totalNutrients.ZN.unit}],
				Vitamins:[{label:'B1 (Thiamin)', quantity:data.totalNutrients.THIA.quantity, unit:data.totalNutrients.THIA.unit},
						  {label:'B2 (Riboflavin)', quantity:data.totalNutrients.RIBF.quantity, unit:data.totalNutrients.RIBF.unit},
						  {label:'B3 (Niacin)', quantity:data.totalNutrients.NIA.quantity, unit:data.totalNutrients.NIA.unit},
						  {label:'Folate', quantity:data.totalNutrients.FOLFD.quantity, unit:data.totalNutrients.FOLFD.unit},
						  {label:'Folic Acid', quantity:data.totalNutrients.FOLAC.quantity, unit:data.totalNutrients.FOLAC.unit},
						  {label:'Vitamin A', quantity:data.totalNutrients.VITA_RAE.quantity, unit:data.totalNutrients.VITA_RAE.unit},
						  {label:'Vitamin B-6', quantity:data.totalNutrients.VITB6A.quantity, unit:data.totalNutrients.VITB6A.unit},
						  {label:'Vitamin B-12', quantity:data.totalNutrients.VITB12.quantity, unit:data.totalNutrients.VITB12.unit},
						  {label:'Vitamin C', quantity:data.totalNutrients.VITC.quantity, unit:data.totalNutrients.VITC.unit},
						  {label:'Vitamin D', quantity:data.totalNutrients.VITD.quantity, unit:data.totalNutrients.VITD.unit},
						  {label:'Vitamin E', quantity:data.totalNutrients.TOCPHA.quantity, unit:data.totalNutrients.TOCPHA.unit},
						  {label:'Vitamin K', quantity:data.totalNutrients.VITK1.quantity, unit:data.totalNutrients.VITK1.unit}]};
	return NutritionData;
}

module.exports = {
	AnalyseFood:AnalyseFood,
	LabelData:LabelData
}