import { articles } from "@/data/articles";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export default function ArticlesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            <span className="text-[#00FF94]">/</span>Articles
          </h1>
          <p className="text-[#A1A1AA] text-lg">Thoughts, tutorials, and insights</p>
        </header>

        <div className="divide-y divide-[#222]">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="flex flex-col md:flex-row md:items-center justify-between py-6 group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs font-mono text-[#52525B] group-hover:text-[#00FF94] transition-colors">
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#52525B]">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <h2 className="text-lg font-medium text-[#EDEDED] group-hover:text-[#00FF94] group-hover:translate-x-2 transition-all">
                  {article.title}
                </h2>
                <p className="text-sm text-[#A1A1AA] mt-1 hidden md:block">{article.excerpt}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#52525B] group-hover:text-[#00FF94] transition-colors mt-4 md:mt-0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
