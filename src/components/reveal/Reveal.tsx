import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
  duration?: number;
  delay?: number;
  type?: 'up' | 'down' | 'right' | 'left';
  className?: string;
}

function Reveal({ children, width = 'fit-content', duration = 0.5,
  delay = 0.25, type = 'down', className = '',
}: Props) {
  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
    up: { opacity: 1, y: 200 },
  };

  const upVariants = {
    hidden: { opacity: 0, y: -75 },
    visible: { opacity: 1, y: 0 },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0 },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  const upControls = useAnimation();
  const rightControls = useAnimation();
  const leftControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      upControls.start('visible');
      rightControls.start('visible');
      leftControls.start('visible');
    } else {
      mainControls.start('hidden');
      upControls.start('hidden');
      rightControls.start('hidden');
      leftControls.start('hidden');
    }
  }, [isInView, mainControls, upControls, rightControls, leftControls]);

  if (type === 'up') {
    return (
      <motion.div
        className={ className }
        ref={ ref }
        style={ { position: 'relative', width, overflow: 'hidden' } }
        variants={ upVariants }
        initial="hidden"
        animate={ upControls }
        transition={ { duration, delay } }
      >
        {children}
      </motion.div>
    );
  }

  if (type === 'right') {
    return (
      <motion.div
        className={ className }
        ref={ ref }
        style={ { position: 'relative', width, overflow: 'hidden' } }
        variants={ rightVariants }
        initial="hidden"
        animate={ rightControls }
        transition={ { duration, delay } }
      >
        {children}
      </motion.div>
    );
  }

  if (type === 'left') {
    return (
      <motion.div
        className={ className }
        ref={ ref }
        style={ { position: 'relative', width, overflow: 'hidden' } }
        variants={ leftVariants }
        initial="hidden"
        animate={ leftControls }
        transition={ { duration, delay } }
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={ className }
      ref={ ref }
      style={ { position: 'relative', width, overflow: 'hidden' } }
      variants={ variants }
      initial="hidden"
      animate={ mainControls }
      transition={ { duration, delay } }
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
