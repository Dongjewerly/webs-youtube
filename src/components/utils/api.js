import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
        part:'',
        maxResults: '48',
    },
    headers: {
        'X-RapidAPI-Key': '0c7900c45emsh3eaee60bd98ad23p1cdb38jsn6f4b45508cc4',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async(url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data; 
    } catch (error) {
        console.error(error);
    }
}

// REACT_APP_YOUTUBE_API_KEY=AIzaSyDpcjiJHSiV6Ov-sXiKBQGlDWV4ZIKz0lQ