const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [

			],
			starship: [{

			}],
			planets: [{

			}],
			favorites: {
				
				people: [

				],
				starship: [{
	
				}],
				planets: [{
	
				}],
			},
			favoritos:[]

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
		
			agregarFavoritos: (item) => {
			const store = getStore()
			if (!store.favoritos.includes(item)) {
				setStore({favoritos:[...store.favoritos, item]})
			}
			},

			eliminarFavorito: (item) => {
				const store = getStore()
				const filtrado = store.favoritos.filter((favorito) => {
					return (favorito != item)
				})
				setStore({favoritos:filtrado})
			}
		
		
		}	
	}
}

export default getState;
