import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "../css/Contact.css";
import BackImageHome from "../components/BackImageHome";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  const onSubmit = async (data) => {
    try {
      setDisabled(true);

      // Leer el archivo de imagen y convertirlo a base64
      let base64Image = "";
      if (data.image && data.image[0]) {
        const file = data.image[0];
        base64Image = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file);
        });
      }

      // Enviar los datos a través de EmailJS
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          image: base64Image,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );

      toggleAlert("¡The form was submitted successfully!", "success"); // Mensaje de éxito
    } catch (e) {
      console.error(e);
      toggleAlert("Something went wrong.", "danger");
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <div className="contact">
      <div className="back-image-home">
        <BackImageHome />
      </div>
      <div className="contact-page">
        <div className="about-page">
          <div className="about-content">
            <h1>About Us</h1>
            <p>
              Stone Columns
            </p>
            <p>
              Since 2009, Stone Columns has been at the forefront of transforming spaces in Pompano Beach, FL, and beyond with unmatched stone craftsmanship.
            </p>
            <p>
              As a family-owned construction company with nearly two decades of combined experience, we pride ourselves on delivering a diverse range of services, including custom stone columns, fireplace transformations, structural protection, outdoor living space enhancements, and stone tile services.
            </p>
            <p>
              We take our time, focus on the details and clean up thoroughly, leaving you with a picturesque feature that you can love for years to come.
            </p>
            <address>📍 Location: Pompano Beach, Florida.</address>
            <p>
              📞 Contact: <a href="tel:9546924835">(954) 692-4835</a>
            </p>
            <p>
                Or complete our form <strong>here</strong> and I will contact
                you shortly
            </p>
          </div>
        </div>
        <div className="contact-content">
          <h1>Contact Us</h1>
          {alertInfo.display && (
            <div className={`alert ${alertInfo.type}`}>{alertInfo.message}</div>
          )}
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                    maxLength: {
                      value: 30,
                      message: "Use 30 characters or less",
                    },
                  })}
                  className="form-input"
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="error-message">{errors.name.message}</span>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                  className="form-input"
                  placeholder="Email address"
                />
                {errors.email && (
                  <span className="error-message">
                    Please enter a valid email address
                  </span>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "Please enter a subject",
                    },
                    maxLength: {
                      value: 75,
                      message: "Subject cannot exceed 75 characters",
                    },
                  })}
                  className="form-input"
                  placeholder="Subject"
                />
                {errors.subject && (
                  <span className="error-message">
                    {errors.subject.message}
                  </span>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <textarea
                  rows={3}
                  name="message"
                  {...register("message", { required: true })}
                  className="form-input"
                  placeholder="Message"
                ></textarea>
                {errors.message && (
                  <span className="error-message">Please enter a message</span>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="image" className="form-label">
                  Upload an illustrative image (optional)
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  {...register("image")}
                  className="form-input"
                  accept="image/*" // Asegurarse de aceptar solo imágenes
                />
              </div>
            </div>
            <button className="submit-btn" disabled={disabled} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
