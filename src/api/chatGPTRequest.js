import axios from "axios"


import { API_KEY_OPEN_AI } from '../../config'

const ChatGPTRequest = async (prompt) => {
    const result = {
        data: "",
        error: null,
    }
    
    
    
    return await axios({
        method: 'post',
        url: 'https://api.openai.com/v1/completions',
        data: {
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 2048,
            temperature: 0
        },
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "in-ID",
            "Authorization": `Bearer ${API_KEY_OPEN_AI}`,
        },
    })
    .then((response) => {     
        
        if (response.status === 200) {
            result.data = response?.data?.choices?.[0].text || 'Sorry the question is not clear, please repeat again'
        } else {
            result.error = "Sorry, I'm not able to think, please try again"
        }
            
            return result;
    })
    .catch((error) => {
        result.error = "Sorry, I'm not able to think, please try again"
        return result
    })
    
}   

export default ChatGPTRequest