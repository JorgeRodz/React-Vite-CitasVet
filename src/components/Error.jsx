const Error = ({ children }) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 py-1 rounded relative text-center mb-3 animate-fade-in-down"
      role="alert"
    >
      {children}
    </div>
  );
};

export default Error;
