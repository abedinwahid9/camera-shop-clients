const TestimonitalsCard = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="rounded-full flex items-center justify-center w-40 h-40  bg-secondary-color">
        <img
          className="rounded-full w-36 h-36"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO17hg6KvLlweeZWN0LCEdi-OXM9qGpbQ9w&s"
          alt="profile"
        />
      </div>
      <div className="py-2 flex flex-col justify-center items-center">
        <p className="text-2xl font-bold capitalize text-secondary-color">
          jhon deo
        </p>
        <p className="text-center w-1/2 text-text-color">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quo
          totam cumque possimus explicabo, voluptatibus magnam quos blanditiis
          consequuntur adipisci ab porro accusantium autem minus quam esse,
          commodi id corporis exercitationem provident! Maiores quidem la
        </p>
      </div>
    </div>
  );
};

export default TestimonitalsCard;
