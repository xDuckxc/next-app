// import Image from "next/image";
// import styles from "./page.module.css";
'use client'
import Header from "./components/Header";
import {useState} from "react";
// let myCss = {
//   fontSize: 100,
//   color: 'blue'
// }

// function Header(){
//   return(
//     <div>
//     <p style={myCss}>This is Header</p>
//     </div>
//   )
// }

function Counter(props){
  const [count, setCount] = useState(props.initCount)
  return(
    <div>
      {count}
      <button type="button" onClick={() => setCount(count+1)}>Increase</button>
      <button type="button" onClick={() => setCount(count-1)}>Decrease</button>
      <button type="button" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

function Footer(){
  return(

    <div>
      <p>This is Footer</p>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Header />
      <Counter initCount={10}/>
      <Counter initCount={-10}/>
      <Footer />
    </div>
  );
}
