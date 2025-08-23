import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter,Routes,Route
} from "react-router-dom"
import LoadingBar from "react-top-loading-bar";

const App =()=> {

 const pageSize=15;
 const [progress,setProgress]= useState(0);

    return (
      <>
      <BrowserRouter> 
       <Navbar/> 
       <LoadingBar
        color="#f11946"
        height= {3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)} />
       <Routes>
        <Route exact  path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general"/>}></Route>
        <Route exact  path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="us" category="business"/>}></Route>
        <Route exact  path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>}></Route>
        <Route exact  path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health"/>}></Route>
        <Route exact  path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science"/>}></Route>
        <Route exact  path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports"/>}></Route>
        <Route exact  path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="us" category="technology"/>}></Route>
           
       </Routes>

      </BrowserRouter>


      {/* <Navbar/> */}
      {/* <News setProgree={setProgress} pageSize={this.pageSize} country="us" category="health"/> */}
        
      </>
    )
  
}
export default App
