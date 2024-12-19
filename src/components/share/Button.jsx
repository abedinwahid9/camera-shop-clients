const Button = ({ title, width, logo }) => {
  return (
    <button
      className={`btn text-lg flex justify-center items-center text-white uppercase hover:bg-optional-color bg-secondary-color ${width}`}
    >
      {title} <div className="text-2xl font-bold">{logo ? logo : ""}</div>
    </button>
  );
};

export default Button;
