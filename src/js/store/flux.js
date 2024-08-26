const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [

			],
			starship: [{

			}],
			planets: [{

			}],
			favotires: {
				people: [

				],
				starship: [{
	
				}],
				planets: [{
	
				}],
			}

		},
		actions: {

			//PARA LA PANTALLA DE INICIO//
			cargarTodosLosPersonajes: async () => {
				const response = await fetch(`https://www.swapi.tech/api/people/`);
				const data = await response.json();
				setStore({
					people: data.results
				})
			},

			cargarTodosLosVehiculos: async () => {
				const response = await fetch("https://www.swapi.tech/api/starships/");
				const data = await response.json();
				setStore({
					starships: data.results
				})
			},

			cargarTodosLosPlanetas: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets/");
				const data = await response.json();
				setStore({
					planets: data.results
				})
			},

			//PARA LA VISTAS DETALLADAS//
			cargarPersonaje: async (uid) => {
				const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
				const data = await response.json();
				return data.result

			},

			cargarVehiculo: async (uid) => {
				const response = await fetch(`https://www.swapi.tech/api/starships/${uid}`);
				const data = await response.json();
				return data.result
			},

			cargarPlaneta: async (uid) => {
				const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
				const data = await response.json();
				return data.result
			},
		}	
	}
}

export default getState;
