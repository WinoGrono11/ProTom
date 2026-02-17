import React from 'react';
import Link from 'next/link';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "Why Choose Wooden Frame Houses",
            date: "2026-02-10",
            excerpt: "Discover the benefits of wooden frame construction...",
            slug: "why-wooden-frame"
        },
        {
            id: 2,
            title: "Sustainability in Modern Architecture",
            date: "2026-02-05",
            excerpt: "How wooden frame houses support eco-friendly living...",
            slug: "sustainability"
        }
    ];

    return (
        <div className="blog-container">
            <h1>Blog / Aktualności</h1>
            <div className="posts-list">
                {posts.map((post) => (
                    <article key={post.id} className="blog-post">
                        <h2>{post.title}</h2>
                        <p className="post-date">{post.date}</p>
                        <p>{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`}> 
                            <a>Read More</a>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blog;