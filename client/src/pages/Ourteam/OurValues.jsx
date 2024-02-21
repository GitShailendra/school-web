import coreValues from "../../assets/Images/OutTeamImages/core_values_new_page-0001.jpg";

const OurValues = () => {
  return (
    <div className="w-[90%] mx-auto py-20">
      <h2 className="text-center text-xl sm:text-2xl uppercase md:text-3xl text-textSecondary font-semibold">
        Our Values
      </h2>
      <img
        src={coreValues}
        alt=""
        className="w-full md:w-[80%] lg:w-[70%] mx-auto"
      />
    </div>
  );
};

export default OurValues;