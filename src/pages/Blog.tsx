import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Seo } from "@/components/Seo";

const posts = [
  {
    slug: "getting-aligned-ats",
    title: "Getting Aligned: How ATS Keyword Matching Actually Works",
    excerpt:
      "A practical look at how applicant tracking systems parse resumes and what that means for how you should write yours.",
    date: "2026-08-22",
  },
];

const Blog = () => {
  return (
    <>
      <Seo
        title="Blog — Ronning Systems"
        description="Resources and writing from Ronning Systems on job search, ATS optimization, and building with AI."
        path="/blog"
      />
      <section className="container py-20">
        <h1 className="text-center text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Resources and writing on job search, ATS optimization, and building with AI.
        </p>
        <div className="mx-auto mt-12 grid max-w-3xl gap-6">
          {posts.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`}>
              <Card className="border-border transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                  <div className="text-sm text-muted-foreground">{p.date}</div>
                </CardHeader>
                <CardContent className="text-muted-foreground">{p.excerpt}</CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
