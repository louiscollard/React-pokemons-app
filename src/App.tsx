import React, { FunctionComponent } from "react";
import PokemonList from "./pages/pokemon-list";
import PokemonDetail from "./pages/pokemon-detail";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import PageNotFound from "./pages/page-not-found";
import PokemonEdit from "./pages/pokemon-edit";
import PokemonAdd from "./pages/pokemon-add";
import Login from "./pages/login";
import PrivateRoute from "./PrivateRoute";

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
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<PrivateRoute />}>
					<Route path="/" element={<PokemonList />} />
				</Route>
				<Route path="/" element={<PrivateRoute />}>
					<Route path="/pokemons/add" element={<PokemonAdd />} />
				</Route>
				<Route path="/" element={<PrivateRoute />}>
					<Route path="/pokemons/edit/:id" element={<PokemonEdit />} />
				</Route>
				<Route path="/" element={<PrivateRoute />}>
					<Route path="/pokemons" element={<PokemonList />} />
				</Route>
				<Route path="/" element={<PrivateRoute />}>
					<Route path="/pokemons/:id" element={<PokemonDetail />} />
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
