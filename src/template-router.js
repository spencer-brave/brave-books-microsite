import { useParams } from "react-router-dom";
import PageRenderer from "./Pages/page-renderer";
import LP1KirkS3B9 from "./Pages/lp1-kirk-s3b9.json";

const pageMap = {
  "lp1-kirk-s3b9": LP1KirkS3B9
};

function TemplateRouter() {
  const { slug } = useParams();
  const data = pageMap[slug];

  if (!data) return <p>404 - Page not found</p>;

  return <PageRenderer sections={data.sections} />;
}

export default TemplateRouter;
