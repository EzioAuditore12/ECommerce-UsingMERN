import axios from "axios";

const API_URL = 'http://192.168.81.139:8000';

const API_Model_Call = async (apiRequestBody) => {
    console.log('Sending request to:', `${API_URL}/api/llm/gen/`);
    console.log('Request body:', apiRequestBody);
    
    try {
        const caching=await axios.post(`${API_URL}/api/cache/`,{
            email:apiRequestBody.email,
            value:'start'
        });
        console.log('Model started',caching);
        const result = await axios.post(`${API_URL}/api/llm/gen/`, apiRequestBody);
        console.log('API Response:', result.data);
        return result.data;
    } catch (err) {
        console.error('API Error:', err);
        console.error('Error response:', err.response?.data);
        throw err;
    }
}

export default API_Model_Call;