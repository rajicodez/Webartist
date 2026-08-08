import ServiceLandingPage from "../../../components/ServiceLandingPage";
import { servicePages } from "../../../lib/services";

export default function WebApplicationPage() {
  return <ServiceLandingPage service={servicePages["web-application-development"]} />;
}

