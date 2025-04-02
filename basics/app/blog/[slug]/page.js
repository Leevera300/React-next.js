export default function BlogPostPage({ params }) {
    return (
        <main>
            <h1>Blog Post</h1>
            <p>🔥 Let&apos;s get started! 🔥</p>
            <p>{params.slug}</p>
        </main>
    );
}