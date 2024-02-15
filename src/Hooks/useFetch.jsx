import {useState , useEffect} from 'react'
import axios from 'axios'

function useFetch(url) {

    const[data , setData] = useState();

    useEffect(() => {
        const FetchApi = async() =>{
            const response = await axios.get(url,
            {
              headers: {
                projectID: "8io8w790wmwl",
              },
            });
            setData(response.data);
        } 
        FetchApi();
    }, [data]);

    return data;
}

export default useFetch