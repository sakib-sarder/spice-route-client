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
      <div className=" w-32 flex gap-2 rounded-sm px-3 py-1 font-semibold text-xl bg-amber-500">
        <span>Articles</span>
        <div className="bg-red-500 rounded-full px-2">{articles.length}</div>
      </div>
      <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {articles.map((article) => (
        <Article key={article.id} article={article}></Article>
      ))}
      </div>
    </div>
  );
};

export default ArticlesSection;
