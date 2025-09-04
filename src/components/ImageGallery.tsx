import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Download, Eye } from 'lucide-react';
import { Button } from './ui/button';

const ImageGallery = () => {
  // Sample images data - in real app this would come from API
  const sampleImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1542736705-53f0131d1e98?w=400&h=600&fit=crop",
      prompt: "Futuristic cyberpunk city at night with neon lights",
      likes: 234,
      downloads: 45,
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
      prompt: "Abstract digital art with flowing colors",
      likes: 189,
      downloads: 32,
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=600&fit=crop",
      prompt: "Mystical forest with magical glowing particles",
      likes: 456,
      downloads: 78,
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop",
      prompt: "Space exploration with alien landscapes",
      likes: 321,
      downloads: 56,
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
      prompt: "Ethereal portrait with dreamy atmosphere",
      likes: 567,
      downloads: 89,
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=600&fit=crop",
      prompt: "Mechanical robot with intricate details",
      likes: 298,
      downloads: 41,
    },
  ];

  return (
    <section id="gallery" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            Community{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing AI-generated images created by our community of artists and creators.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sampleImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative"
            >
              <div className="glass-card overflow-hidden rounded-xl">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.prompt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <Button size="sm" variant="ghost" className="text-white hover:text-primary">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:text-primary">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:text-primary">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Image Info */}
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {image.prompt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Heart className="h-3 w-3" />
                        <span>{image.likes}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Download className="h-3 w-3" />
                        <span>{image.downloads}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="px-8">
            Load More Creations
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageGallery;