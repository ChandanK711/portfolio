
import { useForm } from "react-hook-form";

 function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="contact-section">
      <div className="contact-left">
        <h2>Contact Me</h2>
        <p>I'd love to hear from you! Feel free to reach out.</p>
        <div className="social-icons">
          <a href="#">LinkedIn</a><br/>
          <a href="#">Email</a>
        </div>
      </div>

      <div className="contact-right">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="Your Name" required />
          <input {...register("email")} placeholder="Your Email" required />
          <textarea {...register("message")} placeholder="Your Message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact