import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import PageRenderer from "./page-renderer";

function TemplateRouter() {
  const { slug } = useParams();
  const [page, setPage] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setPage(null);
    setError(false);
    console.log(process.env.REACT_APP_BRAVE_BACKEND_URL);
    fetch(`${process.env.REACT_APP_BRAVE_BACKEND_URL}/pages/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((json) => setPage(json))
      .catch(() => setError(true));
  }, [slug]);

  if (error) return <p>404 - Page not found</p>;
  if (!page) return null;

  return (
    <>
      <Helmet>
        <title>{page.title} | BRAVE Books</title>
      </Helmet>

      <PageRenderer sections={page.sections} />
    </>
  );
}

export default TemplateRouter;

