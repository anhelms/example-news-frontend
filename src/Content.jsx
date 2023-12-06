import { useState, useEffect } from "react";
import axios from "axios";
import { ArticlesIndex } from "./ArticlesIndex";

export function Content() {
   const [articles, setArticles] = useState([]);

   const handleArticlesIndex = () => {
        axios
            .get(`http://localhost:3000/news.json?search_terms=lego`)
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