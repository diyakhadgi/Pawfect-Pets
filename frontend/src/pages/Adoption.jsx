import  { useState } from "react";
import Navbar from "../components/Navbar";

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    ownsPet: "",
    homeType: "",
    experience: "",
    timeAtHome: "",
    willingToTrain: "",
  });

  const [canSeePets, setCanSeePets] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Debugging: log the form data

    // Check conditions for showing pets
    const isEligible =
      formData.ownsPet === "yes" &&
      formData.homeType === "own" &&
      formData.experience === "yes" &&
      formData.timeAtHome === "moreThan4Hours" &&
      formData.willingToTrain === "yes";

    console.log("Is Eligible:", isEligible); // Debugging: log eligibility check result

    setCanSeePets(isEligible);
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Adoption Application Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">
              Do you currently own a pet?
            </label>
            <label>
              <input
                type="radio"
                name="ownsPet"
                value="yes"
                onChange={handleChange}
                required
              />{" "}
              Yes
            </label>
            <label className="ml-4">
              <input
                type="radio"
                name="ownsPet"
                value="no"
                onChange={handleChange}
                required
              />{" "}
              No
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Do you own or rent your home?</label>
            <label>
              <input
                type="radio"
                name="homeType"
                value="own"
                onChange={handleChange}
                required
              />{" "}
              Own
            </label>
            <label className="ml-4">
              <input
                type="radio"
                name="homeType"
                value="rent"
                onChange={handleChange}
                required
              />{" "}
              Rent
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Do you have experience with pets?</label>
            <label>
              <input
                type="radio"
                name="experience"
                value="yes"
                onChange={handleChange}
                required
              />{" "}
              Yes
            </label>
            <label className="ml-4">
              <input
                type="radio"
                name="experience"
                value="no"
                onChange={handleChange}
                required
              />{" "}
              No
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              How many hours a day will the dog be left alone?
            </label>
            <label>
              <input
                type="radio"
                name="timeAtHome"
                value="moreThan4Hours"
                onChange={handleChange}
                required
              />{" "}
              More than 4 hours
            </label>
            <label className="ml-4">
              <input
                type="radio"
                name="timeAtHome"
                value="lessThan4Hours"
                onChange={handleChange}
                required
              />{" "}
              Less than 4 hours
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              Are you willing to train your new pet?
            </label>
            <label>
              <input
                type="radio"
                name="willingToTrain"
                value="yes"
                onChange={handleChange}
                required
              />{" "}
              Yes
            </label>
            <label className="ml-4">
              <input
                type="radio"
                name="willingToTrain"
                value="no"
                onChange={handleChange}
                required
              />{" "}
              No
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Submit
          </button>
        </form>

        {canSeePets && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Pet List</h3>
            {/* Display pet lists here */}
            <ul>
              <li>Dog 1</li>
              <li>Dog 2</li>
              <li>Dog 3</li>
              {/* Add more dog details */}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default AdoptionForm;
