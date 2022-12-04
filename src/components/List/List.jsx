import "./list.scss";
import Card from "../Card/Card";

const List = () => {
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
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
