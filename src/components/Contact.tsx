import React, { useState } from "react";
import logo from "../assets/emporis_logo.webp";

const EMAIL = "info@emporishealthcare.com";

const { VITE_EMAILJS_SERVICE_ID: serviceId, VITE_EMAILJS_TEMPLATE_ID: templateId, VITE_EMAILJS_PUBLIC_KEY: publicKey } =
  import.meta.env;
/** EmailJS is optional; without keys the form falls back to the visitor's email app. */
const emailJs: { serviceId: string; templateId: string; publicKey: string } | null =
  serviceId && templateId && publicKey ? { serviceId, templateId, publicKey } : null;

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "mt-2 block w-full rounded-lg border border-purple-brand/20 bg-white px-3.5 py-3 text-base font-normal text-ink-deep transition-[border-color,box-shadow] duration-150 hover:border-purple-brand/35 focus:border-blue-health focus:ring-3 focus:ring-blue-health/15 focus:outline-none";

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
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3 border-b border-purple-brand/10 pb-5">
          <img src={logo} alt="Emporis logo" width={44} height={48} loading="lazy" className="h-8 w-auto" />
          <p className="font-display text-lg text-muted-plum">Emporis Health Care</p>
        </div>
      </div>
      <div className="mx-auto mt-12 grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20 lg:px-10">
        <div>
          <h2 className="font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-none font-normal tracking-[-0.02em] text-ink-deep">
            Connect With Us
          </h2>

          <dl className="mt-10 border-t border-purple-brand/10">
            <div className="border-b border-purple-brand/10 py-6">
              <dt className="text-sm font-medium text-muted-plum">Registered Address</dt>
              <dd className="mt-2 leading-relaxed text-ink-deep">
                Door No: 32/422, Rajeev Nagar Road,
                <br />
                Puthupallypuram, Edappally,
                <br />
                Kochi - 682024, Kerala, India
              </dd>
            </div>
            <div className="border-b border-purple-brand/10 py-6">
              <dt className="text-sm font-medium text-muted-plum">General Inquiry</dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex min-h-11 items-center text-lg break-all text-ink-deep underline decoration-purple-brand/25 underline-offset-4 transition-colors duration-150 hover:text-magenta-vibrant hover:decoration-magenta-vibrant"
                >
                  {EMAIL}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          aria-label="Enquiry"
          className="rounded-xl border border-purple-brand/10 bg-white p-6 md:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
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
              className="inline-flex min-h-12 cursor-pointer items-center rounded-lg bg-magenta-vibrant px-6 text-sm font-medium text-white transition-colors duration-150 hover:bg-purple-brand disabled:cursor-wait disabled:opacity-70"
            >
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
