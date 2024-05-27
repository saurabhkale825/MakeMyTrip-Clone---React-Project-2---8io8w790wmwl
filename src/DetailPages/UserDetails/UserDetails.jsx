import React, { useState } from "react";
import "./UserDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

function UserDetails() {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    pincode: "",
    state: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const user = localStorage.getItem("user-info");
  const userData = user ? JSON.parse(user) : null;
  const token = userData && userData.data ? userData.token : null;

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits")
      .required("Phone Number is Required"),
    gender: Yup.string().required("Gender is required"),
    pincode: Yup.string()
      .matches(/^\d{6}$/, "Pincode must be 6 digits")
      .required("Pincode is Required"),
    state: Yup.string().required("State is Required"),
    address: Yup.string().required("Address is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      navigate(`/payment/${itemId}`);
    } catch (error) {
      const validationErrors = {};
      error?.inner?.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  };

  return (
    <div className="user-detail">
      <h3 className="font-black text-lg font-medium text-left ml-4">
        User Details
      </h3>

      <div className="text-left user-details-text">
        <span className="font-black font-semibold">Important:</span>
        <span className="text-xs ml-2">
          Enter name as mentioned on your passport or Government approved IDs.
        </span>
      </div>

      <div className="userdetails-maindiv">
        <form className="lg:w-full h-full" onSubmit={handleSubmit}>
          <div className="flex gap-8 w-full p-4 indi-box">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-left mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                className="name-input"
                autoComplete="off"
                placeholder="Enter First Name"
                onChange={handleChange}
              />
              {errors.firstName && (
                <div className="error-message">{errors.firstName}</div>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-left mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="name-input"
                onChange={handleChange}
                value={formData.lastName}
                required
                autoComplete="off"
                placeholder="Enter Last Name"
              />
              {errors.lastName && (
                <div className="error-message">{errors.lastName}</div>
              )}
            </div>

            <div className="flex items-center gap-6 px-2">
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <div className="error-message">{errors.gender}</div>
              )}
            </div>
          </div>

          <div className="flex gap-8 w-full p-4 mt-2 indi-box">
            <div className="flex flex-col">
              <label htmlFor="mobile" className="text-left mb-2">
                Mobile Number
              </label>
              <input
                type="text"
                id="mobile"
                name="phoneNumber"
                maxLength="10"
                required
                value={formData.phoneNumber}
                className="name-input"
                autoComplete="off"
                placeholder="Enter 10 digit Number"
                onChange={handleChange}
                pattern="[0-9]*"
                inputMode="numeric"
              />
              {errors.phoneNumber && (
                <div className="error-message">{errors.phoneNumber}</div>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-left mb-2">
                E-mail Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="name-input"
                autoComplete="off"
                placeholder="Enter E-mail"
                onChange={handleChange}
              />
              {errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>
          </div>

          <div className="w-full p-4 mt-2 indi-box">
            <h3 className="flex mb-3 items-center">
              <span className="font-semibold text-lg">
                Your pincode and state
              </span>
              <span className="ml-1 text-xs">
                (Required for generating your invoice. You can edit this anytime
                later in your profile section.)
              </span>
            </h3>
            <div className="flex gap-8">
              <div className="flex flex-col">
                <label htmlFor="pincode" className="text-left mb-2">
                  PinCode
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  required
                  maxLength="6"
                  value={formData.pincode}
                  className="name-input"
                  autoComplete="off"
                  placeholder="Enter Pincode"
                  onChange={handleChange}
                  pattern="[0-9]*"
                  inputMode="numeric"
                />
                {errors.pincode && (
                  <div className="error-message">{errors.pincode}</div>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="state" className="text-left mb-2">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  required
                  className="name-input"
                  autoComplete="off"
                  placeholder="State"
                  onChange={handleChange}
                />
                {errors.state && (
                  <div className="error-message">{errors.state}</div>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="address" className="text-left mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  required
                  className="name-input"
                  autoComplete="off"
                  placeholder="Enter Address"
                  onChange={handleChange}
                />
                {errors.address && (
                  <div className="error-message">{errors.address}</div>
                )}
              </div>
            </div>
          </div>

          <div className="userdetails-submit-button" onClick={handleSubmit}>
            Continue
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserDetails;

