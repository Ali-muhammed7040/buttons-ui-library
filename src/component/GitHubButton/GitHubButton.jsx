import PropTypes from "prop-types";
import "./style.css";

function GitHubButton({
  children,
  variant = "default",
  size = "medium",
  disabled = false,
  onClick,
  className = "",
  color,
  bgColor,
  border,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  shadow,
  textShadow,
  borderRadius,
  width,
  height,
  textAlign,
  textDecoration,
  underline,
  lineThrough,
  style = {},
  ...props
}) {
  // Construct custom styles based on props
  const customStyles = {
    color: color || undefined,
    backgroundColor: bgColor || undefined,
    border: border || undefined,
    borderTop: borderTop || undefined,
    borderBottom: borderBottom || undefined,
    borderLeft: borderLeft || undefined,
    borderRight: borderRight || undefined,
    padding: padding || undefined,
    paddingTop: paddingTop || undefined,
    paddingBottom: paddingBottom || undefined,
    paddingLeft: paddingLeft || undefined,
    paddingRight: paddingRight || undefined,
    margin: margin || undefined,
    marginTop: marginTop || undefined,
    marginBottom: marginBottom || undefined,
    marginLeft: marginLeft || undefined,
    marginRight: marginRight || undefined,
    boxShadow: shadow || undefined,
    textShadow: textShadow || undefined,
    borderRadius: borderRadius || undefined,
    width: width || undefined,
    height: height || undefined,
    textAlign: textAlign || undefined,
    textDecoration: underline
      ? "underline"
      : lineThrough
      ? "line-through"
      : textDecoration || undefined,
    ...style, // Allows users to add any additional custom styles
  };

  return (
    <button
      className={`github-button ${variant} ${size} ${
        disabled ? "disabled" : ""
      } ${className}`}
      style={customStyles}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

GitHubButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "danger",
    "outlined",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  color: PropTypes.string, // Custom text color
  bgColor: PropTypes.string, // Custom background color
  border: PropTypes.string, // Custom border styling
  borderTop: PropTypes.string, // Custom border-top
  borderBottom: PropTypes.string, // Custom border-bottom
  borderLeft: PropTypes.string, // Custom border-left
  borderRight: PropTypes.string, // Custom border-right
  padding: PropTypes.string, // Custom padding
  paddingTop: PropTypes.string, // Custom padding-top
  paddingBottom: PropTypes.string, // Custom padding-bottom
  paddingLeft: PropTypes.string, // Custom padding-left
  paddingRight: PropTypes.string, // Custom padding-right
  margin: PropTypes.string, // Custom margin
  marginTop: PropTypes.string, // Custom margin-top
  marginBottom: PropTypes.string, // Custom margin-bottom
  marginLeft: PropTypes.string, // Custom margin-left
  marginRight: PropTypes.string, // Custom margin-right
  shadow: PropTypes.string, // Custom box-shadow styling
  textShadow: PropTypes.string, // Custom text-shadow styling
  borderRadius: PropTypes.string, // Custom border radius
  width: PropTypes.string, // Custom width
  height: PropTypes.string, // Custom height
  textAlign: PropTypes.string, // Custom text alignment
  textDecoration: PropTypes.string, // Custom text decoration
  underline: PropTypes.bool, // Underline text if true
  lineThrough: PropTypes.bool, // Line through text if true
  style: PropTypes.object, // Inline styles for further customization
};

export default GitHubButton;
