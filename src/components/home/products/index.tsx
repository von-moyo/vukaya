import React from 'react';
import { motion } from 'framer-motion';
import { Headphones1, Headphones2, Headphones3 } from '../../../assets';
import { Heart, ShoppingBag } from 'lucide-react';
import { useMobile } from '../../../hooks';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  variant: string;
  price: string;
  link: string;
  image: string;
  bgColor: string;
  bgGradient: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "MIDNIGHT RHAPSODY",
    variant: "(BLACK)",
    price: "$150.00",
    link: "https://vukaya.com/products/midnight-rhapsody",
    image: Headphones1,
    bgColor: "bg-cyan-100",
    bgGradient: "from-cyan-50 to-blue-100"
  },
  {
    id: 2,
    name: "VERDE VIBRANCE",
    variant: "(LEAF GREEN)",
    price: "$150.00",
    link: "https://vukaya.com/products/verde-vibrance-leaf-green",
    image: Headphones2,
    bgColor: "bg-gradient-to-br from-red-400 to-orange-500",
    bgGradient: "from-red-400 to-orange-500"
  },
  {
    id: 3,
    name: "ZENITH WHISPER",
    variant: "(WHITE)",
    price: "$150.00",
    link: "https://vukaya.com/products/zenith-whisper-white",
    image: Headphones3,
    bgColor: "bg-gray-50",
    bgGradient: "from-gray-50 to-gray-100"
  }
];

const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <Link to={product.link}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className={`relative overflow-hidden xl:h-[78%]`}
        >
          <img src={product.image} alt={`${product.name} product image`} className='w-full xl:h-full h-auto object-cover' />
          {index === 2 && (
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
            </div>
          )}
        </motion.div>
      </Link>

      <div className="text-center lg:px-[30px] px-2 pt-[25px] xl:pb-[55px] bg-[#f7f7f7] border-t border-[#80808033]">
        <motion.h3
          className="text-gray-800 font-bold lg:text-base text-sm line-clamp-1"
          whileHover={{ scale: 1.02 }}
        >
          {product.name} <span className="">{product.variant}</span>
        </motion.h3>
        <motion.p
          className="text-red-500 font-bold"
          whileHover={{ scale: 1.05 }}
        >
          {product.price}
        </motion.p>
        <motion.div className='xl:hidden flex justify-center pt-10 pb-6'>
          {index !== 2 && <motion.button className='sm:w-10 sm:h-10 w-[35px] h-[35px] rounded-full bg-[#ff0030] grid place-content-center'>
            <ShoppingBag className='text-white sm:w-5 w-4' />
          </motion.button>}
          {index !== 2 && <motion.button className='sm:w-10 sm:h-10 w-[35px] h-[35px] rounded-full bg-[#ff0030] grid place-content-center'>
            <Heart className='text-white sm:w-5 w-4' />
          </motion.button>}
        </motion.div>
      </div>
    </motion.div>
  );
};

const SpectrumVariations: React.FC = () => {
  const { isMobile: isTablet } = useMobile({ size: 768 });
  const { isMobile: isTablet2 } = useMobile({ size: 990 });
  const displayedProducts = isTablet ? products.slice(0, 2) : products;
  return (
    <section className="lg:py-24 py-16 lg:mt-6">
      <div className="max-w-[1295px] mx-auto xl:px-0 lg:px-12 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:mb-14 mb-8"
        >
          <h2 className="text-[24px] md:text-[30px] lg:text-[40px] font-bold text-gray-800 lg:mb-4 mb-2 tracking-tight">
            EXPLORE THE SPECTRUM
          </h2>
          <p className="font-semibold text-[#333] tracking-wider uppercase md:text-base text-sm">
            VARIATIONS
          </p>
          <div className="w-24 h-0.5 bg-red-500 mx-auto"></div>
        </motion.div>

        {/* Product Grid */}
        <div className={`grid ${isTablet ? 'grid-cols-2' : 'md:grid-cols-3 '} ${isTablet2 && 'max-w-[690px]'} lg:gap-8 gap-4 mx-auto`}>
          {displayedProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export { SpectrumVariations };