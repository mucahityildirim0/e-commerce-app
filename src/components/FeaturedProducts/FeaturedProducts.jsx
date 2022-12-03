import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://cdn.dsmcdn.com/mnresize/500/-/ty194/product/media/images/20211009/16/143778468/164809635/1/1_org.jpg",
      img2: "https://n11scdn.akamaized.net/a1/602_857/03/22/53/33/IMG-3358953096487565379.jpg",
      title: "long sleeveee",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://cdn.dsmcdn.com/mnresize/500/-/ty194/product/media/images/20211009/16/143778468/164809635/1/1_org.jpg",
      img2: "https://n11scdn.akamaized.net/a1/602_857/03/22/53/33/IMG-3358953096487565379.jpg",
      title: "long sleeveee",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://cdn.dsmcdn.com/mnresize/500/-/ty194/product/media/images/20211009/16/143778468/164809635/1/1_org.jpg",
      img2: "https://n11scdn.akamaized.net/a1/602_857/03/22/53/33/IMG-3358953096487565379.jpg",
      title: "coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://cdn.dsmcdn.com/mnresize/500/-/ty194/product/media/images/20211009/16/143778468/164809635/1/1_org.jpg",
      img2: "https://n11scdn.akamaized.net/a1/602_857/03/22/53/33/IMG-3358953096487565379.jpg",
      title: "pant",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          minus dolor doloribus nisi, inventore explicabo repellat repudiandae
          laudantium aperiam ea.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
