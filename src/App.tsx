import React, { FunctionComponent } from "react";
import PokemonList from "./pages/pokemon-list";
import PokemonDetail from "./pages/pokemon-detail";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import PageNotFound from "./pages/page-not-found";

const App: FunctionComponent = () => {
	return (
		<BrowserRouter>
			{/* La barre de nav commun à toutes les pages */}
			<nav>
				<div className="nav-wrapper teal">
					<Link to="/" className="brand-logo center">
						Pokédex
					</Link>
				</div>
			</nav>
			{/* Le système de gestion des routes de notre app */}
			<Routes>
				<Route path="*" element={<PageNotFound />} />
				<Route path="/" element={<PokemonList />} />
				<Route path="/pokemons" element={<PokemonList />} />
				<Route path="/pokemons/:id" element={<PokemonDetail />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
