import { Navigate } from "react-router-dom";
import { Seo } from "@/components/Seo";

const Consulting = () => (
  <>
    <Seo title="Consulting — Ronning Systems" description="This page has moved." path="/services" noindex />
    <Navigate to="/services" replace />
  </>
);

export default Consulting;