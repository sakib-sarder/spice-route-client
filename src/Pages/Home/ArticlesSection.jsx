import React, { useEffect, useState } from "react";
import Article from "./Article";

const ArticlesSection = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      "https://spice-route-server-shakib232002-gmailcom.vercel.app/articles"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center font-bold py-2 text-[#F4AB1D] tracking-widest">
        Articles
      </h1>
      <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {articles.map((article) => (
          <Article key={article.id} article={article}></Article>
        ))}
      </div>
    </div>
  );
};

export default ArticlesSection;
