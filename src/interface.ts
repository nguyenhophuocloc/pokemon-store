export interface Pokemons {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  base_experience: number;
}

export interface PokemonDetail extends Pokemon {
  //id: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
  stats: {
    base_stat: number;
  }[];
}

export interface Ability {
  flavor_text: string;
  language: {
    name: string;
  };
}

export interface CartState {
  product: PokemonDetail;
  quantity: number;
}
