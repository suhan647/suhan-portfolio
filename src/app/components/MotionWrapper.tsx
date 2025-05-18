"use client";
import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionWrapper = ({ children, ...motionProps }: any) => {
  return <motion.div {...motionProps}>{children}</motion.div>;
};

export default MotionWrapper;
