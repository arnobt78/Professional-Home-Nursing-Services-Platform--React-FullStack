/** Loading: Full-screen spinner with "Lädt..." text. Used as Suspense fallback or inline loading state. */
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-opacity-75"></div>
      <p className="ml-4 text-xl font-semibold text-primary">Lädt...</p>
    </div>
  );
};

export default Loading;
