import "./Home.scss"
import Products from "../Products/Products"
const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home__slogan">
                    <h3>POKEMON</h3>
                    <p>Gotta catch 'em all</p>
                </div>

            </div>
            <Products />
        </>
    );
}

export default Home;