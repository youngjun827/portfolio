import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" w-full h-screen bg-[#ede7dd] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/483bb8b3-537b-4da3-a23e-a877299d1bd2"
        className="flex flex-col max-w-[600px] w-full "
      >
        <div className="pb-8">
          <p className="text-[#3e3e1f] text-4xl font-bold inline border-b-4 border-[#8a3918] border-600">
            Contact
          </p>
          <p className="text-[#636060] py-4">
            // Please submit the form below!
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-[#3e3e1f] border-2 border-[#3e3e1f] px-4 py-3 mt-8 mx-auto flex items-center hover:border-black hover:text-black hover:shadow-2xl">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

{
  /* 
<div>
            <a href="https://google.com">
              <button className="text-[#3e3e1f] group border-2 px-6 py-3 my-2 flex items-center border-[#3e3e1f] hover:border-black hover:text-black hover:shadow-2xl">
                stay comfy! ✿
                <span className="">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </a>
          </div>
        </div>
 */
}

export default Contact;
