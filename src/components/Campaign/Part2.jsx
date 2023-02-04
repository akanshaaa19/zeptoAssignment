import { Fragment, useEffect } from "react";
import Heading from "../ui/Heading";
import ProductItem from "../Single-Components/ProductItem";

import blueberry from '../../assets/products/blueberry.png'
import blueberryraw from '../../assets/products/blueberryraw.png'
import truffle from '../../assets/products/truffle.png'
import custard from '../../assets/products/custurd.png'
import ferro from '../../assets/products/ferrero.png'
import green from '../../assets/products/greencupcake.png'
import brownie from '../../assets/products/brownie.png'
import best from '../../assets/products/best.png'
import strawberry from '../../assets/products/strawberry.png'
import Button from "../ui/Button";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { progressActions } from "../../store";



const products = [
    {src: blueberryraw, title: "Blueberry cake with raw toppings", price: 2290 },
    {src: truffle, title: "Chocolate truffle cake", price: 2190 },
    {src: brownie, title: "Browine cake with fluffy cream", price: 1222 },
    {src: ferro, title: "Ferro rocher cake", price: 1234 },
    {src: custard, title: "Custurd mixed with fruit cake", price: 1456 },
    {src: best, title: "Best raw topping choco cake", price: 2345 },
    {src: green, title: "Green cup cakes", price: 1234 },
    {src: blueberry, title: "Blueberry topping cakes", price: 1456 },
    {src: strawberry, title: "Strawberry cakes with blueberry", price: 2345 }

];

function Part2() {

    const history = useHistory();
    const dispatch = useDispatch();

    // useEffect(()=>{
      dispatch(progressActions.setStep(2))
    // }, [])

  return (
    <Fragment>
      <Heading heading="Choose the Product" muted="(Step 2 of 4)" />
      <div className="products row">
        {products.map(product=>{
            return <ProductItem src={product.src} title={product.title} price={product.price} />
        })}
        <div className="btn-div"><Button onClick={()=>{history.push('/campaign/new/step3')}}>Continue</Button></div>
      </div>
    </Fragment>
  );
}

export default Part2;
