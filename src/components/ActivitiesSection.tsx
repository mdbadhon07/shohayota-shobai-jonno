import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import winterClothesImage from '@/assets/winter-clothes-distribution.jpg';
import blanketDistribution1 from '@/assets/blanket-distribution-1.jpg';
import blanketDistribution2 from '@/assets/blanket-distribution-2.jpg';
import buyingBlankets from '@/assets/buying-blankets.jpg';

import eidGiftImage from '@/assets/eid-gift-distribution.jpg';
import foodPackage from '@/assets/food-package.jpg';
import communityGathering from '@/assets/community-gathering.jpg';

import socialServiceImage from '@/assets/social-service.jpg';
import treePlanting1 from '@/assets/tree-planting-1.jpg';
import treePlanting2 from '@/assets/tree-planting-2.jpg';
import socialService1 from '@/assets/social-service-1.jpg';
import socialService2 from '@/assets/social-service-2.jpg';
import socialService3 from '@/assets/social-service-3.jpg';
import socialService4 from '@/assets/social-service-4.jpg';
import socialService5 from '@/assets/social-service-5.jpg';

import bloodDonationMain from '@/assets/blood-donation-main.jpg';
import bloodDonation1 from '@/assets/blood-donation-1.jpg';
import bloodDonation2 from '@/assets/blood-donation-2.jpg';
import bloodDonation3 from '@/assets/blood-donation-3.jpg';

const activities = [
  {
    title: 'শীতবস্ত্র বিতরণ',
    description: 'প্রতি শীতকালে আমরা গ্রামাঞ্চলে অসহায় পরিবারগুলোকে গরম কাপড়, কম্বল এবং শীতবস্ত্র বিতরণ করি। শিশুদের হাসি আমাদের সবচেয়ে বড় পুরস্কার।',
    image: winterClothesImage,
    stats: '৫০০+ পরিবার সাহায্যপ্রাপ্ত',
    gallery: [
      { src: winterClothesImage, caption: 'শীতবস্ত্র ক্রয়' },
      { src: blanketDistribution1, caption: 'কম্বল বিতরণ - ১' },
      { src: blanketDistribution2, caption: 'কম্বল বিতরণ - ২' },
      { src: buyingBlankets, caption: 'কম্বল ক্রয়' },
    ],
  },
  {
    title: 'ঈদ উপহার সামগ্রী বিতরণ',
    description: 'পবিত্র ঈদুল ফিতর ও ঈদুল আজহায় আমরা অসহায় পরিবারগুলোকে ঈদ উপহার সামগ্রী বিতরণ করি। সবার মুখে হাসি ফোটানোই আমাদের লক্ষ্য।',
    image: eidGiftImage,
    stats: '১০০০+ উপহার বিতরণ',
    gallery: [
      { src: eidGiftImage, caption: 'ঈদ উপহার বিতরণ' },
      { src: foodPackage, caption: 'খাদ্য সামগ্রী' },
      { src: communityGathering, caption: 'সম্মিলিত আয়োজন' },
    ],
  },
  {
    title: 'অন্যান্য সমাজসেবা মূলক কার্যক্রম',
    description: 'পুকুর পরিষ্কার, রাস্তা মেরামত, বৃক্ষরোপণ এবং পরিবেশ সংরক্ষণসহ বিভিন্ন সমাজসেবামূলক কাজে আমরা সদা তৎপর।',
    image: socialServiceImage,
    stats: '২০+ সেবামূলক অভিযান',
    gallery: [
      { src: socialServiceImage, caption: 'পুকুর পরিষ্কার' },
      { src: treePlanting1, caption: 'বৃক্ষরোপণ - ১' },
      { src: treePlanting2, caption: 'বৃক্ষরোপণ - ২' },
      { src: socialService1, caption: 'শরবত বিতরণ - ১' },
      { src: socialService2, caption: 'শরবত বিতরণ - ২' },
      { src: socialService3, caption: 'শরবত বিতরণ - ৩' },
      { src: socialService4, caption: 'স্বেচ্ছাসেবক দল' },
      { src: socialService5, caption: 'শরবত বিতরণ - ৪' },
    ],
  },
  {
    title: 'রক্তদান কার্যক্রম',
    description: 'জরুরি প্রয়োজনে রক্তদান করে আমরা মানুষের জীবন বাঁচাতে সাহায্য করি। আমাদের সদস্যরা নিয়মিত স্বেচ্ছায় রক্তদান করে থাকেন।',
    image: bloodDonationMain,
    stats: '৫০+ রক্তদান',
    gallery: [
      { src: bloodDonationMain, caption: 'রক্তদান' },
      { src: bloodDonation1, caption: 'রক্তদান - ১' },
      { src: bloodDonation2, caption: 'রক্তদান - ২' },
      { src: bloodDonation3, caption: 'রক্তদান - ৩' },
    ],
  },
];

const ActivitiesSection = () => {
  const [selectedActivity, setSelectedActivity] = useState<typeof activities[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (activity: typeof activities[0]) => {
    setSelectedActivity(activity);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedActivity(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedActivity) {
      setCurrentImageIndex((prev) => 
        prev === selectedActivity.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedActivity) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedActivity.gallery.length - 1 : prev - 1
      );
    }
  };

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="bg-card rounded-2xl overflow-hidden shadow-soft card-hover group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openGallery(activity)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="inline-block px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full">
                    {activity.stats}
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    {activity.gallery.length} ছবি দেখুন
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

      {/* Gallery Modal */}
      <Dialog open={!!selectedActivity} onOpenChange={closeGallery}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background/95 backdrop-blur-sm max-h-[90vh]">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle className="text-lg md:text-xl font-semibold text-foreground text-center pr-8">
              {selectedActivity?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedActivity && (
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={selectedActivity.gallery[currentImageIndex].src}
                  alt={selectedActivity.gallery[currentImageIndex].caption}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                {selectedActivity.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-all shadow-lg"
                      aria-label="আগের ছবি"
                    >
                      <ChevronLeft className="w-6 h-6 text-foreground" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-all shadow-lg"
                      aria-label="পরের ছবি"
                    >
                      <ChevronRight className="w-6 h-6 text-foreground" />
                    </button>
                  </>
                )}
              </div>

              {/* Caption and Thumbnails */}
              <div className="p-4">
                <p className="text-center text-foreground font-medium mb-4">
                  {selectedActivity.gallery[currentImageIndex].caption}
                </p>
                
                {/* Thumbnail Strip */}
                <div className="flex justify-center gap-2 overflow-x-auto pb-2">
                  {selectedActivity.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex 
                          ? 'border-primary ring-2 ring-primary/30' 
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
                
                {/* Image Counter */}
                <p className="text-center text-muted-foreground text-sm mt-2">
                  {currentImageIndex + 1} / {selectedActivity.gallery.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ActivitiesSection;
