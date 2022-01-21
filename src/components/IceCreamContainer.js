import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of icecreams - {numOfIceCream}</h1>
      <button onClick={() => dispatch(buyIceCream())}>Buy Icecream</button>
    </div>
  );
};

export default IceCreamContainer;
