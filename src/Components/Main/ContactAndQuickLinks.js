import classes from "./ContactAndQuickLinks.module.css";
import ContactForm from "./ContactForm";
import QuickLinks from "./QuickLinks";

const ContactAndQuickLinks = () => {
  return (
    <div className={classes.container}>
      <QuickLinks />
      <ContactForm />
    </div>
  );
};

export default ContactAndQuickLinks;
