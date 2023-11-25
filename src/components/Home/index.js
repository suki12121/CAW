import { Component } from "react";
import Header from "../Header";
import { TbCategory } from "react-icons/tb";
import { BsSearch } from "react-icons/bs";
import { IoIosPrint } from "react-icons/io";
import ProductItem from "../ProductItem";

import {
  MainBg,
  MainFirstBg,
  MainFirstBg1,
  Heading,
  HeadingSpan,
  MainFirstBg2,
  HeadingBg,
  Button1,
  ButtonBg,
  Button2,
  MainSecondBg,
  MainSecondBg1,
  MainSecondBg11,
  HeadingBg1,
  MainThirdBg,
  SearchFieldContainer,
  SearchInputField,
  SearchButton,
  MainThirdBg1,
  ButtonIconBg,
  ButtonBg1,
  IconBg,
  MainThirdBg21,
  MainThirdBg22,
  MainThirdBg2,
  Heading22,
  MainFourthBg,
  MainFourthBg1,
} from "./HomeStyledComponents";

const initialItems = [
  {
    id: 1,
    imgUrl: "https://picsum.photos/seed/picsum/200/300",
    brand: "Hormel Black Label",
    productName: "Chicken Breast Filets, Boneless Marinated 6 Ounce Raw",
    quantity: 2,
    total: 0,
    price: 8.99,
    status: "Awaiting Approval",
  },
  {
    id: 2,
    imgUrl: "https://picsum.photos/seed/picsum/200/300",
    brand: "Hormel Black Label",
    productName: "Chicken Breast Filets, Boneless Marinated 6 Ounce Raw",
    quantity: 1,
    total: 2240,
    price: 12.5,
    status: "Approved",
  },
  {
    id: 3,
    imgUrl: "https://picsum.photos/seed/picsum/200/300",
    brand: "Hormel Black Label",
    productName: "Chicken Breast Filets, Boneless Marinated 6 Ounce Raw",
    quantity: 2,
    total: 12,
    price: 9.9,
    status: "Awaiting Approval",
  },
  {
    id: 4,
    imgUrl: "https://picsum.photos/seed/picsum/200/300",
    brand: "Hormel Black Label",
    productName: "Chicken Breast Filets, Boneless Marinated 6 Ounce Raw",
    quantity: 12,
    total: 45,
    price: 99,
    status: "Awaiting Approval",
  },
  {
    id: 5,
    imgUrl: "https://picsum.photos/seed/picsum/200/300",
    brand: "Hormel Black Label",
    productName: "Chicken Breast Filets, Boneless Marinated 6 Ounce Raw",
    quantity: 6,
    total: 40,
    price: 4.99,
    status: "Awaiting Approval",
  },
  {
    id: 6,
    imgUrl: "https://picsum.photos/seed/picsum/200/300",
    brand: "Hormel Black Label",
    productName: "Chicken Breast Filets, Boneless Marinated 6 Ounce Raw",
    quantity: 9,
    total: 110,
    price: 128.99,
    status: "Awaiting Approval",
  },
  {
    id: 7,
    imgUrl: "https://picsum.photos/seed/picsum/200/300",
    brand: "Hormel Black Label",
    productName: "Chicken Breast Filets, Boneless Marinated 6 Ounce Raw",
    quantity: 1,
    total: 76,
    price: 9.99,
    status: "Awaiting Approval",
  },
  {
    id: 8,
    imgUrl: "https://picsum.photos/seed/picsum/200/300",
    brand: "Hormel Black Label",
    productName: "Chicken Breast Filets, Boneless Marinated 6 Ounce Raw",
    quantity: 11,
    total: 9,
    price: 99,
    status: "Awaiting Approval",
  },
  {
    id: 9,
    imgUrl: "https://picsum.photos/seed/picsum/200/300",
    brand: "Hormel Black Label",
    productName: "Chicken Breast Filets, Boneless Marinated 6 Ounce Raw",
    quantity: 5,
    total: 88,
    price: 82.99,
    status: "Awaiting Approval",
  },
  {
    id: 10,
    imgUrl: "https://picsum.photos/seed/picsum/200/300",
    brand: "Hormel Black Label",
    productName: "Chicken Breast Filets, Boneless Marinated 6 Ounce Raw",
    quantity: 12,
    total: 128,
    price: 8.99,
    status: "Awaiting Approval",
  },
];

