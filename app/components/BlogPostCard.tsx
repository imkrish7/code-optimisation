import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  image: string;
  link: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden relative z-1">
      <div className="relative h-[350px]">
        <Image priority={true} src={post.image} alt={'post_image'} className="object-cover" fill={true} />
      </div>
      <div className="p-6 absolute z-10 bottom-0 left-0 bg-gray-600/50 backdrop-blur-[1px] ">
        <div className="flex items-center mb-4">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {post.date}
          </span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {post.readTime} min read
          </span>
        </div>
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
        <Link
          href={post.link}
          className="inline-flex items-center text-purple-600 hover:text-purple-700"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
