import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addItem } from "../../redux/cartSlice";
import "./ProductDetail.scss";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Ability, PokemonDetail } from "../../interface";
import api from "../axiosConfig";
import { Comment } from "../../components/Comment/Comment";
import ProductsRecommend from "./ProductsRecommend";

const ProductDetail = () => {
  const { name } = useParams();

  const [detail, setDetail] = useState<PokemonDetail>({
    id: 0,
    name: "",
    types: [],
    base_experience: 0,
    abilities: [],
    stats: [],
  });
  const [ability, setAbility] = useState("");
  const [abilityName, setAbilityName] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ detail: detail }));
    toast.info("You have added an item!", {
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    const getPokemon = async () => {
      await api.get(`/pokemon/${name}`).then((res) => {
        console.log(res.data);
        setDetail(res.data);
      });
    };

    getPokemon();
  }, [name]);

  const handleGoCart = () => {
    navigate("/cart");
  };

  const handleAbility = async (url: string, name: string) => {
    setLoading(true);
    setAbilityName(name);
    await api.get(url).then((res) => {
      res.data.flavor_text_entries.forEach((item: Ability) => {
        if (item.language.name === "en") {
          setAbility(item.flavor_text);
        }
      });
    });
    setLoading(false);
  };

  return (
    <>
      <div className="container">
        <div className="detail__body">
          {detail.id!==0 ? <img
            className="detail__img"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${detail.id}.png`}
            alt=""
          />:<Skeleton width={300} height={300}/>}
          <div className="detail__info">
            <p className="detail__name">
              {detail.name.length > 0 ? detail.name : <Skeleton />}
            </p>
            <h5 className="products__price">
              {detail.base_experience ? (
                `${detail.base_experience} $`
              ) : (
                <Skeleton />
              )}{" "}
            </h5>
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
            <div className="mg-t abilities">
              <p style={{ margin: "0rem 0rem 0.5rem", fontSize: "2rem" }}>
                Abilities:
              </p>
              {detail.abilities ? (
                detail.abilities.map((item) => {
                  return (
                    <p>
                      <span className="abilities__name">
                        {item.ability.name}
                      </span>
                      <button
                        className="abilities__btn"
                        onClick={() =>
                          handleAbility(item.ability.url, item.ability.name)
                        }
                      >
                        ?
                      </button>
                    </p>
                  );
                })
              ) : (
                <Skeleton />
              )}
            </div>

            <div className="mg-t attribute">
              {loading ? (
                <>
                  <div className="ability">
                    <p className="ability__desc">Loading...</p>
                  </div>
                </>
              ) : (
                <>
                  {ability.length > 0 ? (
                    <>
                      <div className="ability">
                        <div className="ability__title">
                          <span className="ability__info">Ability Info</span>
                          <button
                            className="ability__close"
                            onClick={() => {
                              setAbility("");
                            }}
                          >
                            <span>
                              <i className="fa-solid fa-x"></i> CLOSE
                            </span>
                          </button>
                        </div>
                        <h3 className="ability__name">{abilityName}</h3>
                        <p className="ability__desc">{ability}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="attribute__left">
                        <ul>
                          <li>
                            <p className="attribute__title">HP</p>
                            <p className="attribute__value">
                              {detail.stats.length > 0 ? (
                                detail.stats[0].base_stat
                              ) : (
                                <Skeleton />
                              )}
                            </p>
                          </li>
                          <li>
                            <p className="attribute__title">ATK</p>
                            <p className="attribute__value">
                              {detail.stats.length > 0 ? (
                                detail.stats[1].base_stat
                              ) : (
                                <Skeleton />
                              )}
                            </p>
                          </li>
                          <li>
                            <p className="attribute__title">DEF</p>
                            <p className="attribute__value">
                              {detail.stats.length > 0 ? (
                                detail.stats[2].base_stat
                              ) : (
                                <Skeleton />
                              )}
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="attribute__right">
                        <ul>
                          <li>
                            <p className="attribute__title">SP.ATK</p>
                            <p className="attribute__value">
                              {detail.stats.length > 0 ? (
                                detail.stats[3].base_stat
                              ) : (
                                <Skeleton />
                              )}
                            </p>
                          </li>
                          <li>
                            <p className="attribute__title">SP.DEF</p>
                            <p className="attribute__value">
                              {detail.stats.length > 0 ? (
                                detail.stats[4].base_stat
                              ) : (
                                <Skeleton />
                              )}
                            </p>
                          </li>
                          <li>
                            <p className="attribute__title">SPD</p>
                            <p className="attribute__value">
                              {detail.stats.length > 0 ? (
                                detail.stats[5].base_stat
                              ) : (
                                <Skeleton />
                              )}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
            <div className="mg-t">
              {Object.keys(detail).length === 0 ? (
                <Skeleton />
              ) : (
                <>
                  <button
                    className="detail__btn detail__btn--add"
                    onClick={() => {
                      handleAddToCart();
                    }}
                  >
                    Add to cart
                  </button>
                  <button
                    className="detail__btn detail__btn--go"
                    onClick={handleGoCart}
                  >
                    Go to cart
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Comment />
      <ProductsRecommend id={detail.id}/>
    </>
  );
};

export default ProductDetail;
