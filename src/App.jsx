import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/button";
import Fetch from "./components/fetch";

function App() {
  // const [permen, setCount] = useState(0);
  // const [notif, setNotif] = useState('');

  // useEffect(() => {
  //   console.log('selalu dirender');
  // })

  // useEffect(() => {
  //   console.log('selalu dirender sekali');
  //   alert('halo, ini dirender sekali');
  // }, [])

  // useEffect(() => {
  //   if (permen >= 5) {
  //     setNotif('Kebanyakan Bos');
  //   }
  //   else {
  //     setNotif('Aman Bos');
  //   }
  // }, [permen])

  // function tambah() {
  //   setCount(permen + 1);
  // }

  // function kurang() {
  //   if (permen >= 1){
  //     setCount(permen - 1);
  //   }
  //   else{
  //     return
  //   }
  // }

  // return (
  //   <>
  //     <div className="flex flex-col gap-8 items-center">
  //       <h1 className="font-bold italic text-red-600 text-8xl">
  //         {permen} Permen <div>{notif}</div>
  //       </h1>

  //       <span className="flex gap-3">
  //         <Button btnClick={tambah} text="Tambah Bang !" />
  //         <Button btnClick={kurang} text="Kurang Bang !" />
  //       </span>
  //     </div>
  //     </>
  //   );

  // const [nama, setNama] = useState("");
  // const [notif, setNotif] = useState("");

  // useEffect(() => {
  //   if (nama.length <= 3) {
  //     setNotif("Pendek Betul");
  //   } else if (nama.length >= 10) {
  //     setNotif("Panjang Kali Brok");
  //   } else {
  //     setNotif("Standar Abiezz");
  //   }
  // });

  // return (
  //   <>
  //     <div className="flex flex-col items-center">
  //       <h1>{notif}</h1>

  //       <h1 className="text-red-600 font-bold">{nama}</h1>

  //       <input
  //         type="text"
  //         name=""
  //         id=""
  //         className="border w-80 text-center"
  //         onChange={(e) => setNama(e.target.value)}
  //       />
  //     </div>
  //   </>
  // );

  return (
    <>
      <div>
        <Fetch />
      </div>
    </>
  );
}

export default App;
