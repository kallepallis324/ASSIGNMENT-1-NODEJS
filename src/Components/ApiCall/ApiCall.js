import axios from 'axios';

const ApiCall = async () => {
    try{
        let response = await axios.get("https://nodeassignment1.herokuapp.com/getplayers");
        return response.data;
    }catch(e){
        return e;
    }
}

export default ApiCall;