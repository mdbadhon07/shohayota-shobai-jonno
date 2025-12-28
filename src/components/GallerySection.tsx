import clothesImage from '@/assets/clothes-distribution.jpg';
import ramadanImage from '@/assets/ramadan-iftar.jpg';
import communityImage from '@/assets/community-help.jpg';
import heroImage from '@/assets/hero-volunteers.jpg';

const galleryImages = [
  {
    src: heroImage,
    alt: 'স্বেচ্ছাসেবী কাজ',
    caption: 'গ্রামে কম্বল বিতরণ',
  },
  {
    src: clothesImage,
    alt: 'শীতবস্ত্র বিতরণ',
    caption: 'শীতার্ত শিশুদের পাশে',
  },
  {
    src: ramadanImage,
    alt: 'ইফতার বিতরণ',
    caption: 'রমজানে ইফতার আয়োজন',
  },
  {
    src: communityImage,
    alt: 'সাহায্য কার্যক্রম',
    caption: 'অসহায় পরিবারের পাশে',
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
                  index === 0 ? 'h-full min-h-[300px] md:min-h-[400px]' : 'h-48 md:h-56'
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
          <p className="text-muted-foreground text-sm">
            আরো ছবি ও ভিডিও দেখতে আমাদের ফেসবুক পেজ ফলো করুন
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
