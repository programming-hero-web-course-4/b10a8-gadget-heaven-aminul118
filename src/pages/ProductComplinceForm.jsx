import { useState } from "react";
import ContactUsForm from "../components/ContactUsForm";
import HelmetCompo from "../components/HelmetCompo";


const ProductComplianceForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productCode: "",
    complianceStatus: "",
    expirationDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add form submission logic here, e.g., send data to an API.
  };

  return (
    <div>
      <HelmetCompo title={`Complice`}></HelmetCompo>
      <div className="bg-[#9538E2] text-center text-white py-16">
        <div className="w-8/12 mx-auto space-y-2">
          <h1 className="text-3xl font-semibold">Complince</h1>
          <p>
            Ensures products meet legal standards, track compliance status, and
            expiration, helping businesses stay compliant, avoid risks, and
            maintain trust with regulators and consumers.
          </p>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4 text-center mt-8">
        Product Compliance Form
      </h2>
      <div className="w-8/12 mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          {/* Product Name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productName"
            >
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter product name"
              required
            />
          </div>

          {/* Product Code */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productCode"
            >
              Product Code
            </label>
            <input
              type="text"
              id="productCode"
              name="productCode"
              value={formData.productCode}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter product code"
              required
            />
          </div>

          {/* Compliance Status */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="complianceStatus"
            >
              Compliance Status
            </label>
            <select
              id="complianceStatus"
              name="complianceStatus"
              value={formData.complianceStatus}
              onChange={handleChange}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select Status</option>
              <option value="compliant">Compliant</option>
              <option value="non-compliant">Non-Compliant</option>
              <option value="pending">Pending Review</option>
            </select>
          </div>

          {/* Expiration Date */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="expirationDate"
            >
              Expiration Date
            </label>
            <input
              type="date"
              id="expirationDate"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ContactUsForm></ContactUsForm>
    </div>
  );
};

export default ProductComplianceForm;
