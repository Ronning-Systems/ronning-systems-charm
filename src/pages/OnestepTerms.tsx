import { Seo } from "@/components/Seo";
import { EmailLink } from "@/components/EmailLink";

const OnestepTerms = () => {
  return (
    <>
      <Seo
        title="Terms of Service — Onestep by Ronning Systems"
        description="Terms of service for the Onestep mobile app, including the medical disclaimer, acceptable use, subscription terms, and limitation of liability."
        path="/onestep/terms"
      />
      <section className="container max-w-3xl py-20">
        <h1 className="text-4xl font-bold tracking-tight">Onestep Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: October 27, 2026</p>
        <p className="mt-4 text-sm text-muted-foreground">
          These terms govern your use of the Onestep mobile application ("Onestep", "the app")
          published by Ronning Systems, LLC. Our handling of your personal information is described
          in the{" "}
          <a href="/onestep/privacy" className="text-accent hover:underline">
            Onestep Privacy Policy
          </a>
          .
        </p>

        <div className="mt-8 space-y-6 text-muted-foreground">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Medical disclaimer</h2>
            <p className="mt-2">
              Onestep is a wellness and coaching application. It is not a medical device, it is not
              cleared or approved by the U.S. Food and Drug Administration, and it does not
              diagnose, treat, cure, or prevent any disease.
            </p>
            <p className="mt-2">
              Guidance, suggestions, coaching, and alerts provided by Onestep are general information
              based on the data you choose to share. They are not medical advice, and they are not a
              substitute for the judgement of your doctor or other licensed clinician. Always consult
              your healthcare provider before changing your diet, exercise routine, or diabetes
              medication.
            </p>
            <p className="mt-2">
              If you are experiencing a medical emergency, call your local emergency number
              immediately. If you use a continuous glucose monitor and feel unwell, always confirm
              the reading with a fingerstick test before acting on it. Glucose readings from a
              continuous glucose monitor may differ from a fingerstick measurement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Acceptance of terms</h2>
            <p className="mt-2">
              By creating an account or using Onestep, you agree to these terms and to our{" "}
              <a href="/onestep/privacy" className="text-accent hover:underline">
                privacy policy
              </a>
              . If you do not agree, do not use the app. If you use Onestep on behalf of someone
              else, you represent that you have the authority to do so and that you accept these
              terms on their behalf.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Eligibility and your account</h2>
            <p className="mt-2">
              You must be at least 18 years old to create an account. You are responsible for
              safeguarding your sign-in credentials and for all activity that occurs under your
              account. Tell us promptly if you suspect unauthorized access. You may not create
              accounts on behalf of others, resell access, or attempt to circumvent limits on the
              service.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Third-party integrations</h2>
            <p className="mt-2">
              Onestep can connect to continuous glucose monitors, Apple Health, Health Connect, and
              other services you authorize. Those services are operated by third parties, are
              governed by their own terms and privacy policies, and we do not control their
              availability, accuracy, or continued operation. We are not responsible for data you
              share with them.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Your content and conduct</h2>
            <p className="mt-2">
              You keep all rights in the meals, photos, voice recordings, and other content you
              submit. You grant us a limited licence to host, process, and display that content to
              provide and improve the app. You agree not to submit content that is unlawful, that
              infringes someone else's rights, or that you do not have the right to share, and not
              to use the app to harass others or to attempt to disrupt the service.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Artificial intelligence</h2>
            <p className="mt-2">
              Coaching responses are generated by a machine-learning model and may be incomplete or
              incorrect. The app includes automated safety checks intended to flag dangerous
              situations, but these checks cannot replace clinical judgement or a medical
              professional. Review any output before acting on it.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Subscriptions and payments</h2>
            <p className="mt-2">
              Some features require a paid subscription. Subscriptions are purchased through the
              Apple App Store or Google Play and are billed by the store in accordance with its
              terms. The subscription renews automatically at the disclosed interval until you
              cancel it, and you can cancel through your device's store settings. We do not offer
              refunds except where required by law or as stated on the purchase screen. Prices may
              change; we will give notice before a change affects a renewal.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Termination</h2>
            <p className="mt-2">
              You may delete your account and stop using the app at any time. We may suspend or
              terminate your access if you materially breach these terms, for example by abusing the
              service or infringing the rights of others. When your account is terminated, your
              access to the paid subscription ends and we will delete your data as described in the
              privacy policy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Disclaimers</h2>
            <p className="mt-2">
              The app is provided "as is" and "as available" without warranties of any kind, whether
              express or implied, including any implied warranty of merchantability, fitness for a
              particular purpose, or non-infringement. We do not warrant that the app will be
              uninterrupted, error-free, or that glucose readings, analyses, or coaching output will
              be accurate, complete, or suitable for any purpose.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Limitation of liability</h2>
            <p className="mt-2">
              To the maximum extent permitted by law, Ronning Systems, LLC and its officers,
              employees, and agents will not be liable for indirect, incidental, special, or
              consequential damages, or for lost profits, lost data, or harm to your health, arising
              from your use of the app or from any content it provides. Nothing in these terms
              excludes liability that cannot lawfully be excluded, including for fraud, and nothing
              in these terms limits your rights under applicable consumer protection law.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Indemnity</h2>
            <p className="mt-2">
              You agree to indemnify and hold harmless Ronning Systems, LLC from any claim or demand,
              including reasonable legal fees, arising from content you submit, your use of the app in
              violation of these terms, or your violation of the rights of a third party.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Governing law</h2>
            <p className="mt-2">
              These terms are governed by the laws of the State of Oregon, United States, without
              regard to conflict-of-law principles. The state and federal courts located in Marion
              County, Oregon have exclusive jurisdiction over any dispute, except that residents of
              California may bring claims in their own county.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Changes</h2>
            <p className="mt-2">
              We may update these terms. We will post the updated version on this page with a new
              "last updated" date and, for material changes, notify you in the app before they take
              effect. Continuing to use the app after that notice means you accept the changes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-2">
              Questions about these terms? Email{" "}
              <EmailLink
                className="text-accent hover:underline"
                subject="Onestep terms of service"
              />
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnestepTerms;
