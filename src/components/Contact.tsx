import React, { useState } from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { LuMapPin, LuMail, LuSend } from "react-icons/lu";

const EMAIL = "info@emporishealthcare.com";

const { VITE_EMAILJS_SERVICE_ID: serviceId, VITE_EMAILJS_TEMPLATE_ID: templateId, VITE_EMAILJS_PUBLIC_KEY: publicKey } =
  import.meta.env;
/** EmailJS is optional; without keys the form falls back to the visitor's email app. */
const emailJs: { serviceId: string; templateId: string; publicKey: string } | null =
  serviceId && templateId && publicKey ? { serviceId, templateId, publicKey } : null;

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/emporishealthcare", icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com/emporishealthcare", icon: FaInstagram },
] as const;

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "mt-2 w-full rounded-2xl border border-purple-brand/15 bg-white px-4 py-3 text-ink-deep placeholder:text-muted-plum/60 transition-shadow focus:border-blue-health focus:shadow-[0_0_0_3px_rgba(38,61,153,0.15),0_0_18px_rgba(21,153,208,0.18)] focus:outline-none";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    if (!emailJs) {
      const body = `${message}\n\n— ${name} (${email})`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        emailJs.serviceId,
        emailJs.templateId,
        { from_name: name, reply_to: email, message },
        { publicKey: emailJs.publicKey }
      );
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-lavender-white py-[clamp(4.5rem,10vw,8rem)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20 lg:px-10">
        <div>
          <h2 className="font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-none font-light tracking-[-0.02em] text-ink-deep">
            Connect with us
          </h2>
          <p className="mt-5 max-w-[40ch] leading-relaxed text-muted-plum">
            Questions about our formulations, partnerships or distribution? Write to us and our Kochi team will reply.
          </p>

          <dl className="mt-10 space-y-7">
            <div className="flex gap-4">
              <dt className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-purple-brand ring-1 ring-purple-brand/10">
                <LuMapPin className="size-5" aria-hidden />
                <span className="sr-only">Registered address</span>
              </dt>
              <dd className="leading-relaxed text-ink-deep">
                Door No: 32/422, Rajeev Nagar Road,
                <br />
                Puthupallypuram, Edappally,
                <br />
                Kochi - 682024, Kerala, India
              </dd>
            </div>
            <div className="flex items-center gap-4">
              <dt className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-purple-brand ring-1 ring-purple-brand/10">
                <LuMail className="size-5" aria-hidden />
                <span className="sr-only">General inquiry</span>
              </dt>
              <dd>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-lg text-ink-deep underline decoration-magenta-vibrant/40 underline-offset-4 transition-colors hover:text-magenta-vibrant hover:decoration-magenta-vibrant"
                >
                  {EMAIL}
                </a>
              </dd>
            </div>
          </dl>

          <ul className="mt-10 flex gap-3" aria-label="Emporis on social media">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-purple-brand ring-1 ring-purple-brand/10 transition hover:bg-cyan-bright hover:text-white hover:ring-cyan-bright"
                >
                  <Icon className="size-4" aria-hidden />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-6 ring-1 ring-purple-brand/8 md:p-10">
          <h3 className="font-display text-3xl text-ink-deep">Send an enquiry</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-ink-deep">
              Name
              <input name="name" type="text" required autoComplete="name" className={fieldClass} />
            </label>
            <label className="block text-sm font-medium text-ink-deep">
              Email
              <input name="email" type="email" required autoComplete="email" className={fieldClass} />
            </label>
          </div>
          <label className="mt-5 block text-sm font-medium text-ink-deep">
            Message
            <textarea name="message" required rows={5} className={`${fieldClass} resize-y`} />
          </label>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-magenta-vibrant px-7 text-sm font-medium text-white shadow-lg shadow-magenta-vibrant/20 transition duration-300 ease-out-expo hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
            >
              <LuSend className="size-4" aria-hidden />
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p role="status" className="text-sm text-muted-plum">
              {status === "sent" && "Message sent. We'll reply to the email you gave."}
              {status === "error" && `Your message didn't send. Email us directly at ${EMAIL}.`}
              {status === "idle" && !emailJs && "Opens your email app with the message filled in."}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
