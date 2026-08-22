import { Seo } from "@/components/Seo";

const Privacy = () => {
  return (
    <>
      <Seo
        title="Privacy Policy — Ronning Systems"
        description="Privacy policy for Ronning Systems, LLC and the Joblign platform."
        path="/privacy"
      />
      <section className="container max-w-3xl py-20">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2026</p>

        <div className="mt-8 space-y-6 text-muted-foreground">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Overview</h2>
            <p className="mt-2">
              Ronning Systems, LLC ("we", "us") operates ronning.systems and the Joblign platform.
              This policy describes what information we collect and how we use it.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Information You Provide</h2>
            <p className="mt-2">
              When you contact us, schedule a call, or use Joblign, you may provide your name, email
              address, job application data, resumes, and cover letters. We use this information to
              provide and improve the service, respond to inquiries, and generate the content you
              request.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Analytics</h2>
            <p className="mt-2">
              We use PostHog to understand how visitors use the site. This collects anonymized usage
              data such as pages visited and interactions. You can opt out of analytics cookies in
              your browser settings.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Data Sharing</h2>
            <p className="mt-2">
              We do not sell your personal information. We share data only with service providers
              necessary to operate the platform (hosting, analytics, payment processing) and only to
              the extent required to provide those services.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Data Retention</h2>
            <p className="mt-2">
              We retain your data for as long as your account is active or as needed to provide the
              service. You may request deletion of your data at any time by contacting us.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-2">
              Questions about this policy? Email{" "}
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

export default Privacy;
