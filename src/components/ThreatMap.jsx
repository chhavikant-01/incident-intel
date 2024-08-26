import React from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from 'react-simple-maps';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const malwareThreats = [
    { category: 'Virus', latitude: 40.7128, longitude: -74.0060, intensity: 5 },   // New York, USA
    { category: 'Ransomware', latitude: 34.0522, longitude: -118.2437, intensity: 7 },  // Los Angeles, USA
    { category: 'Trojan', latitude: 41.8781, longitude: -87.6298, intensity: 6 },   // Chicago, USA
    { category: 'Spyware', latitude: 29.7604, longitude: -95.3698, intensity: 4 },  // Houston, USA
    { category: 'Worm', latitude: 32.7767, longitude: -96.7970, intensity: 3 },     // Dallas, USA
    { category: 'Adware', latitude: 51.5074, longitude: -0.1278, intensity: 2 },    // London, UK
    { category: 'Rootkit', latitude: 48.8566, longitude: 2.3522, intensity: 1 },    // Paris, France
    { category: 'Botnet', latitude: 52.5200, longitude: 13.4050, intensity: 8 },    // Berlin, Germany
    { category: 'Keylogger', latitude: 55.7558, longitude: 37.6176, intensity: 9 }, // Moscow, Russia
    { category: 'Phishing', latitude: 19.4326, longitude: -99.1332, intensity: 10 },// Mexico City, Mexico
    { category: 'Spyware', latitude: 35.6895, longitude: 139.6917, intensity: 4 },  // Tokyo, Japan
    { category: 'Virus', latitude: 39.9042, longitude: 116.4074, intensity: 5 },    // Beijing, China
    { category: 'Worm', latitude: -33.8688, longitude: 151.2093, intensity: 3 },    // Sydney, Australia
    { category: 'Ransomware', latitude: 28.6139, longitude: 77.2090, intensity: 7 }, // New Delhi, India
    { category: 'Trojan', latitude: 37.7749, longitude: -122.4194, intensity: 6 },  // San Francisco, USA
    { category: 'Phishing', latitude: 55.9533, longitude: -3.1883, intensity: 10 }, // Edinburgh, UK
    { category: 'Rootkit', latitude: 40.4168, longitude: -3.7038, intensity: 1 },   // Madrid, Spain
    { category: 'Botnet', latitude: 45.4654, longitude: 9.1859, intensity: 8 },     // Milan, Italy
    { category: 'Keylogger', latitude: -23.5505, longitude: -46.6333, intensity: 9 }, // São Paulo, Brazil
    { category: 'Adware', latitude: -34.6037, longitude: -58.3816, intensity: 2 },  // Buenos Aires, Argentina
    { category: 'Virus', latitude: 30.0444, longitude: 31.2357, intensity: 5 },     // Cairo, Egypt
    { category: 'Ransomware', latitude: -26.2041, longitude: 28.0473, intensity: 7 }, // Johannesburg, South Africa
    { category: 'Trojan', latitude: 13.7563, longitude: 100.5018, intensity: 6 },   // Bangkok, Thailand
    { category: 'Spyware', latitude: -1.2921, longitude: 36.8219, intensity: 4 },   // Nairobi, Kenya
    { category: 'Worm', latitude: 6.5244, longitude: 3.3792, intensity: 3 },        // Lagos, Nigeria
    { category: 'Phishing', latitude: -22.9068, longitude: -43.1729, intensity: 10 }, // Rio de Janeiro, Brazil
    { category: 'Rootkit', latitude: 59.9343, longitude: 30.3351, intensity: 1 },   // Saint Petersburg, Russia
    { category: 'Botnet', latitude: 60.1699, longitude: 24.9384, intensity: 8 },    // Helsinki, Finland
    { category: 'Keylogger', latitude: 35.6762, longitude: 139.6503, intensity: 9 },// Tokyo, Japan
    { category: 'Adware', latitude: 40.7306, longitude: -73.9352, intensity: 2 },   // Brooklyn, New York, USA
    { category: 'Virus', latitude: 41.9028, longitude: 12.4964, intensity: 5 },     // Rome, Italy
    { category: 'Ransomware', latitude: 37.9838, longitude: 23.7275, intensity: 7 }, // Athens, Greece
    { category: 'Trojan', latitude: -33.9249, longitude: 18.4241, intensity: 6 },   // Cape Town, South Africa
    { category: 'Spyware', latitude: 31.2304, longitude: 121.4737, intensity: 4 },  // Shanghai, China
    { category: 'Worm', latitude: 35.6895, longitude: 139.6917, intensity: 3 },     // Tokyo, Japan
    { category: 'Phishing', latitude: 37.5665, longitude: 126.9780, intensity: 10 },// Seoul, South Korea
    { category: 'Rootkit', latitude: 22.3964, longitude: 114.1095, intensity: 1 },  // Hong Kong
    { category: 'Botnet', latitude: 13.0827, longitude: 80.2707, intensity: 8 },    // Chennai, India
    { category: 'Keylogger', latitude: -36.8485, longitude: 174.7633, intensity: 9 }, // Auckland, New Zealand
    { category: 'Adware', latitude: 33.8688, longitude: 151.2093, intensity: 2 },   // Sydney, Australia
    { category: 'Virus', latitude: 25.2048, longitude: 55.2708, intensity: 5 },     // Dubai, UAE
    { category: 'Ransomware', latitude: 50.8503, longitude: 4.3517, intensity: 7 }, // Brussels, Belgium
    { category: 'Trojan', latitude: 59.3293, longitude: 18.0686, intensity: 6 },    // Stockholm, Sweden
    { category: 'Spyware', latitude: 53.3498, longitude: -6.2603, intensity: 4 },   // Dublin, Ireland
    { category: 'Worm', latitude: 48.1351, longitude: 11.5820, intensity: 3 },      // Munich, Germany
    { category: 'Phishing', latitude: 55.6761, longitude: 12.5683, intensity: 10 }, // Copenhagen, Denmark
    { category: 'Rootkit', latitude: 41.3851, longitude: 2.1734, intensity: 1 },    // Barcelona, Spain
    { category: 'Botnet', latitude: 52.3676, longitude: 4.9041, intensity: 8 },     // Amsterdam, Netherlands
    { category: 'Keylogger', latitude: 35.8617, longitude: 104.1954, intensity: 9 },// China (central location)
    { category: 'Adware', latitude: 28.6139, longitude: 77.2090, intensity: 2 },    // New Delhi, India
    { category: 'Virus', latitude: -22.9068, longitude: -43.1729, intensity: 5 },   // Rio de Janeiro, Brazil
];


