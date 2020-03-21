import * as React from "react";
import Layout from "../components/layouts";
import { NextPage } from "next";
import CustomInput from "../components/customInput";
import SocialIcons from "../components/SocialIcons";
import { useRouter } from "next/router";

const encode = (data: any): string => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const AboutPage: NextPage = () => {
  const router = useRouter();
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: any): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    console.log(values);

    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Contact from divinehycenth.com", ...values })
    })
      .then(() => {
        console.log("message sent");
        return setTimeout(() => {
          return router.push("/sent");
        }, 1000);
      })
      .catch(e => console.log(e));
    // TODO: Create a success redirect page
  };

  return (
    <Layout description="Feel free to contact if you want to hire me or you've got any suggestions." path="/contact" title="Divine Hycenth | Contact Me">
      <div className="container rounded-lg mx-auto h-full flex justify-between">
        <div className="lg:flex hidden items-center w-full p-20 ">
          <img src="/images/contact.svg" className="w-full " alt="Contact me" />
        </div>
        <div className="container p-6 md:px-16 mx-auto w-full shadow-lg custom-bg2 rounded-lg md:py-16">
          <h2 className="text-4xl font-sans font-bold text-white">
            Contact me
          </h2>

          <form
            // method="POST"
            // data-netlify="true"
            // netlify-honeypot="bot-field"
            name="Contact from divinehycenth.com"
            onSubmit={handleSubmit}
          >
            <div>
              <CustomInput
                value={values.name}
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                handleChange={handleChange}
              />
            </div>
            <div>
              <CustomInput
                handleChange={handleChange}
                value={values.email}
                name="email"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <textarea
                className="bg-white focus:outline-none bg-gray-200 h-24 focus:bg-white focus:shadow-xl rounded-sm py-2 px-4 block w-full appearance-none leading-normal"
                placeholder="Message"
                rows={5}
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
              />
            </div>
            <br />
            <div>
              <button
                type="submit"
                className="w-full border-white text-white border-2 hover:text-black  hover:bg-white my-4 rounded-sm px-7 font-sans hover:shadow-lg"
              >
                Send Message ➻
              </button>
            </div>
          </form>
          <br />
          <br />
          <SocialIcons />
        </div>
      </div>
    </Layout>
  );
};
export default AboutPage;
