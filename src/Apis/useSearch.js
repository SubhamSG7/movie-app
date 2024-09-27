import axios from "axios";
import { useEffect, useState } from "react"
const apikey = import.meta.env.VITE_API_KEY;


export const useSearch=(query,page)=>{
    const [searchData,setSearchData]=useState("");
    const [loading,setLoading]=useState(true);
    
    async function handleSearch(){
        try {
            const data=await axios.get(`https://api.themoviedb.org/3/search/multi?query=${query}&page=${page}&api_key=${apikey}`)
           setSearchData(await data.data.results)
           
        } catch (error) {
            console.log(error);
            
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        handleSearch()
    },[query,page])
    return {searchData,loading}
}