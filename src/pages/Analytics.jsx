import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ThreatMap from '../components/ThreatMap';
import IncidentBarChart from '../components/BarChart';
import PieChartSeverity from '../components/PieChart';

const AnimatedComponent = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Triggers animation only once
    threshold: 0.2, // Percentage of the component visible before triggering animation
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

const Analytics = () => {
  return (
    <div className='flex flex-col gap-10'>
      {/* Animated Threat Map */}
      <AnimatedComponent delay={0}>
        <ThreatMap />
      </AnimatedComponent>

      {/* Animated Incident Bar Chart */}
      <AnimatedComponent delay={0.2}>
        <IncidentBarChart />
      </AnimatedComponent>

      {/* Animated Pie Chart */}
      <AnimatedComponent delay={0.2}>
        <PieChartSeverity />
      </AnimatedComponent>
    </div>
  );
};

export default Analytics;
