export const Form = () => (
  <form className="grid grid-cols-1 gap-y-6">
    <div>
      <label htmlFor="name" className="sr-only">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        autoComplete="name"
        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
        placeholder="Your name"
      />
    </div>
    <div>
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        type="text"
        name="email"
        id="email"
        autoComplete="email"
        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
        placeholder="Your email"
      />
    </div>
    <div>
      <label htmlFor="message" className="sr-only">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border border-gray-300 rounded-md"
        placeholder="Message"
        defaultValue=""
      />
    </div>

    <button type="submit" className="button-primary">
      Submit
    </button>
  </form>
)
