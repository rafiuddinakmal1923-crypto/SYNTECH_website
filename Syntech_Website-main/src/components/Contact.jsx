import { useState } from "react";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";

const Contact = (props) => {
  let ref_id = props.propRef;
  let id = props.id;
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    //change url when deploying
    const response = fetch("https://syntech-email.onrender.com/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      return res.json();
    });

    //this basically renders a notification telling the form submission status based on the promise lifecycle
    toast.promise(
      response,
      {
        loading: "Submitting your message...",
        success: "Contact Form Submitted!",
        error: "Failed to submit form. Please try again!",
      },
      {
        style: {
          zIndex: 999999,
          
        }
      },
    );

    try {
      const data = await response; //optional
      console.log(data); //optional
      setLoading(false);
      setFormData({ f_name: "", l_name: "", email: "", message: "" });
    } catch (err) {
      console.error("Submit error:", err);
      setLoading(false);
    }
  };

  return (
    <>
      <section>
        <div
          id={id}
          ref={ref_id}
          className="bg-black w-screen h-screen px-[50px] text-white"
        >
          <div className="pt-2 md:pt-[50px] lg:pt-[60px] h-screen flex justify-center items-center">
            <div className="px-4 w-200">
              <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent text-center">
                Contact
              </h1>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-6 md:gap-x-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      id="f_name"
                      name="f_name"
                      required
                      value={formData.f_name}
                      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#1BA98F] focus:bg-blue-500/5"
                      placeholder="First Name"
                      onChange={(e) =>
                        setFormData({ ...formData, f_name: e.target.value })
                      }
                    />
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="text"
                      id="l_name"
                      name="l_name"
                      required
                      value={formData.l_name}
                      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#1BA98F] focus:bg-blue-500/5"
                      placeholder="Last Name"
                      onChange={(e) =>
                        setFormData({ ...formData, l_name: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#1BA98F] focus:bg-blue-500/5"
                    placeholder="example@gmail.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#1BA98F] focus:bg-blue-500/5"
                    placeholder="Your Message..."
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-green-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  {isLoading ? (
                    <ClipLoader color="#ffffff" loading={isLoading} size={25} />
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
