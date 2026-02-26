/** Magazine: Team/magazine-style section with member cards and images (if used in app). */
import { motion } from "framer-motion";

import MagazineImg1 from "../../assets/nurse-1.jpg";
import MagazineImg2 from "../../assets/nurse-2.jpg";
import MagazineImg3 from "../../assets/nurse-3.jpg";

import { FaCheckCircle } from "react-icons/fa";

const team = [
  {
    name: "Sarah Müller",
    title: "Registered Nurse",
    img: MagazineImg1, // Use imported image
  },
  {
    name: "Thomas Becker",
    title: "Senior Care Specialist",
    img: MagazineImg2, // Use imported image
  },
  {
    name: "Anna Schmidt",
    title: "Palliative Care Nurse",
    img: MagazineImg3, // Use imported image
  },
];

const services = [
  "24/7 In-Home Nursing Support",
  "Personalized Elderly Care Plans",
  "Post-Surgery Rehabilitation",
  "Palliative & Hospice Support",
];

const Magazine = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 py-24 md:px-16 max-w-7xl mx-auto space-y-16"
    >
      {/* Hero Section */}
      <section className="text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-primary mb-4"
        >
          Welcome to Sernitas Magazine
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our journey, meet our team, and explore the services that
          make us a trusted name in home nursing care.
        </p>
      </section>

      {/* Mission Section 1 */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src={MagazineImg2}
          alt="Company Mission"
          className="w-full rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Sernitas Care, we aim to provide compassionate, personalized care
            that empowers individuals and families. Our mission is to bring
            hospital-grade nursing into the comfort of your home.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-3xl font-semibold text-primary mb-6 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <FaCheckCircle className="text-primary text-2xl flex-shrink-0" />
              <p className="text-primary font-medium text-lg">{service}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-semibold text-primary mb-6 text-center">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-primary">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Section 2 */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-primary mb-4">
            More Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Sernitas Care, we aim to provide compassionate, personalized care
            that empowers individuals and families. Our mission is to bring
            hospital-grade nursing into the comfort of your home.
          </p>
        </motion.div>
        <motion.img
          src={MagazineImg1}
          alt="Company Mission"
          className="w-full rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* Unique Section */}
      <section className="bg-primary/10 rounded-3xl p-10 shadow-inner">
        <motion.h2
          className="text-3xl font-semibold text-primary mb-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          What Makes Us Unique
        </motion.h2>
        <motion.p
          className="text-gray-700 max-w-4xl mx-auto text-center text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          From tailored care plans to our responsive 24/7 support team, Sernitas
          Care is dedicated to offering peace of mind for families and
          respectful, expert care for individuals in need.
        </motion.p>
      </section>
    </motion.div>
  );
};

export default Magazine;
