import Input from "../UI/Input";
import classes from "./ContactForm.module.css";
import emailjs from "emailjs-com";
import { useRef } from "react";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_16v6rva",
        "template_arep14h",
        form.current,
        "user_9hbFLbVDZICWSU57qsyvL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <form ref={form} className={classes.container} onSubmit={sendEmail}>
      <h2>Contact Us</h2>
      <div className={classes["name-mail"]}>
        <Input type="text" placeholder="Name" name="sender_name" />
        <Input type="text" placeholder="e-mail" name="mail" />
      </div>
      <div className={classes["num"]}>
        <Input type="text" placeholder="Number" name="number" />
      </div>
      <div className={classes["message"]}>
        <Input type="text" placeholder="Message" name="message" />
      </div>
      <button className={classes.button} type="submit">
        SEND
      </button>
    </form>
  );
};
export default ContactForm;
