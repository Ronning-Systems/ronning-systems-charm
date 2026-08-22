import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";

const posts: Record<string, { title: string; date: string; body: string[] }> = {
  "getting-aligned-ats": {
    title: "Getting Aligned: How ATS Keyword Matching Actually Works",
    date: "2026-08-22",
    body: [
      "Applicant tracking systems (ATS) are the first reader of most resumes. Understanding how they parse and score your resume is the difference between getting seen and getting filtered out.",
      "Most ATS software extracts text from your resume and matches it against the job description's keywords — skills, tools, certifications, and role-specific terms. The match rate influences whether a human ever sees your application.",
      "The practical takeaway: mirror the language of the job description. If the posting says 'project management' and your resume says 'led initiatives', the ATS may not connect the two. Use the same terms the posting uses, where they genuinely apply.",
      "Joblign's ATS Expert agent does exactly this analysis for you — it reads the job description, scores your resume for keyword coverage, and tells you where the gaps are. That's the alignment we're building for.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : undefined;

  if (!post) {
    return (
      <section className="container py-20 text-center">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <Button asChild className="mt-8">
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </section>
    );
  }

  return (
    <>
      <Seo
        title={`${post.title} — Ronning Systems`}
        description={post.body[0]}
        path={`/blog/${slug}`}
      />
      <section className="container max-w-3xl py-20">
        <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Blog
        </Link>
        <h1 className="mt-6 text-4xl font-bold tracking-tight">{post.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{post.date}</p>
        <div className="mt-8 space-y-4 text-muted-foreground">
          {post.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogPost;
