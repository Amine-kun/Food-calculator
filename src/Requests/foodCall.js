import axios from 'axios'

const randomCall = (ingredients) =>{
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '6de05cdd64msh0656569e3d3d523p12f6bcjsn544b9270a356',
			'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
		}
	};

	return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=30`, options);
}

const advancedCall = async (data) =>{

	const options = {
		  method: 'GET',
		  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
		  params: {
		    query: data.query,
		    cuisine: data.cuisine,
		    excludeCuisine: data.excludeCuisine,
		    diet: data.diet,
		    intolerances: data.intolerances,
		    equipment: 'pan',
		    includeIngredients: 'tomato,cheese',
		    excludeIngredients: data.excludeIngredients,
		    type: data.query,
		    instructionsRequired: 'true',
		    fillIngredients: 'false',
		    addRecipeInformation: 'false',
		    titleMatch: 'Crock Pot',
		    maxReadyTime: '20',
		    ignorePantry: 'true',
		    sort: 'calories',
		    sortDirection: 'asc',
		    minCarbs: data.minCarbs,
		    maxCarbs: data.maxCarbs,
		    minProtein: data.minProtein,
		    maxProtein: data.maxProtein,
		    minCalories: data.minCalories,
		    maxCalories: data.maxCalories,
		    minFat: '10',
		    maxFat: '100',
		    minAlcohol: '0',
		    maxAlcohol: '100',
		    minCaffeine: '0',
		    maxCaffeine: '100',
		    minCopper: '0',
		    maxCopper: '100',
		    minCalcium: '0',
		    maxCalcium: '100',
		    minCholine: '0',
		    maxCholine: '100',
		    minCholesterol: '0',
		    maxCholesterol: '100',
		    minFluoride: '0',
		    maxFluoride: '100',
		    minSaturatedFat: '0',
		    maxSaturatedFat: '100',
		    minVitaminA: '0',
		    maxVitaminA: '100',
		    minVitaminC: '0',
		    maxVitaminC: '100',
		    minVitaminD: '0',
		    maxVitaminD: '100',
		    minVitaminE: '0',
		    maxVitaminE: '100',
		    minVitaminK: '0',
		    maxVitaminK: '100',
		    minVitaminB1: '0',
		    maxVitaminB1: '100',
		    minVitaminB2: '0',
		    maxVitaminB2: '100',
		    minVitaminB5: '0',
		    maxVitaminB5: '100',
		    minVitaminB3: '0',
		    maxVitaminB3: '100',
		    minVitaminB6: '0',
		    maxVitaminB6: '100',
		    minVitaminB12: '0',
		    maxVitaminB12: '100',
		    minFiber: '0',
		    maxFiber: '100',
		    minFolate: '0',
		    maxFolate: '100',
		    minFolicAcid: '0',
		    maxFolicAcid: '100',
		    minIodine: '0',
		    maxIodine: '100',
		    minIron: '0',
		    maxIron: '100',
		    minMagnesium: '0',
		    maxMagnesium: '100',
		    minManganese: '0',
		    maxManganese: '100',
		    minPhosphorus: '0',
		    maxPhosphorus: '100',
		    minPotassium: '0',
		    maxPotassium: '100',
		    minSelenium: '0',
		    maxSelenium: '100',
		    minSodium: '0',
		    maxSodium: '100',
		    minSugar: '0',
		    maxSugar: '100',
		    minZinc: '0',
		    maxZinc: '100',
		    offset: '0',
		    number: '30',
		    limitLicense: 'false',
		    ranking: '2'
		  },
		  headers: {
		    'X-RapidAPI-Key': '6de05cdd64msh0656569e3d3d523p12f6bcjsn544b9270a356',
		    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
		  }
		};

	try {
		const response = await axios.request(options);
		return response.data
	} catch (error) {
		console.error(error);
	}
}

const calls = {
	randomCall,
	advancedCall,
}

export default calls;
