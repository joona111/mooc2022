import React from "react";
import {increment,decrease,favourite} from "./actions/"
import { useSelector, useDispatch } from "react-redux";


const  App = () =>  {
 const counter = useSelector((state) => state.counter)
 const favourites = useSelector((state) => state.favourites)
 const dispatch = useDispatch()
return (
    <div className="App">
     <p>counter {counter}</p>
     <button onClick={() => dispatch(increment())} >increase</button>
     <button onClick={() => dispatch(decrease())} >decrease</button>
     
     <p> favourites {favourites} </p>
      <button onClick={() => dispatch(favourite())} >favourite</button>
    </div>
  );
}

export default App;
