import "./News.scss";

const News = () => {
  return (
    <div className="news">
      <div className="container">
        <div className="news__content">
          <h2 className="news__tit">Pokemon News</h2>
          <div className="news__main">
            <div className="news__card">
              <img
                className="news__img"
                src={require("../../assets/about/about1.jpg")}
                alt="news"
              />
              <p className="news__date">Aug 20, 2022</p>
              <p className="news__tag">Trading Card Game</p>
              <h3 className="news__title">
                Art of the Pokémon TCG: <em>Sword &amp; Shield—Lost Origin</em>{" "}
                Expansion
              </h3>
              <p className="news__desc">
                Check out some of the incredible artwork from the latest Pokémon
                TCG expansion and two artist spotlights.
              </p>
            </div>
            <div className="news__card">
              <img
                className="news__img"
                src={require("../../assets/about/about2.png")}
                alt="news"
              />
              <p className="news__date">Aug 20, 2022</p>
              <p className="news__tag">Trading Card Game</p>
              <h3 className="news__title">
                Art of the Pokémon TCG: <em>Sword &amp; Shield—Lost Origin</em>{" "}
                Expansion
              </h3>
              <p className="news__desc">
                Check out some of the incredible artwork from the latest Pokémon
                TCG expansion and two artist spotlights.
              </p>
            </div>
          </div>
          <hr className="news__hr" />
          <div className="news__select">
            <select>
              <option value="0">All News</option>
              <option value="1">Trading Card Game</option>
              <option value="2">General</option>
              <option value="3">Animation</option>
            </select>
          </div>
          <div className="news__other">
            <div className="news__card">
              <img
                className="news__img"
                src={require("../../assets/about/about3.png")}
                alt="news"
              />
              <p className="news__date">Aug 20, 2022</p>
              <p className="news__tag">Animation</p>
              <h3 className="news__title">
                Art of the Pokémon TCG: <em>Sword &amp; Shield—Lost Origin</em>{" "}
                Expansion
              </h3>
              <p className="news__desc">
                Check out some of the incredible artwork from the latest Pokémon
                TCG expansion and two artist spotlights.
              </p>
            </div>
            <div className="news__card">
              <img
                className="news__img"
                src={require("../../assets/about/about4.jpg")}
                alt="news"
              />
              <p className="news__date">Aug 20, 2022</p>
              <p className="news__tag">General</p>
              <h3 className="news__title">
                Art of the Pokémon TCG: <em>Sword &amp; Shield—Lost Origin</em>{" "}
                Expansion
              </h3>
              <p className="news__desc">
                Check out some of the incredible artwork from the latest Pokémon
                TCG expansion and two artist spotlights.
              </p>
            </div>
            <div className="news__card">
              <img
                className="news__img"
                src={require("../../assets/about/about5.jpg")}
                alt="news"
              />
              <p className="news__date">Aug 20, 2022</p>
              <p className="news__tag">Trading Card Game</p>
              <h3 className="news__title">
                Art of the Pokémon TCG: <em>Sword &amp; Shield—Lost Origin</em>{" "}
                Expansion
              </h3>
              <p className="news__desc">
                Check out some of the incredible artwork from the latest Pokémon
                TCG expansion and two artist spotlights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
