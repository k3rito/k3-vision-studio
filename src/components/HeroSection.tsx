import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Image as ImageIcon } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating Elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-60"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow leading-tight">
              Creativity,{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Unleashed.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Leverage generative AI with a unique suite of tools to convey your ideas to the world.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button size="lg" variant="primary" className="text-lg px-8 py-4">
              <Sparkles className="mr-2 h-5 w-5" />
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              <Zap className="mr-2 h-5 w-5" />
              Developer API
            </Button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mt-16"
          >
            {[
              {
                title: "For Creators",
                description: "Create production-quality visual assets for your projects with unprecedented quality, speed, and style-consistency.",
                icon: ImageIcon,
              },
              {
                title: "For Teams",
                description: "Bring your team's best ideas to life at scale, with our intuitive AI-first creative suite designed for collaboration.",
                icon: Sparkles,
              },
              {
                title: "For Developers",
                description: "Experience content creation excellence with K3|AI's API. With unmatched scalability and brand customization.",
                icon: Zap,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card p-6 rounded-xl text-left group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <feature.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse-glow"></div>
    </section>
  );
};

export default HeroSection;