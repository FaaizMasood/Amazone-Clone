import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/02/AMAZON-1200x537.png"
          alt=""
        />

        <div className="home__row">
          {/* Product */}
          <Product
            title="The lean startup"
            price={29.99}
            image="https://upload.wikimedia.org/wikipedia/en/1/11/Lean_Startup.png"
            rating={5}
          />
          {/* Product */}
          <Product
            title="Kenwood kMix Stand Mixer for Baking"
            price={499}
            image="https://www.pngkit.com/png/full/173-1732901_kenwood-kmx51-stand-mixer-kenwood-stand-mixer-price.png"
            rating={4}
          />
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            title="Ronaldo The Movie"
            price={499}
            image="https://m.media-amazon.com/images/I/81eaSvM7zqL._AC_UL640_FMwebp_QL65_.jpg"
            rating={4}
          />
          {/* Product */}
          <Product
            title="Messi Poster Signed"
            price={498}
            image="https://m.media-amazon.com/images/I/7142TvcCrBL._AC_UL640_FMwebp_QL65_.jpg"
            rating={4}
          />
          {/* Product */}
          <Product
            title="Printer"
            price={99}
            image="https://images-na.ssl-images-amazon.com/images/I/814Vv77k4wL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            title="Best TV on the planet"
            price={4999}
            image="https://ksassets.timeincuk.net/wp/uploads/sites/54/2013/05/Sharp-Aquos-TV-1.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
