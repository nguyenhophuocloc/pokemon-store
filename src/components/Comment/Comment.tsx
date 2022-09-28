import Products from "../../pages/Products/Products";
import ProductsRecommend from "../../pages/Products/ProductsRecommend";
import "./Comment.scss";

export const Comment = () => {
  return (
    <div>
      <div className="container">
        <div className="comment__bg">
          <h2>Customer Reviews (2)</h2>
          <div className="rate">
            <div className="rate__left">
              <p>Average Rating</p>
              <div className="rate__star">
                <span style={{ fontWeight: "700" }}>
                  <i
                    style={{ color: "#FACF19" }}
                    className="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "#FACF19" }}
                    className="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "#FACF19" }}
                    className="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "#FACF19" }}
                    className="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "#FACF19" }}
                    className="fa-solid fa-star"
                  ></i>
                  <span style={{ marginLeft: "1rem" }}>5.00/5.00 </span>
                </span>
              </div>
            </div>
            <div className="rate__right">
              <p>Did you like it ?</p>
              <div className="rate__progress">
                <p className="progress__name">Yes</p>
                <progress value="85" max="100"></progress>
                <p className="progress__value">85%</p>
              </div>
              <div className="rate__progress">
                <p className="progress__name">No</p>
                <progress value="15" max="100"></progress>
                <p className="progress__value">15%</p>
              </div>
              <div className="rate__progress">
                <p className="progress__name">Not sure</p>
                <progress value="5" max="100"></progress>
                <p className="progress__value">5%</p>
              </div>
            </div>
          </div>
          <div className="comment_nav">
            <div className="comment__header">
              <div className="comment__tabs">
                <div className="comment__tab active__tab">All Reviews (2)</div>
                <div className="comment__tab">Image (1)</div>
              </div>
              <div className="comment__menu">
                <div className="menu__control">
                  <label className="menu__label">Rating</label>
                  <select className="menu__select">
                    <option value="0">All</option>
                    <option value="5">5 Star</option>
                    <option value="4">4 Star</option>
                    <option value="3">3 Star</option>
                    <option value="2">2 Star</option>
                    <option value="1">1 Star</option>
                  </select>
                </div>
                <div className="menu__control">
                  <label className="menu__label">Sort by</label>
                  <select className="menu__select">
                    <option value="0">Recommend</option>
                    <option value="5">Most Recent to Oldes</option>
                    <option value="4">Oldest to Most Recent</option>
                  </select>
                </div>
              </div>
            </div>
            <hr />
            <div className="comment__wrap">
              <div className="comment">
                <div className="comment__user">
                  <p className="user__name">v***s</p>
                  <div className="user__rating" style={{ fontWeight: "700" }}>
                    <i
                      style={{ color: "#FACF19" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FACF19" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FACF19" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FACF19" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FACF19" }}
                      className="fa-solid fa-star"
                    ></i>
                  </div>
                  <p className="buy__date">2022-08-31</p>
                </div>
                <div className="comment__content">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quia, eius perspiciatis sapiente deleniti qui aut maiores
                    ipsam vitae quis error voluptate hic dolore laudantium ea
                    aliquid dolorum aliquam excepturi. Amet.
                  </p>
                </div>
                <div className="comment__img">
                  <img
                    src={require("../../assets/comment/comment1.jpg")}
                    alt=""
                  />
                  <img
                    src={require("../../assets/comment/comment2.jpg")}
                    alt=""
                  />
                </div>
                <div className="comment__vote">
                  <span>
                    <i className="fa-solid fa-thumbs-up"></i> 10
                  </span>
                </div>
              </div>
              {/**Comment.... */}
              <div className="comment">
                <div className="comment__user">
                  <p className="user__name">v***s</p>
                  <div className="user__rating" style={{ fontWeight: "700" }}>
                    <i
                      style={{ color: "#FACF19" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FACF19" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FACF19" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FACF19" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FACF19" }}
                      className="fa-solid fa-star"
                    ></i>
                  </div>
                  <p className="buy__date">2022-08-31</p>
                </div>
                <div className="comment__content">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quia, eius perspiciatis sapiente deleniti qui aut maiores
                    ipsam vitae quis error voluptate hic dolore laudantium ea
                    aliquid dolorum aliquam excepturi. Amet.
                  </p>
                </div>
                <div className="comment__img">
                  <img
                    src={require("../../assets/comment/comment1.jpg")}
                    alt=""
                  />
                  <img
                    src={require("../../assets/comment/comment2.jpg")}
                    alt=""
                  />
                </div>
                <div className="comment__vote">
                  <span>
                    <i className="fa-solid fa-thumbs-up"></i> 10
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ProductsRecommend /> */}
    </div>
  );
};
