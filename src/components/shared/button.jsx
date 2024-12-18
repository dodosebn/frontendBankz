import { motion } from "framer-motion";
const Button = ({ className, label = "Request Invite" }) => {
  return (
    <div className={className}>
      <motion.button
      whileHover={{
        scale: 1.1,
        textShadow: '0px 0px 8px #fafafa',
        boxShadow: '0px 0px 8px #fafafa',
      }}
      transition={{type: 'spring', stiffness: 300}}
        style={{
          background: 'linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))',
          color: 'white',
        }}
        className="text-lg rounded-3xl px-6 py-2 font-sans hover:brightness-75"
      >
        {label}
      </motion.button>
    </div>
  );
};

export default Button;
