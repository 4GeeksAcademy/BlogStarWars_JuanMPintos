const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:[

			],
			starship: [{

			}],
			planets:[{

			}]
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
				const response = await fetch ("https://www.swapi.tech/api/starships/");
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
			cargarPersonajes: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
				const data = await response.json();
				setStore({
					people: data.people
				})
			},

			cargarVehiculos: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/starship/${id}`);
				const data = await response.json();
				setStore({
						starship: data.starship
				})
			},

			cargarPlanetas: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
				const data = await response.json();
				setStore({
						planets: data.planets
				})
			},
			

		}//FIN DEL ACTION
	};//FIN DEL RETURN
};//FIN DEL GETSTATE

export default getState;
