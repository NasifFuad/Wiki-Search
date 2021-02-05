import React from "react"
import "./SearchBox.css"


const SearchBox =  ({searchValue,submitedButton})  =>{
    return(
        <>
        <form onSubmit={submitedButton}>
        <div className="contain">
           <input 
           className="input"
           type="text"
           onChange ={searchValue}
           />
           <button className="btn">Search</button>
        </div>
        </form>
        </>
    )
}

export default SearchBox