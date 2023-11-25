import {
  HeaderBg,
  FirstBg,
  Heading,
  HeadingSpan,
  SecondBg,
  IconContainer,
} from "./HeaderStyledComponent";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => (
  <HeaderBg>
    <FirstBg>
      <h1>
        <HeadingSpan>Reeco</HeadingSpan>
      </h1>
      <Heading>Store</Heading>
      <Heading>Orders</Heading>
      <Heading>Analytics</Heading>
    </FirstBg>
    <SecondBg>
      <IconContainer>
        <FiShoppingCart />
      </IconContainer>
      <Heading>
        Hello,James
        <span>
          <RiArrowDropDownLine />
        </span>
      </Heading>
    </SecondBg>
  </HeaderBg>
);

export default Header;
