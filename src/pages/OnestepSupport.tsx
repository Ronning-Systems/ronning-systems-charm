import { Seo } from "@/components/Seo";
import { EmailLink } from "@/components/EmailLink";
import { Mail, LifeBuoy, Trash2, ShieldQuestion, ExternalLink } from "lucide-react";

const OnestepSupport = () => {
  return (
    <>
      <Seo
        title="Support — Onestep by Ronning Systems"
        description="Support for the Onestep mobile app: contact, account deletion, data export, and troubleshooting for sign-in, CGM pairing, and Health Connect."
        path="/onestep/support"
      />
      <section className="container max-w-3xl py-20">
        <h1 className="text-4xl font-bold tracking-tight">Onestep Support</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: October 27, 2026</p>
        <p className="mt-4 text-sm text-muted-foreground">
          Onestep is built and operated by Ronning Systems, LLC. We are a small team and we read
          every message.
        </p>

        <div className="mt-8 space-y-6 text-muted-foreground">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Contact us</h2>
            <p className="mt-2 flex items-start gap-2">
              <Mail className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
              <span>
                Email{" "}
                <EmailLink
                  className="text-accent hover:underline"
                  subject="Onestep support"
                />
                . Please include your device model, operating system version, and the steps that
                reproduce the problem. We aim to reply within three business days.
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Delete your account and data</h2>
            <p className="mt-2 flex items-start gap-2">
              <Trash2 className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
              <span>
                You can delete your account and all associated data directly in the app: open{" "}
                <strong className="text-foreground">Profile &rarr; Account &rarr; Delete
                account</strong>. This removes your profile, glucose readings, nutrition logs, and
                voice recordings from our active systems; residual copies in encrypted backups are
                removed within 30 days. You do not need to contact us, and we do not retain your
                data after deletion except for de-identified statistics that cannot be traced back
                to you.
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Export your data</h2>
            <p className="mt-2 flex items-start gap-2">
              <LifeBuoy className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
              <span>
                If you would like a copy of your data, or a copy from before you deleted your
                account, email us and we will provide it. Note that continuous glucose readings are
                also available directly from your CGM vendor, which is usually the fastest route to
                a complete historical export.
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Troubleshooting</h2>
            <dl className="mt-2 space-y-3">
              <div>
                <dt className="font-semibold text-foreground">Sign-in loops or resets to onboarding</dt>
                <dd className="mt-1">
                  This is usually a stale session. Sign out of the app, then sign in again. If the
                  splash screen spins indefinitely, reinstalling the app after signing out will
                  clear the local session.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">No glucose data is appearing</dt>
                <dd className="mt-1">
                  Confirm that your CGM account is connected in{" "}
                  <strong className="text-foreground">Settings &rarr; Connections</strong> and that
                  the account is still authorised with your CGM vendor. Recent readings can take
                  several minutes to arrive.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Health data is missing on Android</dt>
                <dd className="mt-1">
                  Health Connect requires the Health Connect app, and each data type must be granted
                  individually. Open{" "}
                  <strong className="text-foreground">Settings &rarr; Permissions</strong> inside
                  Onestep to review the granted data types.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Voice features are not working</dt>
                <dd className="mt-1">
                  Voice check-in requires microphone access, and voice analysis may be temporarily
                  unavailable while we improve the service. If the feature is unavailable in your
                  app, the rest of Onestep works normally.
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Your privacy and your data</h2>
            <p className="mt-2 flex items-start gap-2">
              <ShieldQuestion className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
              <span>
                Our{" "}
                <a href="/onestep/privacy" className="text-accent hover:underline">
                  privacy policy
                </a>{" "}
                explains exactly what we collect and why, and our{" "}
                <a href="/onestep/terms" className="text-accent hover:underline">
                  terms of service
                </a>{" "}
                explain the medical disclaimer and the rules for using the app.
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Ronning Systems</h2>
            <p className="mt-2 flex items-start gap-2">
              <ExternalLink className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
              <span>
                Ronning Systems, LLC is based in Keizer, Oregon. For anything that is not about the
                app, including consulting and the Joblign platform, visit{" "}
                <a href="/" className="text-accent hover:underline">
                  ronning.systems
                </a>
                .
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnestepSupport;
