import { Heart, Users, HandHeart } from 'lucide-react';
import heroImage from '@/assets/hero-volunteers.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="স্বেচ্ছাসেবী কাজ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent font-medium mb-4 animate-fade-up opacity-0 stagger-1">
            প্রতিষ্ঠিত: ২০২০ খ্রিং
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up opacity-0 stagger-2 leading-tight">
            মানুষ মানুষের জন্য
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-up opacity-0 stagger-3 max-w-2xl mx-auto">
            আমরা তরুণরা বিশ্বাস করি — একসাথে হলে আমরা পারি। দরিদ্র পরিবার, অসহায় মানুষ, আর শীতার্ত শিশুদের পাশে দাঁড়াতে আমরা প্রতিজ্ঞাবদ্ধ।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 stagger-4">
            <a
              href="#help"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-soft hover:shadow-card"
            >
              <Heart size={20} />
              সাহায্য করুন
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 rounded-lg font-medium hover:bg-primary-foreground/20 transition-all duration-300"
            >
              আমাদের গল্প জানুন
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-2">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-primary-foreground">৫০+</p>
            <p className="text-sm text-primary-foreground/70">সক্রিয় সদস্য</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-2">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-primary-foreground">১০০০+</p>
            <p className="text-sm text-primary-foreground/70">সাহায্যপ্রাপ্ত</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-2">
              <HandHeart className="w-6 h-6 text-accent" />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-primary-foreground">৫০+</p>
            <p className="text-sm text-primary-foreground/70">ক্যাম্পেইন</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
