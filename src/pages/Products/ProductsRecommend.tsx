import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Pokemon, Pokemons } from "../../interface";
import api from "../axiosConfig";
import ProductCollection from "./ProductCollection";
import "./Products.scss";

interface Props {
  id: number;
}

const ProductsRecommend: React.FC<Props> = (props) => {
  //const pokemons = useSelector((state) => state.products)
  const { id } = props;
  console.log(id);

  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const [loadMore, setLoadMore] = useState<boolean>(false);

  const filter = {
    id: 0,
    name: "",
    types: [],
    base_experience: 0,
  };

  useEffect(() => {
    const getPokemon = async () => {
      setLoading(true);
      await api.get(`/pokemon?limit=10&offset=${id}`).then((res) => {
        setNextUrl(res.data.next);
        setPokemons([...res.data.results]);
      });
      setLoading(false);
    };

    getPokemon();
  }, [id]);

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


  return (
    <div className="products">
      <div className="container">
        <h3>Customers Also Viewed</h3>
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

export default ProductsRecommend;
