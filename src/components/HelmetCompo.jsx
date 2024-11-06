import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const HelmetCompo = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link
        rel="shortcut icon"
        href="../assets/favicon-16x16.png"
        type="image/x-icon"
      />
    </Helmet>
  );
};

export default HelmetCompo;
HelmetCompo.propTypes = {
  title: PropTypes.object,
};
