import React, { FunctionComponent, useState, useEffect } from "react";
import PokemonForm from "../components/pokemon-form";
import Pokemon from "../models/pokemon";
import { useParams } from "react-router";
import PokemonService from "../services/pokemon-service";
import Loader from "../components/loader";

const PokemonEdit: FunctionComponent = () => {
	const { id } = useParams();
	const [pokemon, setPokemon] = useState<Pokemon | null>(null);

	useEffect(() => {
		PokemonService.getPokemon(+id).then((pokemon) => setPokemon(pokemon));
	}, [id]);

	return (
		<div>
			{pokemon ? (
				<div className="row">
					<h2 className="header center">Éditer {pokemon.name}</h2>
					<PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
				</div>
			) : (
				<h4 className="center">
					<Loader />
				</h4>
			)}
		</div>
	);
};

export default PokemonEdit;
