
import { useState } from "react";
import { Routes,Route } from "react-router";

import Nav from "./New project/Nav";
import Service from "./New project/Service"
import Datas from "./New project/Datas";
import Meetus from "./New project/Meetus";
import Update from "./New project/Update";

function App() {


  
  const datas=[]
const[allData,getData]=useState(datas)

function Getdatas(value) {
  console.log(value);
  getData((datas)=>{
    return[...datas,value]
  })
  
 }
  return (
    <div>

<Routes>
  <Route path="/" element={  <Nav /> }></Route>
  <Route path="/Service" element={<Service add={Getdatas}/>}></Route>
  <Route path="/Datas" element={<Datas pass={allData}/>}></Route>
  <Route path="/Meetus" element={<Meetus/>}></Route>
  <Route path="/Update" element={< Update/>}></Route>
</Routes>  
  
    </div>
  );
}

export default App;
