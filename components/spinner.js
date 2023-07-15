export default function Spinner() {
  return (
    <div className="flex">
      <div className="absolute border-blue-400 w-10 h-10 rounded-full border border-4 bg-transparent"></div>
      <div className="relative w-10 h-10 rounded-full border border-4 bg-transparent border-t-transparent animate-spin"></div>
    </div>
  );
}
