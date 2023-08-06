import styles from './Contact.module.scss';
import { Button, Separator } from '../../components';
import { Socials } from '../../components/socials/Socials';

const Contact = () => {
  return (
    <section className={styles.container}>
      <Separator />
      <div className={styles.contant__details}>
        <h2 className={styles.title}>Get in Touch</h2>
        <h2 className={styles.desc}>
          I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in a company
          in London. But I’m also happy to hear about opportunites that don’t
          fit that description. I’m a hard-working and positive person who will
          always approach each task with a sense of purpose and attention to
          detail. Please do feel free to check out my online profiles below and
          get in touch using the form.
        </h2>
        <div className={styles.socials}>
          <Socials isDark />
        </div>
      </div>
      <Separator />
      <div className={styles.details}>
        <h2 className={styles.title}>Contact Me</h2>
        <div className={styles.form}></div>
        <Button label="SEND MESSAGE" variant="secondary" />
      </div>
    </section>
  );
};

export default Contact;
