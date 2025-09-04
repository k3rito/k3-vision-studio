import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Sparkles, Settings, Download, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt to generate an image');
      return;
    }

    setIsGenerating(true);
    try {
      // Simulate AI generation delay
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Add sample generated images (in real app, these would come from AI API)
      const sampleImages = [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=512&h=512&fit=crop",
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=512&h=512&fit=crop",
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=512&h=512&fit=crop",
        "https://images.unsplash.com/photo-1614030424754-24d0eebd46b2?w=512&h=512&fit=crop"
      ];
      
      setGeneratedImages(sampleImages);
      toast.success('Images generated successfully!');
    } catch (error) {
      toast.error('Failed to generate images. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="generator" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            Generate Your{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Vision
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your ideas into stunning visuals with our advanced AI image generator.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Generator Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card p-6 space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Describe your vision
                </label>
                <Textarea
                  placeholder="A futuristic cityscape at sunset with flying cars and neon lights..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[120px] bg-muted/50 border-border"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Style
                  </label>
                  <select className="w-full p-2 rounded-md bg-muted/50 border border-border text-sm">
                    <option>Realistic</option>
                    <option>Artistic</option>
                    <option>Anime</option>
                    <option>Cyberpunk</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Resolution
                  </label>
                  <select className="w-full p-2 rounded-md bg-muted/50 border border-border text-sm">
                    <option>512x512</option>
                    <option>768x768</option>
                    <option>1024x1024</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  variant="primary" 
                  className="flex-1"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate
                    </>
                  )}
                </Button>
                <Button variant="outline" size="default">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Generated Images</h3>
              
              {isGenerating ? (
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-square rounded-lg bg-muted/30 animate-pulse flex items-center justify-center">
                      <RefreshCw className="h-8 w-8 text-muted-foreground animate-spin" />
                    </div>
                  ))}
                </div>
              ) : generatedImages.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {generatedImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="relative group"
                    >
                      <img
                        src={image}
                        alt={`Generated ${index + 1}`}
                        className="w-full aspect-square object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <Button variant="ghost" size="sm" className="text-white">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="aspect-square rounded-lg bg-muted/30 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Your generated images will appear here</p>
                  </div>
                </div>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageGenerator;