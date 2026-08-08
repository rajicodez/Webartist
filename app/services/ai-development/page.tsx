import ServiceLandingPage from "../../../components/ServiceLandingPage";
import { servicePages } from "../../../lib/services";

export default function AiDevelopmentPage() {
  return <ServiceLandingPage service={servicePages["ai-development"]} />;
}

