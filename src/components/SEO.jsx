import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <Helmet>
      <title>
        Rajesh Subramanian | Assistant General Manager – Packaging Development & SCM
      </title>

      <meta
        name="description"
        content="Rajesh Subramanian - Assistant General Manager – Packaging Development & SCM with 18+ years of expertise in FMCG, Pharma and Personal Care Packaging."
      />

      <meta
        name="keywords"
        content="Packaging Development, SCM, FMCG Packaging, Pharma Packaging, Packaging Manager, Packaging Innovation"
      />

      <meta property="og:type" content="website" />

      <meta
        property="og:title"
        content="Rajesh Subramanian Portfolio"
      />

      <meta
        property="og:description"
        content="18+ Years of Expertise in Packaging Development."
      />

      <meta
        property="og:image"
        content="/og-image.jpg"
      />

      <meta
        property="og:url"
        content="https://your-domain.com"
      />
    </Helmet>
  );
};

export default SEO;