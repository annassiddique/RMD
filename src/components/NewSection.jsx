/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const cards = [
  {
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=600',
    badge: 'FEATURED ARTICLE',
    title: 'LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.',
    date: '02 Oct 2025'
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600',
    badge: 'FEATURED ARTICLE',
    title: 'LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.',
    date: '31 July 2025'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
    badge: 'ARTICLE',
    title: 'LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.',
    date: '03 May 2025'
  }
]

export default function NewSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start mb-12">
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium text-gray-500 mb-4 tracking-wider">NEWS / MEDIA</p>
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 leading-tight">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            </h2>
            <button className="bg-gray-900 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
              EXPLORE
            </button>
          </div>

          {/* Cards Grid */}
          <div ref={ref} className="grid md:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative h-105 overflow-hidden cursor-pointer"
              >
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1.5 font-medium">
                    {card.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-xs font-medium mb-3 leading-relaxed uppercase">
                    {card.title}
                  </h3>
                  <p className="text-xs text-white/70">{card.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}