import { Component } from 'react';
// import PokemonDataView from './PokemonDataView';
// import PokemonErrorView from './PokemonErrorView';
// import PokemonPendingView from './PokemonPendingView';
// import pokemonAPI from '../services/pokemon-api';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    if (prevName !== nextName) {
      console.log('Змінилось імя покемона');
      this.setState({ loading: true });
      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(resp => {
          if (resp.ok) return resp.json();

          return Promise.reject(new Error(`${nextName} not finde`));
        })
        .then(pokemon =>
          this.setState({
            pokemon,
          }),
        )
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    const { pokemon, loading, error } = this.state;
    const { pokemonName } = this.props;
    return (
      <div>
        {error && <h1>{error.message}</h1>}
        {loading && <div>Download</div>}
        {!pokemonName && <div>enter pokemon name</div>}
        {pokemon && (
          <div>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
              width="240"
            />
          </div>
        )}
      </div>
    );
  }
}
