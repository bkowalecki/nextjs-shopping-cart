import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import toast, { Toaster } from "react-hot-toast";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  
    const dispatch = useDispatch();

    const toastAddMsg = () => {toast.success("Added to Cart")};

  return (
    <div className={styles}>
      <Image src={product.image} height={300} width={220} alt="game_image"/>
      <h4 className={styles.title}>{product.product}</h4>
      <h5 className={styles.category}>{product.category}</h5>
      <p>$ {product.price}</p>
      <button
        onClick={() => {
            toastAddMsg();
            dispatch(addToCart(product));
        }}
        className={styles.button}
      >
        Add to Cart
      </button>
      <Toaster 
        position="bottom-right"
        reverseOrder={false}
      />
    </div>
  );
};

export default ProductCard;
