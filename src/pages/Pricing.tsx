import { Navigate } from "react-router-dom";
import { Seo } from "@/components/Seo";

const Pricing = () => (
  <>
    <Seo title="Pricing — Ronning Systems" description="This page has moved." path="/services" noindex />
    <Navigate to="/services" replace />
  </>
);

export default Pricing;