import Image from "next/image";
import truncateText from "../app/utils";
import { articles, singleArticle } from "../utils/articles";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {singleArticle.map((sarticle) => {
        return (
          <div className="mt-2 flex grow flex-col gap-3 md:flex-row"  key={sarticle.id}>
            <div className="flex items-baseline justify-center p-3 md:w-2/5 md:px-18 md:py-6">
              {/* Add Hero Images Here */}
              <Image                
                src={sarticle.image}
                width={1000}
                height={760}
                className="hidden md:block"
                alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
            <div className="flex flex-col justify-center rounded-lg bg-gray-50 px-6 py-6 md:w-3/5 md:px-18">
              <p className={`antialiased text-gray-800 md:leading-normal`}>
                {sarticle.article}
              </p>
            </div>
          </div>
        );
      })}

      <div className="flex flex-wrap">
        {articles.map((article) => {
          return (
            <div className="w-1/5 p-4 gap-2" key={article.id}>
              <article className="bg-white rounded-lg shadow p-3">
                <Image
                  
                  src={article.image}
                  width={250}
                  height={190}
                  className="hidden md:block"
                  alt={article.title}
                />
                {/* Article content */}
                <p className={`antialiased text-gray-800 md:leading-normal`}>
                  {truncateText(article.article, 100)}
                </p>
              </article>
            </div>
          );
        })}
      </div>
    </main>
  );
}
