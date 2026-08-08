import ServiceLandingPage from "../../../components/ServiceLandingPage";
import { servicePages } from "../../../lib/services";

export default function CustomSoftwarePage() {
  return <ServiceLandingPage service={servicePages["custom-software-development"]} />;
}

