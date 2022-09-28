import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Pokemon, Pokemons } from "../../interface";
import api from "../axiosConfig";
import ProductCollection from "./ProductCollection";
import "./Products.scss";

const Products: React.FC = () => {
  //const pokemons = useSelector((state) => state.products)

  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const [loadMore, setLoadMore] = useState<boolean>(false);

  const [searchInput, setSearchInput] = useState<string>("");
  const [filter, setFilter] = useState<Pokemon>({
    id: 0,
    name: "",
    types: [],
    base_experience: 0,
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPokemon = async () => {
      setLoading(true);
      await api.get("/pokemon?limit=20&offset=0").then((res) => {
        setNextUrl(res.data.next);
        setPokemons([...pokemons, ...res.data.results]);
      });
      setLoading(false);
    };

    getPokemon();
  }, []);

  const nextPage = async () => {
    //console.log(nextUrl)
    setLoadMore(true);
    await api.get(nextUrl).then((res) => {
      setNextUrl(res.data.next);
      setPokemons((p) => [...p, ...res.data.results]);
    });
    setLoadMore(false);
  };

  const Loading = () => {
    return (
      <div className="row">
        <div className="col-3">
          <Skeleton height={350} />
        </div>
        <div className="col-3">
          <Skeleton height={350} />
        </div>
        <div className="col-3">
          <Skeleton height={350} />
        </div>
        <div className="col-3">
          <Skeleton height={350} />
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (searchInput.length === 0) {
      setFilter({ id: 0, name: "", types: [], base_experience: 0 });
      setError(false);
    }
  }, [searchInput]);

  const ProductSearch = () => {
    // const handleKeyPress = (e: KeyboardEvent) => {
    //   if ((e.target as HTMLInputElement).value === "Enter") {
    //     handleSearch(searchInput);
    //   }
    // };

    const handleSearch = async (input: string) => {
      let searchInput = input.trim().toLowerCase();
      if (searchInput.length > 0) {
        await api
          .get(`/pokemon/${searchInput}`)
          .then((res) => {
            setFilter(res.data);
            setError(false);
          })
          .catch(() => {
            setError(true);
          });
      }
    };

    return (
      <>
        <div className="products__search">
          <input
            className="products__search__input"
            type="text"
            name="search"
            value={searchInput}
            defaultValue=""
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(searchInput);
              }
            }}
            placeholder="Pokemon name (ex: ditto)"
          />
          <button
            className="products__search__btn"
            onClick={() => {
              handleSearch(searchInput);
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          {error && (
            <h3 className="mg-b4">
              Sorry! We don't have the pokemon that you were looking for ╥﹏╥
            </h3>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="products">
      <div className="container">
        <h1 className="products__title text-center">Choose a pokemon</h1>
        {ProductSearch()}

        <div className="grid">
          {loading ? (
            <Loading />
          ) : (
            <ProductCollection filter={filter} pokemons={pokemons} />
          )}
        </div>
        <div className="load__more">
          <button onClick={nextPage}>
            {loadMore ? "Loading..." : "Load more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
