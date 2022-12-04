import "./cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://cdn.dsmcdn.com/mnresize/500/-/ty194/product/media/images/20211009/16/143778468/164809635/1/1_org.jpg",
      img2: "https://n11scdn.akamaized.net/a1/602_857/03/22/53/33/IMG-3358953096487565379.jpg",
      title: "long sleeve",
      desc: "long sleeve delete",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://cdn.dsmcdn.com/mnresize/500/-/ty194/product/media/images/20211009/16/143778468/164809635/1/1_org.jpg",
      img2: "https://n11scdn.akamaized.net/a1/602_857/03/22/53/33/IMG-3358953096487565379.jpg",
      title: "long sleeve",
      desc: "long sleeve delete",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlineIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
