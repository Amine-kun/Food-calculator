const AnalyseFood = (ingredients) =>{
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '6de05cdd64msh0656569e3d3d523p12f6bcjsn544b9270a356',
			'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com'
		}
	};

	return fetch(`https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=${ingredients}`, options);
}

const LabelData = (data, ingredients) =>{

	let Calories = data.totalNutrients.ENERC_KCAL !== undefined ? {quantity: data.totalNutrients.ENERC_KCAL.quantity, unit:data.totalNutrients.ENERC_KCAL.unit} : {quantity: 0, unit: 'kcal'};
	let Carbs = data.totalNutrients.CHOCDF !== undefined ? {quantity: data.totalNutrients.CHOCDF.quantity, unit:data.totalNutrients.CHOCDF.unit} : {quantity: 0, unit: 'g'};
	let Protein = data.totalNutrients.PROCNT !== undefined ? {quantity: data.totalNutrients.PROCNT.quantity, unit:data.totalNutrients.PROCNT.unit} : {quantity: 0, unit: 'g'};
	let Fat = data.totalNutrients.FAT !== undefined ? {quantity: data.totalNutrients.FAT.quantity, unit:data.totalNutrients.FAT.unit} : {quantity: 0, unit: 'g'};
	let Water = data.totalNutrients.WATER !== undefined ? {quantity: data.totalNutrients.WATER.quantity, unit:data.totalNutrients.WATER.unit} : {quantity: 0, unit: 'g'};

	let Fiber = data.totalNutrients.FIBTG !== undefined ? {quantity: data.totalNutrients.FIBTG.quantity, unit:data.totalNutrients.FIBTG.unit} : {quantity: 0, unit: 'g'};
	let Sugar = data.totalNutrients.SUGAR !== undefined ? {quantity: data.totalNutrients.SUGAR.quantity, unit:data.totalNutrients.SUGAR.unit} : {quantity: 0, unit: 'g'};
	let nCards = data.totalNutrients["CHOCDF.net"] !== undefined ? {quantity: data.totalNutrients["CHOCDF.net"].quantity, unit:data.totalNutrients["CHOCDF.net"].unit} : {quantity: 0, unit: 'g'};

	let Monounsaturated = data.totalNutrients.FAMS !== undefined ? {quantity: data.totalNutrients.FAMS.quantity, unit:data.totalNutrients.FAMS.unit} : {quantity: 0, unit: 'g'};
	let Polyunsaturated = data.totalNutrients.FAPU !== undefined ? {quantity: data.totalNutrients.FAPU.quantity, unit:data.totalNutrients.FAPU.unit} : {quantity: 0, unit: 'g'};
	let Saturated = data.totalNutrients.FASAT !== undefined ? {quantity: data.totalNutrients.FASAT.quantity, unit:data.totalNutrients.FASAT.unit} : {quantity: 0, unit: 'g'};

	let Calcium = data.totalNutrients.CA !== undefined ? {quantity: data.totalNutrients.CA.quantity, unit:data.totalNutrients.CA.unit} : {quantity: 0, unit: 'mg'};
	let Iron = data.totalNutrients.FE !== undefined ? {quantity: data.totalNutrients.FE.quantity, unit:data.totalNutrients.FE.unit} : {quantity: 0, unit: 'mg'};
	let Magnesium = data.totalNutrients.MG !== undefined ? {quantity: data.totalNutrients.MG.quantity, unit:data.totalNutrients.MG.unit} : {quantity: 0, unit: 'mg'};
	let Phosphorus = data.totalNutrients.P !== undefined ? {quantity: data.totalNutrients.P.quantity, unit:data.totalNutrients.P.unit} : {quantity: 0, unit: 'mg'};
	let Potassium = data.totalNutrients.K !== undefined ? {quantity: data.totalNutrients.K.quantity, unit:data.totalNutrients.K.unit} : {quantity: 0, unit: 'mg'};
	let Sodium = data.totalNutrients.NA !== undefined ? {quantity: data.totalNutrients.NA.quantity, unit:data.totalNutrients.NA.unit} : {quantity: 0, unit: 'mg'};
	let Zinc = data.totalNutrients.ZN !== undefined ? {quantity: data.totalNutrients.ZN.quantity, unit:data.totalNutrients.ZN.unit} : {quantity: 0, unit: 'mg'};

	let B1 = data.totalNutrients.THIA !== undefined ? {quantity: data.totalNutrients.THIA.quantity, unit:data.totalNutrients.THIA.unit} : {quantity: 0, unit: 'mg'};
	let B2 = data.totalNutrients.RIBF !== undefined ? {quantity: data.totalNutrients.RIBF.quantity, unit:data.totalNutrients.RIBF.unit} : {quantity: 0, unit: 'mg'};
	let B3 = data.totalNutrients.NIA !== undefined ? {quantity: data.totalNutrients.NIA.quantity, unit:data.totalNutrients.NIA.unit} : {quantity: 0, unit: 'mg'};
	let Folate = data.totalNutrients.FOLFD !== undefined ? {quantity: data.totalNutrients.FOLFD.quantity, unit:data.totalNutrients.FOLFD.unit} : {quantity: 0, unit: 'µg'};
	let fAcid = data.totalNutrients.FOLAC !== undefined ? {quantity: data.totalNutrients.FOLAC.quantity, unit:data.totalNutrients.FOLAC.unit} : {quantity: 0, unit: 'µg'};
	let VA = data.totalNutrients.VITA_RAE !== undefined ? {quantity: data.totalNutrients.VITA_RAE.quantity, unit:data.totalNutrients.VITA_RAE.unit} : {quantity: 0, unit: 'µg'};
	let VB = data.totalNutrients.VITB6A !== undefined ? {quantity: data.totalNutrients.VITB6A.quantity, unit:data.totalNutrients.VITB6A.unit} : {quantity: 0, unit: 'mg'};
	let VB12 = data.totalNutrients.VITB12 !== undefined ? {quantity: data.totalNutrients.VITB12.quantity, unit:data.totalNutrients.VITB12.unit} : {quantity: 0, unit: 'µg'};
	let VC = data.totalNutrients.VITC !== undefined ? {quantity: data.totalNutrients.VITC.quantity, unit:data.totalNutrients.VITC.unit} : {quantity: 0, unit: 'mg'};
	let VD = data.totalNutrients.VITD !== undefined ? {quantity: data.totalNutrients.VITD.quantity, unit:data.totalNutrients.VITD.unit} : {quantity: 0, unit: 'µg'};
	let VE = data.totalNutrients.TOCPHA !== undefined ? {quantity: data.totalNutrients.TOCPHA.quantity, unit:data.totalNutrients.TOCPHA.unit} : {quantity: 0, unit: 'mg'};
	let VK = data.totalNutrients.VITK1 !== undefined ? {quantity: data.totalNutrients.VITK1.quantity, unit:data.totalNutrients.VITK1.unit} : {quantity: 0, unit: 'µg'};



	let NutritionData = {
				ingr: ingredients,
				calories:data.totalNutrients.ENERC_KCAL.quantity,
				General:[{label:'Calories', ...Calories},
						 {label:'Carbs', ...Carbs},
						 {label:'Protein', ...Protein},
						 {label:'Fat', ...Fat},
						 {label:'Water', ...Water}],
				Carbohydrates:[{label:'Fiber', ...Fiber},
							   {label:'Sugar', ...Sugar},
							   {label:'Net Cards', ...nCards}],
				Lipids:[{label:'Monounsaturated', ...Monounsaturated},
						{label:'Polyunsaturated', ...Polyunsaturated},
						{label:'Saturated', ...Saturated}],
				Minerals:[{label:'Calcium', ...Calcium},
					      {label:'Iron', ...Iron},
					      {label:'Magnesium', ...Magnesium},
					      {label:'Phosphorus', ...Phosphorus},
					      {label:'Potassium', ...Potassium},
					      {label:'Sodium', ...Sodium},
					      {label:'Zinc', ...Zinc}],
				Vitamins:[{label:'B1 (Thiamin)', ...B1},
						  {label:'B2 (Riboflavin)', ...B2},
						  {label:'B3 (Niacin)', ...B3},
						  {label:'Folate', ...Folate},
						  {label:'Folic Acid', ...fAcid},
						  {label:'Vitamin A', ...VA},
						  {label:'Vitamin B-6', ...VB},
						  {label:'Vitamin B-12', ...VB12},
						  {label:'Vitamin C', ...VC},
						  {label:'Vitamin D', ...VD},
						  {label:'Vitamin E', ...VE},
						  {label:'Vitamin K', ...VK}]
			};


	return NutritionData;
}

