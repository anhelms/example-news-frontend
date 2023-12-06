export function ArticlesIndex(props) {
  console.log(props.articles);
    return (
      <div>
        <h1 className="text-4xl font-bold underline text-red-400 p-4 text-center">All Lego Articles</h1>
        {props.articles.map((article) => (
          <div key={article.title}>
            <h2 className="text-lg font-bold p-1">{article.title}</h2>
            <img className="object-none object-center" src={article.urlToImage} alt={article.title} />
            <p>Author: {article.author}</p>
            <p>Description: {article.description}</p>
            <p>Source: {article.source.name}</p>
            </div>
        ))}
      </div>
    );
  }