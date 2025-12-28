import { Target, Eye, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">আমাদের সম্পর্কে</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            আমরা কারা?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ২০২০ সালে কিছু তরুণের হাত ধরে শুরু হয়েছিল এই যাত্রা। আজ আমরা একটি পরিবার।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              "নব জোয়ার তরুণ সংঘ" একটি শিক্ষার্থী পরিচালিত সামাজিক সংগঠন। আমরা বিশ্বাস করি — মানবতা সবার উপরে। 
              দরিদ্র পরিবারগুলোর পাশে দাঁড়ানো, শীতকালে শীতবস্ত্র বিতরণ, রমজানে ইফতার আয়োজন — এসবই আমাদের নিয়মিত কার্যক্রম।
            </p>
            <p className="text-muted-foreground leading-relaxed">
              আমরা কোনো রাজনৈতিক সংগঠন নই। আমাদের কাজ শুধুমাত্র মানবসেবা। প্রতিটি পয়সা যে মানুষের জন্য আসে, তার কাছে পৌঁছে যায়।
              স্বচ্ছতা ও বিশ্বাস আমাদের ভিত্তি।
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-16 h-1 bg-primary rounded-full" />
              <p className="text-foreground font-medium italic">"একসাথে হলে সব সম্ভব"</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-card p-6 rounded-xl shadow-soft card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">আমাদের লক্ষ্য</h3>
                  <p className="text-muted-foreground text-sm">
                    সমাজের অসহায় মানুষদের পাশে দাঁড়ানো এবং তরুণদের সেবামূলক কাজে উদ্বুদ্ধ করা।
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">আমাদের দৃষ্টিভঙ্গি</h3>
                  <p className="text-muted-foreground text-sm">
                    একটি এমন সমাজ যেখানে কেউ অসহায় থাকবে না, তরুণরা হবে পরিবর্তনের অগ্রদূত।
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">আমাদের মূল্যবোধ</h3>
                  <p className="text-muted-foreground text-sm">
                    সততা, স্বচ্ছতা, বিশ্বাস এবং মানবতা — এই চারটি স্তম্ভের উপর আমরা দাঁড়িয়ে।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
