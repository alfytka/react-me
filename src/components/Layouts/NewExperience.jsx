import Header from "../Fragments/Header/Header";
import ListExperience from "../Fragments/ListExperience/ListExperience";

const NewExperience = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto mt-10 mb-20 sm:my-20">
        <div className="sm:p-5 bg-gray-100 sm:border sm:border-gray-200 rounded-[1.25rem] max-sm:mx-0 max-lg:mx-5">
          <Header />
          <ListExperience />
        </div>
      </div>
    </>
  );
};

export default NewExperience;