class Home extends Component {
  state = {
    productList: initialItems,
    statusChange: false,
  };

  deleteItem = (id) => {
    const { productList } = this.state;
    const updatedItems = productList.filter((eachItem) => eachItem.id !== id);
    this.setState({
      productList: updatedItems,
    });
  };

  render() {
    const { productList } = this.state;
    return (
      <MainBg>
        <Header />
        <MainFirstBg>
          <MainFirstBg1>
            <Heading>
              Orders > <HeadingSpan>Order 32457ABC</HeadingSpan>
            </Heading>
          </MainFirstBg1>
          <MainFirstBg2>
            <HeadingBg>Order 32457ABC</HeadingBg>
            <ButtonBg>
              <Button1>Back</Button1>
              <Button2>Approve Order</Button2>
            </ButtonBg>
          </MainFirstBg2>
        </MainFirstBg>
        <MainSecondBg>
          <MainSecondBg1>
            <MainSecondBg11>
              <Heading>Supplier</Heading>
              <HeadingBg1>East Coast fruits & vegetables</HeadingBg1>
            </MainSecondBg11>
            <MainSecondBg11>
              <Heading>Shipping date</Heading>
              <HeadingBg1>Thu,Feb 10</HeadingBg1>
            </MainSecondBg11>
            <MainSecondBg11>
              <Heading>Total</Heading>
              <HeadingBg1>$15,028.3</HeadingBg1>
            </MainSecondBg11>
            <MainSecondBg11>
              <Heading>Category</Heading>
              <Heading>
                <TbCategory />
                <TbCategory />
                <TbCategory />
                <TbCategory />
              </Heading>
              <Heading>
                <TbCategory />
                <TbCategory />
                <TbCategory />
                <TbCategory />
              </Heading>
            </MainSecondBg11>
            <MainSecondBg11>
              <Heading>Department</Heading>
              <HeadingBg1>300-400-678</HeadingBg1>
            </MainSecondBg11>
            <MainSecondBg11>
              <Heading>Status</Heading>
              <HeadingBg1>Awaiting your approval</HeadingBg1>
            </MainSecondBg11>
          </MainSecondBg1>
        </MainSecondBg>
        <MainThirdBg>
          <MainThirdBg1>
            <SearchFieldContainer>
              <SearchInputField type="search" placeholder="search...." />
              <SearchButton type="button">
                <BsSearch />
              </SearchButton>
            </SearchFieldContainer>
            <ButtonIconBg>
              <ButtonBg1>Add Item</ButtonBg1>
              <IconBg>
                <IoIosPrint />
              </IconBg>
            </ButtonIconBg>
          </MainThirdBg1>
          <MainThirdBg2>
            <MainThirdBg21>
              <Heading>ProductName</Heading>
            </MainThirdBg21>
            <MainThirdBg22>
              <Heading22>Brand</Heading22>
              <Heading22>Quantity</Heading22>
              <Heading22>Price</Heading22>
              <Heading22>Total</Heading22>
              <Heading22>Status</Heading22>
            </MainThirdBg22>
          </MainThirdBg2>
          <MainFourthBg>
            <MainFourthBg1>
              {productList.map((eachItem) => (
                <ProductItem
                  key={eachItem.id}
                  itemDetails={eachItem}
                  deleteItem={this.deleteItem}
                />
              ))}
            </MainFourthBg1>
          </MainFourthBg>
        </MainThirdBg>
      </MainBg>
    );
  }
}

export default Home;
