import PropTypes from "prop-types";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center space-y-2">
      <h2 className="text-2xl">{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default Heading;

Heading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