module.exports = {
	AnalyseFood:AnalyseFood,
	LabelData:LabelData
}






// let NutritionData = {
// 				ingr: ingredients,
// 				calories:data.totalNutrients.ENERC_KCAL.quantity,
// 				General:[{label:'Calories', quantity:data.totalNutrients.ENERC_KCAL.quantity, unit:data.totalNutrients.ENERC_KCAL.unit},
// 						 {label:'Carbs', quantity:data.totalNutrients.CHOCDF.quantity, unit:data.totalNutrients.CHOCDF.unit},
// 						 {label:'Protein', quantity:data.totalNutrients.PROCNT.quantity, unit:data.totalNutrients.PROCNT.unit},
// 						 {label:'Fat', quantity:data.totalNutrients.FAT.quantity, unit:data.totalNutrients.FAT.unit},
// 						 {label:'Water', quantity:data.totalNutrients.WATER.quantity, unit:data.totalNutrients.WATER.unit}],
// 				Carbohydrates:[{label:'Fiber', quantity:data.totalNutrients.FIBTG.quantity, unit:data.totalNutrients.FIBTG.unit},
// 							   {label:'Sugar', quantity:data.totalNutrients.SUGAR.quantity, unit:data.totalNutrients.SUGAR.unit},
// 							   {label:'Net Cards', quantity:data.totalNutrients["CHOCDF.net"].quantity, unit:data.totalNutrients["CHOCDF.net"].unit}],
// 				Lipids:[{label:'Monounsaturated', quantity:data.totalNutrients.FAMS.quantity, unit:data.totalNutrients.FAMS.unit},
// 						{label:'Polyunsaturated', quantity:data.totalNutrients.FAPU.quantity, unit:data.totalNutrients.FAPU.unit},
// 						{label:'Saturated', quantity:data.totalNutrients.FASAT.quantity, unit:data.totalNutrients.FASAT.unit}],
// 				Minerals:[{label:'Calcium', quantity:data.totalNutrients.CA.quantity, unit:data.totalNutrients.CA.unit},
// 					      {label:'Iron', quantity:data.totalNutrients.FE.quantity, unit:data.totalNutrients.FE.unit},
// 					      {label:'Magnesium', quantity:data.totalNutrients.MG.quantity, unit:data.totalNutrients.MG.unit},
// 					      {label:'Phosphorus', quantity:data.totalNutrients.P.quantity, unit:data.totalNutrients.P.unit},
// 					      {label:'Potassium', quantity:data.totalNutrients.K.quantity, unit:data.totalNutrients.K.unit},
// 					      {label:'Sodium', quantity:data.totalNutrients.NA.quantity, unit:data.totalNutrients.NA.unit},
// 					      {label:'Zinc', quantity:data.totalNutrients.ZN.quantity, unit:data.totalNutrients.ZN.unit}],
// 				Vitamins:[{label:'B1 (Thiamin)', quantity:data.totalNutrients.THIA.quantity, unit:data.totalNutrients.THIA.unit},
// 						  {label:'B2 (Riboflavin)', quantity:data.totalNutrients.RIBF.quantity, unit:data.totalNutrients.RIBF.unit},
// 						  {label:'B3 (Niacin)', quantity:data.totalNutrients.NIA.quantity, unit:data.totalNutrients.NIA.unit},
// 						  {label:'Folate', quantity:data.totalNutrients.FOLFD.quantity, unit:data.totalNutrients.FOLFD.unit},
// 						  {label:'Folic Acid', quantity:data.totalNutrients.FOLAC.quantity, unit:data.totalNutrients.FOLAC.unit},
// 						  {label:'Vitamin A', quantity:data.totalNutrients.VITA_RAE.quantity, unit:data.totalNutrients.VITA_RAE.unit},
// 						  {label:'Vitamin B-6', quantity:data.totalNutrients.VITB6A.quantity, unit:data.totalNutrients.VITB6A.unit},
// 						  {label:'Vitamin B-12', quantity:data.totalNutrients.VITB12.quantity, unit:data.totalNutrients.VITB12.unit},
// 						  {label:'Vitamin C', quantity:data.totalNutrients.VITC.quantity, unit:data.totalNutrients.VITC.unit},
// 						  {label:'Vitamin D', quantity:data.totalNutrients.VITD.quantity, unit:data.totalNutrients.VITD.unit},
// 						  {label:'Vitamin E', quantity:data.totalNutrients.TOCPHA.quantity, unit:data.totalNutrients.TOCPHA.unit},
// 						  {label:'Vitamin K', quantity:data.totalNutrients.VITK1.quantity, unit:data.totalNutrients.VITK1.unit}]};
