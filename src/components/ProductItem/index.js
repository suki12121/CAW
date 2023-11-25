import {
  ProductItemsLi,
  HeadingBg,
  ImageBg,
  HeadingBg1,
  HeadingBg2,
  HeadingBg3,
  HeadingBg4,
  ButtonBg,
  LastBg,
} from "./ProductItemStyledComponents";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const ProductItem = (props) => {
  const { itemDetails, deleteItem } = props;
  const {
    id,
    productName,
    brand,
    quantity,
    total,
    price,
    imgUrl,
  } = itemDetails;
  const onDeleteItem = () => {
    deleteItem(id);
  };

  return (
    <ProductItemsLi>
      <ImageBg src={imgUrl} />
      <HeadingBg>{productName}</HeadingBg>
      <HeadingBg1>{brand}</HeadingBg1>
      <HeadingBg2>{quantity}</HeadingBg2>
      <HeadingBg3>{total}</HeadingBg3>
      <HeadingBg4>{price}</HeadingBg4>
      <LastBg>
        <ButtonBg>
          <TiTick />
        </ButtonBg>
        <ButtonBg onClick={onDeleteItem}>
          <RxCross2 />
        </ButtonBg>
        <ButtonBg>Edit</ButtonBg>
      </LastBg>
    </ProductItemsLi>
  );
};

export default ProductItem;
