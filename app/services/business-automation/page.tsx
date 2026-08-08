import ServiceLandingPage from "../../../components/ServiceLandingPage";
import { servicePages } from "../../../lib/services";

export default function BusinessAutomationPage() {
  return <ServiceLandingPage service={servicePages["business-automation"]} />;
}

