/* eslint-disable @typescript-eslint/no-misused-promises */
import styles from './Contact.module.scss';
import { Button, Input, Separator } from '../../components';
import { Socials } from '../../components/socials/Socials';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const formSchema = z.object({
    name: z.string().min(1, 'Username is required').max(100),
    email: z.string().email('Invalid email').min(1, 'Email is required'),
    message: z.string().min(1, 'Message is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    return data;
  };
  return (
    <section className={styles.container}>
      <Separator />
      <div className={styles.contant__details}>
        <h2 className={styles.title}>Get in Touch</h2>
        <div className={styles.contant__info}>
          <h2 className={styles.desc}>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </h2>
          <div className={styles.socials}>
            <Socials isDark />
          </div>
        </div>
      </div>
      <Separator />
      <div className={styles.details}>
        <h2 className={styles.title}>Contact Me</h2>
        <div className={styles.details_form}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register}
              label="Name"
              name="name"
              placeholder="Jane Appleseed"
              errors={errors}
            />
            <Input
              label="Email Address"
              name="email"
              register={register}
              placeholder="email@example.com"
              errors={errors}
            />
            <Input
              register={register}
              isTextArea={true}
              label="Message"
              name="message"
              placeholder="How can I help?"
              errors={errors}
            />
            <Button
              type="submit"
              label="SEND MESSAGE"
              variant="secondary"
              disabled={!isValid}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
