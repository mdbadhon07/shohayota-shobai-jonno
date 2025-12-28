import { Heart, Users, HandHelping, ArrowRight } from 'lucide-react';

const helpOptions = [
  {
    icon: Heart,
    title: 'এককালীন দান করুন',
    description: 'যেকোনো পরিমাণ দান আমাদের কাজে সাহায্য করে। আপনার ছোট অবদানও কারো জীবনে বড় পরিবর্তন আনতে পারে।',
    action: 'দান করুন',
    color: 'primary',
  },
  {
    icon: Users,
    title: 'মাসিক সদস্য হন',
    description: 'প্রতি মাসে সামান্য অবদান রেখে আমাদের পরিবারের অংশ হয়ে যান। নিয়মিত সাহায্য আমাদের কাজ সচল রাখে।',
    action: 'সদস্য হন',
    color: 'secondary',
  },
  {
    icon: HandHelping,
    title: 'স্বেচ্ছাসেবক হন',
    description: 'আপনার সময় ও শ্রম দিয়ে আমাদের পাশে থাকুন। মাঠপর্যায়ে কাজ করুন, অভিজ্ঞতা অর্জন করুন।',
    action: 'যোগ দিন',
    color: 'accent',
  },
];

const HelpSection = () => {
  return (
    <section id="help" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">সহযোগিতা করুন</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            আপনিও এই ভালো কাজের অংশ হতে পারেন
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            প্রতিটি সাহায্যই মূল্যবান। আপনার যতটুকু সামর্থ্য, ততটুকুই দিন — আমরা কৃতজ্ঞ থাকব।
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {helpOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <div
                key={option.title}
                className="relative bg-card p-8 rounded-2xl shadow-soft card-hover text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                  option.color === 'primary' ? 'bg-primary/10' :
                  option.color === 'secondary' ? 'bg-secondary/20' : 'bg-accent/20'
                }`}>
                  <IconComponent className={`w-8 h-8 ${
                    option.color === 'primary' ? 'text-primary' :
                    option.color === 'secondary' ? 'text-secondary' : 'text-accent'
                  }`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {option.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {option.description}
                </p>
                
                <button
                  onClick={() => {
                    const donationSection = document.getElementById('donation-info');
                    if (donationSection) {
                      donationSection.scrollIntoView({ behavior: 'smooth' });
                      donationSection.classList.add('ring-2', 'ring-primary', 'ring-offset-2');
                      setTimeout(() => {
                        donationSection.classList.remove('ring-2', 'ring-primary', 'ring-offset-2');
                      }, 2000);
                    }
                  }}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 group-hover:gap-3 ${
                    option.color === 'primary' ? 'bg-primary text-primary-foreground hover:bg-primary/90' :
                    option.color === 'secondary' ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' :
                    'bg-accent text-accent-foreground hover:bg-accent/90'
                  }`}
                >
                  {option.action}
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Donation Info */}
        <div id="donation-info" className="mt-12 md:mt-16 bg-muted/50 rounded-2xl p-8 md:p-10 transition-all duration-300">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              কীভাবে দান করবেন?
            </h3>
            <p className="text-muted-foreground mb-6">
              বিকাশ, নগদ, রকেট অথবা ব্যাংক ট্রান্সফারের মাধ্যমে আপনি সরাসরি দান করতে পারেন। 
              যোগাযোগ করুন আমাদের সাথে — আমরা সাহায্য করব।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="inline-flex items-center px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground shadow-sm">
                বিকাশ: ০১৩১৪৪১২৮৪৯
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground shadow-sm">
                নগদ: ০১৩১৪৪১২৮৪৯
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
