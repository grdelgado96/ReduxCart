import classes from './CartButton.module.css';
import { useDispatch, useSelector} from "react-redux";
import {uiActions} from '../../store/ui'

const CartButton = (props) => {
  const cartQuantity = useSelector((state=> state.cart.totalQuantity));
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart())
  };
  return (
    <button on onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
