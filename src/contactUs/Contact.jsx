import { useState } from "react";
import { object, string, z } from "zod";
import ContactInfo from "../components/contactInfo/ContactInfo";
import MySelect from "../components/mySelect/MySelect";
import { GoCommit } from "react-icons/go";

const contactSchema = z.object({
  name: z.string().min(3, "name must be 3 number"),
  email: z.string().email("please Enter your email"),
  subject: z.string().min(1, "chose your subject"),
  comment: z.string().min(5, "comment must be 5 number"),
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
    } else {
      setErrors({});
      alert("your form succes submit");
      console.log(" your form succes send");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Contact Info */}
        <div className="bg-gray-200 p-10 bg-gradient-to-t from-gray-300 to-white opacity-70">
          <ContactInfo />
        </div>

        {/* Contact Form */}
        <div className="p-10">
          <form
            className="border p-5 rounded-md border-gray-200"
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl font-bold text-gray-900">Contact us</h1>
            <p className="text-gray-800 mb-5">We’d love to hear from you!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex flex-col mb-5">
                <label className="font-semibold py-1 text-gray-900 text-lg">
                  Name
                </label>
                <input
                  className="border border-gray-200 text-gray-800 rounded-sm px-2 py-1 focus:outline-none hover:ring-2 ring-blue-500 duration-200"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col mb-5">
                <label className="font-semibold py-1 text-gray-900 text-lg">
                  Email
                </label>
                <input
                  className="border border-gray-200 text-gray-800 rounded-sm px-2 py-1 focus:outline-none hover:ring-2 ring-blue-500 duration-200"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>
            <MySelect
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
            />

            <div className="mb-5">
              <label className="font-semibold text-gray-900 text-lg">
                Comment
              </label>
              <textarea
                name="comment"
                className="w-full h-20 border text-gray-800 border-gray-200 p-2 rounded-md mt-2 focus:outline-none hover:ring-2 ring-blue-500 duration-300"
                value={formData.comment}
                onChange={handleChange}
              ></textarea>
              {errors.comment && (
                <p className="text-red-500 text-sm">{errors.comment}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 duration-300 px-5 py-2 text-white font-semibold rounded-full"
            >
              Send a message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
