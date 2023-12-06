import { useState, useEffect } from "react";
import axios from "axios";
import { ArticlesIndex } from "./ArticlesIndex";

export function Content() {
   const [articles, setArticles] = useState([]);

   const handleArticlesIndex = () => {
        axios
            .get(`https://newsapi.org/v2/everything?q=lego&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
            .then((response) => {
                console.log(response.data.articles);
                setArticles(response.data.articles);
        });
    };

    useEffect(handleArticlesIndex,[]);
   
    return (
      <div>
       <ArticlesIndex articles={articles}/>
      </div>
    )
  }