const categoryColors = {
    'Virus': '#FF5733',
    'Worm': '#FFC300',
    'Trojan': '#28A745',
    'Ransomware': '#C70039',
    'Spyware': '#8E44AD',
    'Adware': '#3498DB',
    'Rootkit': '#900C3F',
    'Botnet': '#1ABC9C',
    'Keylogger': '#E67E22',
    'Phishing': '#F1C40F',
};

const ThreatMap = () => {
  return (
    <div className='mt-10 flex gap-2 justify-between items-center'>
      {/* Left side content */}
      <motion.div
        className="md:w-1/3 p-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-4">Global Cyber Threat Incidents</h1>
        <p className="text-lg text-gray-300 mb-2">
          This visualization showcases the distribution and intensity of cyber threat incidents across the globe. The size of each circle reflects the intensity of an incident, while the color indicates the category of the threat.
        </p>
        <p className="text-lg text-gray-300">
          Navigate through the map to explore how different types of cyber threats are spread worldwide. Each threat category is uniquely color-coded for clarity.
        </p>
      </motion.div>

      {/* Right side map */}
      <Card className="w-2/3 mx-auto bg-[#020817] rounded-lg shadow-lg">
        <CardContent>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <ComposableMap style={{ width: '100%', height: '600px' }}>
              <Geographies geography="/feature.json">
                {({ geographies }) =>
                  geographies.map(geo => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: { fill: "#D6D6DA", outline: "none" },
                        hover: { fill: "#007acc", outline: "none" },
                        pressed: { fill: "#E42", outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>
              {malwareThreats.map((threat, index) => (
                <Marker key={index} coordinates={[threat.longitude, threat.latitude]}>
                  <circle
                    r={Math.log(threat.intensity) * 5}
                    fill={categoryColors[threat.category]}
                    stroke='#FFF'
                    strokeWidth={1}
                  />
                </Marker>
              ))}
            </ComposableMap>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {Object.keys(categoryColors).map((category, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: categoryColors[category] }}></div>
                  <span className="text-white">{category}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThreatMap;