import Image from "next/image";
// import styles from "./page.module.css";
let myCss = {
  fontSize: 100,
  color: 'blue'
}

function Footer(){
  return(
    <div>
      <p>This is Footer</p>
    </div>
  )
}

export default function Header() {
  return (
    <>
    <p style={(myCss)}>This is header</p>
    </>
  );
}