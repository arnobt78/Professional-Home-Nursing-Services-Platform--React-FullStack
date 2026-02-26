/** 404 page: Shown when route does not match any defined route (App.jsx wildcard route). */
const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h2 className="font-sour sm:text-2xl xl:text-4xl font-bold text-primary/90 mb-4">
        Seite nicht gefunden !!!
      </h2>
      <h3 className="font-sour sm:text-xl text-2xl text-secondary mb-4">
        Die gesuchte Seite existiert nicht.
      </h3>
      <h4 className="font-sour sm:text-xl text-2xl  text-gray-600">
        Bitte kehren Sie zur{" "}
        <a
          href="/"
          className="text-green-700 underline font-medium hover:text-blue-700 transition duration-300"
        >
          Startseite
        </a>{" "}
        zurück.
      </h4>
    </div>
  );
};

export default PageNotFound;
