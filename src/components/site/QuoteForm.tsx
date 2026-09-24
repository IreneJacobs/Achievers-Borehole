import { useState } from "react";
import { CheckCircle2, Loader2, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { propertyTypeOptions, quoteServiceOptions } from "@/data/services";
import { siteConfig, whatsappLink } from "@/config/site";

const KEY_PLACEHOLDER = "REPLACE_WITH_WEB3FORMS_ACCESS_KEY";

const fieldClass =
  "w-full rounded-md border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-teal-deep focus:ring-2 focus:ring-ring/25";
const labelClass = "mb-2 block text-sm font-semibold text-navy-deep";

export function QuoteForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const configured = siteConfig.web3formsAccessKey !== KEY_PLACEHOLDER;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!configured) {
      toast.error("Form not connected yet", {
        description:
          "Add your Web3Forms access key in src/config/site.ts to start receiving enquiries by email. You can use WhatsApp in the meantime.",
      });
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = (await response.json()) as { success?: boolean };
      if (!result.success) throw new Error("Submission rejected");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("idle");
      toast.error("Your request could not be sent", {
        description: "Please try again, or reach us directly on WhatsApp or by phone.",
      });
    }
  }

  if (status === "sent") {
    return (
      <div className="card-quiet p-8 text-center md:p-12">
        <CheckCircle2 className="mx-auto h-12 w-12 text-teal-deep" aria-hidden="true" />
        <h2 className="display-3 mt-5 text-navy-deep">Request received</h2>
        <p className="lede mx-auto mt-3 max-w-md">
          Thank you. We have your details and will be in touch to discuss your site and the next
          steps.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-teal mt-7"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-quiet p-6 md:p-9" noValidate={false}>
      <input type="hidden" name="access_key" value={siteConfig.web3formsAccessKey} />
      <input type="hidden" name="subject" value="New quote request — achieversborehole.com.ng" />
      <input type="hidden" name="from_name" value={siteConfig.name} />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Full Name
          </label>
          <input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Your full name" />
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            className={fieldClass}
            placeholder="e.g. 0803 000 0000"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="location">
            Location
          </label>
          <input
            id="location"
            name="location"
            required
            className={fieldClass}
            placeholder="Town / area in Ogun State"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="service">
            Service Required
          </label>
          <select id="service" name="service" required defaultValue={defaultService ?? ""} className={fieldClass}>
            <option value="" disabled>
              Select a service
            </option>
            {quoteServiceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="property">
            Property Type
          </label>
          <select id="property" name="property_type" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a property type
            </option>
            {propertyTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="details">
            Project Details
          </label>
          <textarea
            id="details"
            name="details"
            rows={5}
            className={fieldClass}
            placeholder="Tell us about the site, what the water is for, and anything already installed."
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "sending"} className="btn btn-accent w-full sm:w-auto">
          {status === "sending" ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="h-4 w-4" aria-hidden="true" />
          )}
          Request a Quote
        </button>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full sm:w-auto">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Or chat on WhatsApp
        </a>
      </div>

      {!configured && (
        <p className="mt-5 rounded-md border border-dashed border-accent/60 bg-accent/10 p-4 text-sm text-navy-deep">
          <strong>Setup note:</strong> add your Web3Forms access key in{" "}
          <code>src/config/site.ts</code> so submissions are delivered to{" "}
          {siteConfig.contact.email}.
        </p>
      )}
    </form>
  );
}
