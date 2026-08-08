import ServiceLandingPage from "../../../components/ServiceLandingPage";
import { servicePages } from "../../../lib/services";

export default function SeoPage() {
  return <ServiceLandingPage service={servicePages.seo} />;
}
