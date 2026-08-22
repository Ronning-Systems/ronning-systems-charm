import { Seo } from "@/components/Seo";

const Terms = () => {
  return (
    <>
      <Seo
        title="Terms of Service — Ronning Systems"
        description="Terms of service for Ronning Systems, LLC and the Joblign platform."
        path="/terms"
      />
      <section className="container max-w-3xl py-20">
        <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2026</p>

        <div className="mt-8 space-y-6 text-muted-foreground">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing ronning.systems or using the Joblign platform, you agree to these terms. If
              you do not agree, do not use the service.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Use of the Service</h2>
            <p className="mt-2">
              You may use Joblign to track job applications and generate resumes and cover letters for
              your own job search. You are responsible for the accuracy of the information you
              provide and for how you use generated content.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">AI-Generated Content</h2>
            <p className="mt-2">
              Joblign uses AI to generate resumes, cover letters, and analyses. Generated content is
              provided as a starting point and is not guaranteed to be accurate, complete, or
              suitable for any particular purpose. You are responsible for reviewing and editing
              generated content before use.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Subscriptions and Payments</h2>
            <p className="mt-2">
              Paid plans are billed through our payment processor. Fees are non-refundable except as
              required by law. We may change pricing with reasonable notice.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Limitation of Liability</h2>
            <p className="mt-2">
              The service is provided "as is" without warranties of any kind. To the maximum extent
              permitted by law, Ronning Systems, LLC is not liable for indirect, incidental, or
              consequential damages arising from your use of the service.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-2">
              Questions about these terms? Email{" "}
              <a href="mailto:Patrick@Ronning.Systems" className="text-accent hover:underline">
                Patrick@Ronning.Systems
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
