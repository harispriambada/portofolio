import { animate, motion } from "framer-motion";

const stairAnimation = {
  initial: {
    // top: "0%",
    left: "0%",
  },
  animate: {
    left: "100%",
  },
  exit: {
    left: "0%",
  },
};

const reverseIndex = (index) => {
  const totalSteps = 5;
  return totalSteps - index - 1;
};
function Stairs() {
  return (
    <>
      {[...Array(1)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white/20 relative"
          />
        );
      })}
    </>
  );
}

export default Stairs;
