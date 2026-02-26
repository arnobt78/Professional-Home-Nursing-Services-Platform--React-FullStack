/**
 * Cards: Homepage section "Unsere Leistungen auf einen Blick" – grid of service cards from cardData.
 * Clicking a card opens CardModal with full HTML details. Uses Framer Motion for scroll animations.
 */
import { motion } from "framer-motion";
import { useState } from "react";
import { slideUp } from "../../utility/animation";

import CardModal from "./CardModal";
import { cardsData } from "./cardData";

import CachedImage from "../CachedImage";

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpenModal = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="bg-slate-100">
      <div className="container py-24 px-6 lg:px-12 xl:px-44">
        {/* Section Title */}
        <h2 className="font-sour text-center text-primary/90 text-xl md:text-2xl font-medium mb-4">
          Zuhause in besten Händen
        </h2>
        <motion.h1
          variants={slideUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="font-sour text-3xl xl:text-4xl font-bold text-center text-primary/90 mb-12"
        >
          Unsere Leistungen auf einen Blick
        </motion.h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              variants={slideUp(index * 0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-primary/80 shadow-2xl rounded-2xl px-4 py-10 text-center flex flex-col justify-between items-center md:max-w-[350px] mx-auto min-h-[400px]"
            >
              {/* Icon */}
              <CachedImage
                src={card.image}
                alt={card.title}
                className="w-16 h-16 border-2 border-bg-white rounded-full object-contain p-4"
              />

              {/* Title */}
              <p className="text-lg text-white font-semibold my-4">
                {card.title}
              </p>

              {/* Description */}
              <p className="text-md text-white/80 leading-relaxed flex-grow my-4">
                {card.description}
              </p>

              {/* Button */}
              <button
                onClick={() => handleOpenModal(card)}
                className=" bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-200 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                WEITERLESEN
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <CardModal
          isOpen={!!selectedCard}
          onClose={handleCloseModal}
          cardData={selectedCard}
        />
      )}
    </div>
  );
};

export default Cards;
