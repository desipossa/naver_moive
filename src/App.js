import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        get_DATA();
    }, []);

    const API_KEY = 'a5ee1fb9d67341ec941a37c89cfc3283'

    const get_DATA = async () => {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`);
        const resultNews = res.data.articles;

        console.log(resultNews);
        setNews(resultNews);

    }
    return (
        <div>
            {
                news ?
                    <ul>
                        {
                            news.map((news, idx) => {
                                return (
                                    <ul key={idx}>
                                        <li>{news.title}</li>
                                        <li>{news.description}</li>
                                        <li>{news.publishedAt}</li>
                                    </ul>
                                )
                            })
                        }
                    </ul>
                    :
                    <div>news...</div>
            }
        </div>
    )
}

export default App