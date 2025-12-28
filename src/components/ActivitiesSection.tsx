import clothesImage from '@/assets/winter-clothes-distribution.jpg';
import ramadanImage from '@/assets/eid-gift-distribution.jpg';
import communityImage from '@/assets/community-help.jpg';

const activities = [
  {
    title: 'শীতবস্ত্র বিতরণ',
    description: 'প্রতি শীতকালে আমরা গ্রামাঞ্চলে অসহায় পরিবারগুলোকে গরম কাপড়, কম্বল এবং শীতবস্ত্র বিতরণ করি। শিশুদের হাসি আমাদের সবচেয়ে বড় পুরস্কার।',
    image: clothesImage,
    stats: '৫০০+ পরিবার সাহায্যপ্রাপ্ত',
  },
  {
    title: 'ঈদ উপহার সামগ্রী বিতরণ',
    description: 'পবিত্র ঈদুল ফিতর ও ঈদুল আজহায় আমরা অসহায় পরিবারগুলোকে ঈদ উপহার সামগ্রী বিতরণ করি। সবার মুখে হাসি ফোটানোই আমাদের লক্ষ্য।',
    image: ramadanImage,
    stats: '১০০০+ উপহার বিতরণ',
  },
  {
    title: 'জরুরি সহায়তা',
    description: 'বন্যা, দুর্যোগ বা যেকোনো জরুরি পরিস্থিতিতে আমরা দ্রুত সাড়া দিই। খাদ্য, ওষুধ এবং প্রয়োজনীয় সামগ্রী নিয়ে পৌঁছে যাই আক্রান্ত এলাকায়।',
    image: communityImage,
    stats: '২০+ জরুরি অভিযান',
  },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">আমাদের কার্যক্রম</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            আমরা যা করি
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            প্রতিটি কাজে আমরা ভালোবাসা দিই। কারণ আমরা জানি — ছোট ছোট সাহায্য মিলে বড় পরিবর্তন আনে।
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="bg-card rounded-2xl overflow-hidden shadow-soft card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full">
                    {activity.stats}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
