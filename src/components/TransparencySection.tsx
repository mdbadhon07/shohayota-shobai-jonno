import { Shield, FileText, Eye, CheckCircle } from 'lucide-react';

const transparencyPoints = [
  {
    icon: FileText,
    title: 'প্রতিটি দানের হিসাব',
    description: 'যত টাকা আসে, তার প্রতিটি পয়সার হিসাব আমরা রাখি এবং নিয়মিত প্রকাশ করি।',
  },
  {
    icon: Eye,
    title: 'প্রমাণসহ রিপোর্ট',
    description: 'প্রতিটি বিতরণের ছবি, ভিডিও এবং রিপোর্ট আমরা সোশ্যাল মিডিয়ায় শেয়ার করি।',
  },
  {
    icon: Shield,
    title: 'সরাসরি পৌঁছে দেওয়া',
    description: 'কোনো মধ্যস্থতাকারী নেই — আমরা নিজেরাই সাহায্যপ্রাপ্তদের কাছে পৌঁছে যাই।',
  },
  {
    icon: CheckCircle,
    title: 'জবাবদিহিতা',
    description: 'যেকোনো দাতা চাইলে হিসাব দেখতে পারেন। আমরা সম্পূর্ণ স্বচ্ছ।',
  },
];

const TransparencySection = () => {
  return (
    <section id="transparency" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium mb-2">স্বচ্ছতা ও বিশ্বাস</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              আপনার বিশ্বাসের মূল্য আমরা বুঝি
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              আমরা জানি, দান করার সময় সবচেয়ে বড় চিন্তা থাকে — টাকাটা আসলে কোথায় যাচ্ছে? 
              তাই আমরা প্রতিটি পদক্ষেপে স্বচ্ছতা রাখি। আপনার দানের প্রতিটি টাকা কোথায় খরচ হচ্ছে, 
              তা আমরা প্রমাণসহ দেখাই।
            </p>

            <div className="space-y-4">
              {transparencyPoints.map((point) => {
                const IconComponent = point.icon;
                return (
                  <div key={point.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{point.title}</h3>
                      <p className="text-muted-foreground text-sm">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              আমাদের প্রতিশ্রুতি
            </h3>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">১০০%</div>
                <p className="text-muted-foreground">সংগৃহীত অর্থ সেবামূলক কাজে ব্যয় হয়</p>
              </div>
              
              <div className="border-t border-border pt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-foreground mb-1">০%</div>
                    <p className="text-muted-foreground text-sm">প্রশাসনিক খরচ</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground mb-1">১০০%</div>
                    <p className="text-muted-foreground text-sm">স্বেচ্ছাসেবী পরিচালিত</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-center text-muted-foreground text-sm italic">
                  "প্রতিটি দাতার আস্থা আমাদের সবচেয়ে বড় সম্পদ। তাই আমরা কখনো এই আস্থা নষ্ট করব না।"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
