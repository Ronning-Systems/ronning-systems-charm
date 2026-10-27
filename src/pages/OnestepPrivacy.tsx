import { Seo } from "@/components/Seo";
import { EmailLink } from "@/components/EmailLink";

const OnestepPrivacy = () => {
  return (
    <>
      <Seo
        title="Privacy Policy — Onestep by Ronning Systems"
        description="Privacy policy for the Onestep mobile app, including how continuous glucose, nutrition, and health data are collected, used, stored, and deleted."
        path="/onestep/privacy"
      />
      <section className="container max-w-3xl py-20">
        <h1 className="text-4xl font-bold tracking-tight">Onestep Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: October 27, 2026</p>
        <p className="mt-4 text-sm text-muted-foreground">
          This policy applies to the Onestep mobile application ("Onestep", "the app") published by
          Ronning Systems, LLC. It describes how we collect, use, store, share, and delete your data.
          It does not apply to the Joblign platform or to this website, which are covered by a
          separate{" "}
          <a href="/privacy" className="text-accent hover:underline">
            privacy policy
          </a>
          .
        </p>

        <div className="mt-8 space-y-6 text-muted-foreground">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Summary</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>We do not sell your personal data. We do not share it for advertising.</li>
              <li>We use your data to provide Onestep's features: glucose insights, nutrition analysis, and coaching.</li>
              <li>An AI model generates coaching responses. Your health data is processed on our own infrastructure to produce those responses.</li>
              <li>You can delete your account and all of your data from inside the app, at any time, without contacting us.</li>
              <li>Ronning Systems, LLC is not a covered entity under HIPAA, and Onestep is not a medical device.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">What we collect</h2>
            <p className="mt-2">Depending on the features you enable, Onestep may collect:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong className="text-foreground">Account information</strong> — your email address,
                user identifier, and authentication data, provided by our sign-in provider.
              </li>
              <li>
                <strong className="text-foreground">Glucose and health data</strong> — blood glucose
                readings from a connected continuous glucose monitor (for example Dexcom), and data you
                choose to import from HealthKit on iOS or Health Connect on Android, such as heart
                rate, weight, steps, and exercise.
              </li>
              <li>
                <strong className="text-foreground">Nutrition data</strong> — meals, food items, and
                nutrition values you log, and photographs you take or select for meal analysis.
              </li>
              <li>
                <strong className="text-foreground">Voice recordings</strong> — voice check-in
                recordings you submit, and passive voice clips you explicitly enable.
              </li>
              <li>
                <strong className="text-foreground">Account and usage data</strong> — goals, workout
                logs, hydration entries, and settings you configure.
              </li>
              <li>
                <strong className="text-foreground">Diagnostics</strong> — crash reports and error
                telemetry, used to fix defects.
              </li>
            </ul>
            <p className="mt-2">
              Onestep does not collect your precise location. We also do not embed GPS coordinates in
              the photographs you upload for meal analysis.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">How we use your data</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>To provide the features you use: glucose trends, meal analysis, coaching, and safety alerts.</li>
              <li>To generate coaching responses with an AI model running on our own infrastructure.</li>
              <li>To detect and warn about potentially dangerous glucose patterns, for example low-glucose events.</li>
              <li>To maintain, secure, and improve the app, and to troubleshoot defects.</li>
              <li>To comply with our legal obligations and enforce our terms.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">How we share your data</h2>
            <p className="mt-2">
              We do not sell your personal information, and we do not allow advertisers to track you
              in the app. We share data only with service providers that help us operate Onestep, and
              only for the purpose of providing that service:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Our authentication provider, which issues and validates sign-in tokens.</li>
              <li>Your continuous glucose monitor provider, to exchange glucose readings with your account.</li>
              <li>Our hosting and infrastructure providers, which store the app's data and run the AI model.</li>
              <li>Our payment and subscription processor, which handles billing. We never receive or store your full card number.</li>
              <li>Our analytics provider, which records anonymized usage events to help us improve the app.</li>
            </ul>
            <p className="mt-2">
              We may also disclose information if required by law, or in connection with a merger or
              sale of the business, in which case we will give notice before your information becomes
              subject to a different privacy policy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Not a covered entity under HIPAA</h2>
            <p className="mt-2">
              Onestep is a consumer wellness and coaching app. It is not a covered entity or business
              associate under the Health Insurance Portability and Accountability Act (HIPAA), and the
              app is not a medical device, is not cleared or approved by the U.S. Food and Drug
              Administration, and does not diagnose, treat, cure, or prevent any disease. If you need
              your glucose data for medical records or for a healthcare provider, export it directly
              from your continuous glucose monitor vendor.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">How long we keep your data</h2>
            <p className="mt-2">
              We keep your data while your account is active. If you delete your account, we delete
              your profile, glucose readings, nutrition logs, and voice recordings from our active
              systems. Residual copies in encrypted backups are removed within 30 days. Aggregated,
              de-identified statistics that cannot be traced back to you may be retained.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Your rights and choices</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Export or view your data from within the app.</li>
              <li>Delete your account and all associated data from within the app, at any time.</li>
              <li>Revoke HealthKit, Health Connect, camera, microphone, or notification permissions at any time in your device settings.</li>
              <li>Disconnect a continuous glucose monitor or other third-party integration at any time.</li>
            </ul>
            <p className="mt-2">
              If you are a California resident, you have the right to know what personal information we
              collect about you, the right to delete it, the right to correct it, and the right to
              opt out of its sale or sharing. We do not sell or share your personal information as
              those terms are defined by the California Consumer Privacy Act, so there is nothing to
              opt out of. To exercise any of these rights, use the in-app delete function or contact
              us using the details below.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Security</h2>
            <p className="mt-2">
              We encrypt data in transit using TLS, protect stored data with access controls, and
              restrict access to employees and contractors who need it to operate the service. No
              method of transmission or storage is completely secure, and we cannot guarantee
              absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Children</h2>
            <p className="mt-2">
              Onestep is not directed to children under 13, and we do not knowingly collect personal
              information from them. If you believe a child has provided us personal information,
              contact us and we will delete it.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Changes to this policy</h2>
            <p className="mt-2">
              We may update this policy as the app or the law changes. We will post the updated
              version on this page with a new "last updated" date, and, for material changes, notify
              you in the app before the change takes effect.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-2">
              Questions about this policy? Email{" "}
              <EmailLink
                className="text-accent hover:underline"
                subject="Onestep privacy policy"
              />
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnestepPrivacy;
