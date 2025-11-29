// components/Spinner.jsx
export default function Spinner() {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-screen">
      <div
        className="animate-spin rounded-full h-16 w-16 border-4 border-t-indigo-600 border-b-indigo-600 border-transparent"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
