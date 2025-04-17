export default function MySelect({ value, onChange, error }) {
  return (
    <div className="flex flex-col mb-5">
      <label className="font-semibold text-gray-900 text-lg py-2">
        Subject
      </label>
      <select
        name="subject"
        className="border border-gray-200 p-2 rounded-md text-gray-800"
        value={value}
        onChange={onChange}
      >
        <option value="">Choose a subject</option>
        <option value="feedback">Feedback</option>
        <option value="support">Support</option>
        <option value="other">Other</option>
      </select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
