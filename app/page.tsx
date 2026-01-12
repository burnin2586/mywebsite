import Image from 'next/image';
import Link from 'next/link';

// 精选项目数据
const featuredProjects = [
  {
    id: 1,
    title: "智能天气应用",
    description: "使用React和天气API构建的响应式天气应用，支持实时天气查询和未来预报。",
    tags: ["React", "TypeScript", "API"],
    image: "/project-weather.jpg", // 稍后你需要添加图片
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 2,
    title: "电商平台设计",
    description: "完整的电商平台UI设计，包含购物车、支付流程和用户管理系统。",
    tags: ["UI/UX", "Figma", "React"],
    image: "/project-ecommerce.jpg",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 3,
    title: "个人博客系统",
    description: "使用Next.js和Markdown构建的静态博客系统，支持标签分类和搜索。",
    tags: ["Next.js", "Markdown", "Tailwind"],
    image: "/project-blog.jpg",
    links: {
      demo: "#",
      github: "#"
    }
  },
];

// 技能数据
const skills = [
  "React/Next.js", "TypeScript", "Tailwind CSS", 
  "UI/UX Design", "Node.js", "Git & GitHub",
  "Responsive Design", "API Integration"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Boning
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">首页</Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900">作品</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">文章</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">关于</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">联系</Link>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              你好，我是<span className="text-blue-600"> [Boning] </span>
              <br />
              <span className="text-3xl md:text-5xl text-gray-600">全栈开发者 & 设计师</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              我创建美观、实用的数字体验。专注于现代Web技术、用户体验设计和创新解决方案。
              热爱将创意转化为可交互的现实。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/projects" 
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                查看我的作品
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                联系我
              </Link>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-6xl">
              👨‍💻
            </div>
          </div>
        </div>
      </section>

      {/* 技能部分 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">我的技能</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white border rounded-full text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 精选作品部分 */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">精选作品</h2>
          <Link 
            href="/projects" 
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            查看全部 →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div 
              key={project.id}
              className="group border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* 项目图片 */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl">
                    {project.id === 1 && "☁️"}
                    {project.id === 2 && "🛍️"}
                    {project.id === 3 && "✍️"}
                  </div>
                </div>
              </div>
              
              {/* 项目内容 */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                {/* 技能标签 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* 项目链接 */}
                <div className="flex gap-4 pt-4 border-t">
                  <a 
                    href={project.links.demo} 
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    查看演示 →
                  </a>
                  <a 
                    href={project.links.github} 
                    className="text-gray-500 hover:text-gray-700 text-sm font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 最新文章 */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12">最新文章</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((item) => (
            <div key={item} className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {item === 1 ? "技术分享" : "设计思考"}
                </span>
                <span className="text-gray-500 text-sm">2024年3月</span>
              </div>
              <h3 className="text-xl font-bold mb-3 hover:text-blue-600 cursor-pointer">
                {item === 1 ? "Next.js 14新特性深度解析" : "现代UI设计原则与实践"}
              </h3>
              <p className="text-gray-600 mb-4">
                {item === 1 
                  ? "探索Next.js 14的最新功能，包括Server Actions、Partial Prerendering等，以及如何在实际项目中应用。"
                  : "分享我在UI设计中的心得，包括色彩搭配、布局原则和用户体验优化技巧。"
                }
              </p>
              <Link 
                href={`/blog/${item}`} 
                className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1"
              >
                阅读全文 →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">保持联系</h3>
              <p className="text-gray-400 max-w-md">
                对合作感兴趣？或者想聊聊技术和设计？
                随时通过以下方式联系我。
              </p>
            </div>
            <div className="flex gap-6">
              <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white">
                📧 Email
              </a>
              <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white">
                💻 GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-white">
                💼 LinkedIn
              </a>
              <a href="https://twitter.com/yourusername" className="text-gray-400 hover:text-white">
                🐦 Twitter
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} 你的名字. 保留所有权利.</p>
            <p className="mt-2 text-sm">使用 Next.js, Tailwind CSS 和 Vercel 构建</p>
          </div>
        </div>
      </footer>
    </main>
  );
}