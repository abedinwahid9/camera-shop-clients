const Title = ({ title }) => {
  return (
    <div className="py-5">
      <h2 className="md:text-3xl text-xl font-bold capitalize bg-gradient-to-b from-primary-color  to-optional-color text-transparent bg-clip-text ">
        {title}
      </h2>
      <div className="border-b-[1px] py-1 border-primary-color "></div>
    </div>
  );
};

export default Title;
