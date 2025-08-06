import { IoMail, IoCall, IoLogoWhatsapp } from "react-icons/io5";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        05. What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        If you need more about me, you can call me anytime. My inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </p>

      {/* Container untuk ikon-ikon kontak */}
      <div className="flex flex-row gap-6 mt-6">
        {/* Ikon Email */}
        <a
          href="mailto:amlabar14@gmail.com"
          aria-label="Email"
          className="w-16 h-16 border border-textGreen rounded-full flex items-center justify-center text-textGreen hover:bg-hoverColor duration-300 cursor-pointer"
        >
          <IoMail className="text-3xl" />
        </a>

        {/* Ikon Telepon */}
        <a
          href="tel:085174195354"
          aria-label="Phone"
          className="w-16 h-16 border border-textGreen rounded-full flex items-center justify-center text-textGreen hover:bg-hoverColor duration-300 cursor-pointer"
        >
          <IoCall className="text-3xl" />
        </a>

        {/* Ikon WhatsApp */}
        <a
          href="https://wa.me/6285174195354"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-16 h-16 border border-textGreen rounded-full flex items-center justify-center text-textGreen hover:bg-hoverColor duration-300 cursor-pointer"
        >
          <IoLogoWhatsapp className="text-3xl" />
        </a>
      </div>
    </section>
  );
};

export default Contact;