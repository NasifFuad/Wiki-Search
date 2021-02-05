import React from "react"
import "./SearchResult.css"


const SearchResult =  ({apiValue})  =>{
    console.log(apiValue)
    
    if(apiValue.length === 0 || apiValue[0].title === "Undefined"){
        return(
            <h1 class="text-center">no data found on wikipedia</h1>
        )
    }
    else{
       return(
           <>{
        apiValue.map((user,i) =>{
            const originalString = user.snippet 
            const strippedString = originalString.replace(/(<([^>]+)>)/gi, "");
            return(
                <div key={i} className="searchmatch">
                    <p className="link">https://en.wikipedia.org/?curid=${user.pageid}</p>
                    <a href={`https://en.wikipedia.org/?curid=${user.pageid}`} className="title">{user.title}</a>
                    <p>Published At:{user.timestamp}</p>
                    <p>{strippedString}</p>
                </div>
            )
        })}
        </>
       )
    }
    
    
   
}

export default SearchResult