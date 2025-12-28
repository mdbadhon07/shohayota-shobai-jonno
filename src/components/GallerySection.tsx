import teamPhoto from '@/assets/team-photo.jpg';
import bookDistribution from '@/assets/book-distribution.jpg';
import communityGathering from '@/assets/community-gathering.jpg';
import foodPackage from '@/assets/food-package.jpg';
import meetingGathering from '@/assets/meeting-gathering.jpg';
import buyingBlankets from '@/assets/buying-blankets.jpg';
import blanketDist1 from '@/assets/blanket-distribution-1.jpg';
import blanketDist2 from '@/assets/blanket-distribution-2.jpg';

const galleryImages = [
  {
    src: teamPhoto,
    alt: 'নব জোয়ার তরুণ সংঘ টিম',
    caption: 'আমাদের স্বেচ্ছাসেবক দল',
  },
  {
    src: communityGathering,
    alt: 'ধর্মীয় সভা',
    caption: 'কমিউনিটি সমাবেশ',
  },
  {
    src: meetingGathering,
    alt: 'মিটিং ও ইফতার',
    caption: 'সদস্যদের সাথে মিটিং',
  },
  {
    src: bookDistribution,
    alt: 'বই বিতরণ',
    caption: 'শিশুদের বই বিতরণ',
  },
  {
    src: foodPackage,
    alt: 'খাদ্য প্যাকেজ',
    caption: 'খাদ্য সামগ্রী প্রস্তুতি',
  },
  {
    src: buyingBlankets,
    alt: 'কম্বল ক্রয়',
    caption: 'শীতবস্ত্র সংগ্রহ',
  },
  {
    src: blanketDist1,
    alt: 'কম্বল বিতরণ',
    caption: 'অসহায়দের পাশে',
  },
  {
    src: blanketDist2,
    alt: 'শীতবস্ত্র বিতরণ',
    caption: 'গ্রামে কম্বল বিতরণ',
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">গ্যালারি</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            মুহূর্তগুলো যা অমূল্য
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            প্রতিটি হাসি, প্রতিটি কৃতজ্ঞতা আমাদের অনুপ্রেরণা। এই মুহূর্তগুলোই আমাদের কাজ চালিয়ে যেতে সাহায্য করে।
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-xl shadow-soft ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? 'h-full min-h-[300px] md:min-h-[400px]' : 'h-40 md:h-48'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-foreground text-sm font-medium">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://www.facebook.com/share/1BqdX23h2w/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            আরো ছবি ও ভিডিও দেখতে আমাদের ফেসবুক পেজ ফলো করুন →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
