import { useState } from "react";

const EMAIL_USER = "Patrick";
const EMAIL_DOMAIN = "Ronning.Systems";

interface EmailLinkProps {
  className?: string;
  subject?: string;
  children?: React.ReactNode;
}

export const EmailLink = ({ className, subject, children }: EmailLinkProps) => {
  const [revealed, setRevealed] = useState(false);
  const href = `mailto:${EMAIL_USER}@${EMAIL_DOMAIN}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

  if (!revealed) {
    return (
      <button
        type="button"
        className={className}
        onClick={() => setRevealed(true)}
        aria-label="Reveal email address"
      >
        {children ?? "Reveal email"}
      </button>
    );
  }

  return (
    <a href={href} className={className}>
      {children ?? `${EMAIL_USER}@${EMAIL_DOMAIN}`}
    </a>
  );
};

export default EmailLink;
