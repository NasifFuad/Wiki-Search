import React,{useState,useEffect} from "react"
import Logo from "./Logo/Logo"
import Navigation from "./Navigation/Navigation"
import SearchBox from "./SearchBox/SearchBox"
import SearchResult from "./SearchResult/SearchResult"
import axios from "axios"
const App = () =>  {
  const[searchName,updatedSearchName] = useState()
  const[searchNameValue,updatedSearchNameValue] = useState()
  const[apiValue,updatedApiNameValue] = useState([])
  
  useEffect(() => {
    async function apiCall(){
      const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchNameValue}`;
      const response = await axios.get(url);
      updatedApiNameValue(response.data.query.search)
     
    }
    apiCall()
  },[searchNameValue])
  const searchValue = (event) =>{
    updatedSearchName(event.target.value)
  }
  const submitedButton = (e) =>{
    e.preventDefault()
    updatedSearchNameValue(searchName)
  }
  
   
  return (
    <>
      <Navigation/>
      <Logo/>
      <SearchBox searchValue={searchValue} submitedButton = {submitedButton}/>
      <SearchResult apiValue={apiValue}/>

    </>
  );
}

export default App;
