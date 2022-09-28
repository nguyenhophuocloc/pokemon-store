//import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { Pokemon, Pokemons } from "../../interface";
import { handleId } from "../../utils/function";
import api from "../axiosConfig";

interface ProductCollectionProps {
  pokemons: Pokemons[];
  filter: Pokemon;
}

interface ProductCardProps {
  name: string;
  url: string;
}

const ProductCollection: React.FC<ProductCollectionProps> = (props) => {
  //const pokemons = useSelector((state) => state.products.products)
  const { pokemons, filter } = props;

  const ProductCard: React.FC<ProductCardProps> = (props) => {
    const { name, url } = props;
    const [detail, setDetail] = useState<Pokemon>({
      id: 0,
      name: "",
      types: [],
      base_experience: 0,
    });

    useEffect(() => {
      const getPokemon = async () => {
        await api.get(url).then((res) => {
          setDetail(res.data);
        });
      };

      getPokemon();
    }, [props]);

    return (
      <>
        <div className="products__card">
          <figure className="products__figure text-center">
            <Link to={`/products/${name}`}>
              {detail.id ? (
                <img
                  className="products__img"
                  // src={`https://img.pokemondb.net/sprites/home/normal/2x/avif/${name}.avif`}
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${handleId(
                    detail.id
                  )}.png`}
                  alt=""
                />
              ) : (
                <Skeleton height={180} width={180} />
              )}
              {/* <img className='products__img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${detail.id}.png`} alt="" /> */}
            </Link>
          </figure>
          <div className="mg-t products__body">
            <h5 className="products__price">
              {detail.base_experience ? (
                `${detail.base_experience} $`
              ) : (
                <Skeleton />
              )}{" "}
            </h5>
            <p className="products__name">
              {detail.name ? detail.name : <Skeleton />}
            </p>
            {detail.types ? (
              detail.types.map((item) => {
                return (
                  <p className={`type__icon type__${item.type.name}`}>
                    {item.type.name}
                  </p>
                );
              })
            ) : (
              <Skeleton />
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="row">
        {/**Có filter thì dùng filter tạo card, ko có thì dùng pokemons list card */}
        {filter.name.length === 0 ? (
          pokemons.map((item, index) => {
            return (
              <div key={index} className="col">
                <ProductCard name={item.name} url={item.url} />
              </div>
            );
          })
        ) : (
          <div className="products__card">
            <figure className="products__figure">
              <Link to={`/products/${filter.name}`}>
                <img
                  className="products__img"
                  // src={`https://img.pokemondb.net/sprites/home/normal/2x/avif/${filter.name}.avif`}
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${handleId(
                    filter.id
                  )}.png`}
                  alt=""
                />
              </Link>
            </figure>
            <div className="mg-t products__body">
              <h5 className="products__price">
                {filter.base_experience ? (
                  `${filter.base_experience} $`
                ) : (
                  <Skeleton />
                )}{" "}
              </h5>
              <p className="products__name">
                {filter.name ? filter.name : <Skeleton />}
              </p>
              {filter.types ? (
                filter.types.map((item) => {
                  return (
                    <p className={`type__icon type__${item.type.name}`}>
                      {item.type.name}
                    </p>
                  );
                })
              ) : (
                <Skeleton />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default React.memo(ProductCollection);
