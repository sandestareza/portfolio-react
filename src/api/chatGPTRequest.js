import axios from "axios";


const API_KEY_OPEN_AI = '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'

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
            max_tokens: 1000,
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
                result.data = response?.data?.choices?.[0].text || 'Mohon maaf pertnyaanya kurang jelas, mohon diulang kembali';
            } else {
                result.error = "Failed response";
            }

            return result;
        })
        .catch((error) => {
            result.error = "Error : " + error.message?.response?.message;
            return result;
        })

}   

export default ChatGPTRequest