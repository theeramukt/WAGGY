import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    image: null,
  });
  const handleChange = (event) => {
    console.log(event.target.value);
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }))
  };
  console.log(formData);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };
  const handleImageSubmit = async (event) => {
    console.log("click")
    try {
      const imageForm = new FormData();
      imageForm.append("file", formData.image);
  
      const imageResponse = await fetch("http://127.0.0.1:3342/api/idCard", {
        method: "POST",
        body: imageForm,
      });
  
      if (!imageResponse.ok) {
        throw new Error("Failed to upload image");
      }
  
      const imageData = await imageResponse.json();
  
      // แก้ไขส่วนนี้เพื่อนำข้อมูล JSON มาแสดงในฟอร์ม
      setFormData((prevData) => ({
        ...prevData,
        fullname: imageData.th_name,
      }));
      setUploadStatus(data.message);
    } catch (error) {
      console.error("Error:", error);
      setUploadStatus("Upload failed!");
    }
  };

  // useEffect(async() => {
  //   try {
  //     const imageForm = new FormData();
  //     imageForm.append("file", formData.image);
  
  //     const imageResponse = await fetch("http://127.0.0.1:3342/api/idCard", {
  //       method: "POST",
  //       body: imageForm,
  //     });
  
  //     if (!imageResponse.ok) {
  //       throw new Error("Failed to upload image");
  //     }
  
  //     const imageData = await imageResponse.json();
  
  //     // แก้ไขส่วนนี้เพื่อนำข้อมูล JSON มาแสดงในฟอร์ม
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       fullname: imageData.th_name,
  //     }));
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred while uploading image. Please try again.");
  //   }
  // }, [selectedImage]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://127.0.0.1:3342/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: formData.fullname,
        email: formData.email,
        password: formData.password,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      router.push("/signin")
    } else {
      console.error("Error", response.status);
    }
  };
  return (
    <section className="bg-sig">
      <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto ">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-48 h-48 mr-2 mt-2"
            src="cat_banner.png"
            alt="logo"
          />
        </a>

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="fullname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="waggy petshop"
                  onChange={handleChange}
                  value={formData.fullname}
                  required=""
                />
              </div>
              {/* <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="waggy"
                  required=""
                />
              </div> */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="waggy@company.com"
                  onChange={handleChange}
                  value={formData.email}
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleChange}
                  value={formData.password}
                  required=""
                />
              </div>
              {/* <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div> */}
              <div className="flex items-center justify-between">
                <div className="flex items-start justify-content: center flex-col">
                  {/* <form onSubmit={handleSubmit}> */}
                    <input type="file" onChange={handleImageChange} />
                    <br></br>
                    <div onClick={handleImageSubmit}>Uploading a picture of your ID Card is an alternative to filling out the form</div>
                    {uploadStatus && <p>{uploadStatus}</p>}
                  {/* </form> */}
                </div>
              </div>
              {/* <Link href="/signin" onClick={handleSubmit}> */}
              <div onClick={handleSubmit} >
                <button
                  type="submit"
                  className="bg-home rounded_home hover:bg-row  transition-colors w-full"
                >
                  Sign up
                </button>
              </div>
              {/* </Link> */}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{"  "}
                <Link href="/signin" >
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign in
                  </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}