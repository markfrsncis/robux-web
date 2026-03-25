import Button from '../components/Button';

export default function Contact() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-slate-600">Let’s work together. Send a quick message below.</p>

      <form className="space-y-4 rounded-lg border border-slate-200 bg-white p-6">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
            Name
          </label>
          <input id="name" type="text" className="w-full rounded-md border border-slate-300 px-3 py-2" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input id="email" type="email" className="w-full rounded-md border border-slate-300 px-3 py-2" />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea id="message" rows="5" className="w-full rounded-md border border-slate-300 px-3 py-2" />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
}
