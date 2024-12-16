const Button = ({ className, label = "Request Invite" }) => {
  return (
    <div className={className}>
      <button
        style={{
          background: 'linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))',
          color: 'white',
        }}
        className="text-lg rounded-3xl px-6 py-2 font-sans"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
