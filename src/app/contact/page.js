export const metadata = {
  title: "Contact Vestigo",
  description: "Corporate & Industrial Insurance Advisory – Contact Form",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f4f6ff] flex items-center justify-center py-16 px-4">

      {/* MAIN CARD */}
      <div className="
        w-full 
        max-w-5xl 
        bg-white 
        rounded-2xl 
        shadow-xl 
        grid 
        lg:grid-cols-2 
        md:grid-cols-2 
        grid-cols-1 
        overflow-hidden
      ">

        {/* LEFT SIDE — FORM */}
        <div className="px-6 sm:px-8 md:px-10 py-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1">
            Contact Us
          </h2>

          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Send your message and we’ll get back soon.
          </p>

          <form className="space-y-4 sm:space-y-3">

            {/* Name */}
            <div>
              <label className="text-xs text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="
                  mt-1 w-full 
                  px-3 py-2 
                  text-sm 
                  border rounded-md 
                  focus:ring-2 focus:ring-[#5b3ec2] 
                  outline-none
                "
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="text-xs text-gray-700 font-medium">Mobile Number</label>
              <input
                type="text"
                placeholder="Mobile Number"
                className="
                  mt-1 w-full 
                  px-3 py-2 
                  text-sm 
                  border rounded-md 
                  focus:ring-2 focus:ring-[#5b3ec2] 
                  outline-none
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
                className="
                  mt-1 w-full 
                  px-3 py-2 
                  text-sm 
                  border rounded-md 
                  focus:ring-2 focus:ring-[#5b3ec2] 
                  outline-none
                "
              />
            </div>

            {/* Subject */}
            <div>
              <label className="text-xs text-gray-700 font-medium">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="
                  mt-1 w-full 
                  px-3 py-2 
                  text-sm 
                  border rounded-md 
                  focus:ring-2 focus:ring-[#5b3ec2] 
                  outline-none
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-xs text-gray-700 font-medium">Message</label>
              <textarea
                rows="3"
                placeholder="Write your message..."
                className="
                  mt-1 w-full 
                  px-3 py-2 
                  text-sm 
                  border rounded-md 
                  focus:ring-2 focus:ring-[#5b3ec2] 
                  outline-none 
                  resize-none
                "
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                w-full 
                py-2 
                text-sm 
                bg-[#5b3ec2] 
                text-white 
                rounded-md 
                font-medium 
                hover:bg-[#4a2daf] 
                transition-all
              "
            >
              Send Message
            </button>

          </form>
        </div>

        {/* RIGHT SIDE — GRADIENT INFORMATION BOX */}
        <div className="
          bg-gradient-to-br 
          from-[#5b3ec2] 
          to-[#7c5df0] 
          text-white 
          p-8 
          sm:p-10 
          flex 
          flex-col 
          justify-center 
          items-center
        ">

          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4">
            💬
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Hello!</h2>

          <p className="text-center text-sm sm:text-base opacity-90 mb-6 max-w-xs">
            We're here to help with all insurance queries.
          </p>

          <div className="space-y-4 text-center text-sm sm:text-base">
            <div>
              <p className="font-semibold">📩 Email</p>
              <p className="opacity-90">support@vestigo.com</p>
            </div>

            <div>
              <p className="font-semibold">📞 Phone</p>
              <p className="opacity-90">+91 98765 43210</p>
            </div>

            <div>
              <p className="font-semibold">📍 Location</p>
              <p className="opacity-90">Pune, India</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
