import { useState } from 'react';
import { Phone, Facebook, User } from 'lucide-react';
import presidentImage from '@/assets/president-abdullah.jpg';
import treasurerImage from '@/assets/treasurer-hannan.jpg';
import vicePresidentRimonImage from '@/assets/vice-president-rimon.jpg';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface CommitteeMember {
  position: string;
  name: string;
  phone: string;
  facebook: string;
  image?: string;
}

const committeeMembers: CommitteeMember[] = [
  { position: 'সভাপতি', name: 'আব্দুল্লাহ আল-আমিন', phone: '+880 1774-003680', facebook: 'https://www.facebook.com/share/1D7yRG7mHp/', image: presidentImage },
  { position: 'সহ-সভাপতি', name: 'মো: রিমন হোসেন', phone: '+880 1759-266451', facebook: 'https://www.facebook.com/share/1GiBSP8uiW/', image: vicePresidentRimonImage },
  { position: 'সহ-সভাপতি', name: 'মো: হাবিবুর রহমান', phone: '', facebook: '' },
  { position: 'সাধারণ সম্পাদক', name: 'মো: রাকিবুল ইসলাম', phone: '', facebook: '' },
  { position: 'যুগ্ম সাধারণ সম্পাদক', name: 'মো: কুরবান আলী', phone: '', facebook: '' },
  { position: 'সাংগঠনিক সম্পাদক', name: 'মো: শামীম আলী', phone: '', facebook: '' },
  { position: 'সহ-সাংগঠনিক সম্পাদক', name: 'মো: জুবায়ের আহমেদ', phone: '', facebook: '' },
  { position: 'কোষাধ্যক্ষ', name: 'মো: আব্দুল হান্নান', phone: '+880 1306-219560', facebook: 'https://www.facebook.com/share/1NRPKyw1u2/', image: treasurerImage },
  { position: 'প্রচার সম্পাদক', name: 'মো: আব্দুল মমিন', phone: '', facebook: '' },
  { position: 'সহ-প্রচার সম্পাদক', name: 'মো: হাসিবুর রহমান', phone: '', facebook: '' },
  { position: 'ক্রীড়া সম্পাদক', name: 'মো: মাসুদ রানা', phone: '', facebook: '' },
  { position: 'সহ-ক্রীড়া সম্পাদক', name: 'মো: গালিব মাহমুদ', phone: '', facebook: '' },
  { position: 'সমাজসেবা বিষয়ক সম্পাদক', name: 'মো: আশফাক আহমেদ বাধন', phone: '', facebook: '' },
  { position: 'উপ-সমাজসেবা বিষয়ক সম্পাদক', name: 'শ্রী সজিব কুমার', phone: '', facebook: '' },
  { position: 'ত্রাণ ও দুর্যোগ সম্পাদক', name: 'মাহমুদুল হাসান হৃদয়', phone: '', facebook: '' },
  { position: 'উপ-ত্রাণ ও দুর্যোগ সম্পাদক', name: 'মাহমুদ হাসান রকি', phone: '', facebook: '' },
  { position: 'ছাত্রবৃত্তি সম্পাদক', name: 'মো: মুস্তাকিন', phone: '', facebook: '' },
  { position: 'দপ্তর সম্পাদক', name: 'আব্দুল মাজেদ', phone: '', facebook: '' },
];

const executiveMembers = [
  'মো: রায়হান বাবু',
  'মো: তাহামিদুল ইসলাম সৈকত',
  'মো: আরাফাত',
  'রোহান আহমেদ',
  'মো: আকাশ',
  'মাসুদ রানা',
  'রিফাত আহমেদ',
  'মো: ইমরান',
  'মো: জাবের আহমেদ',
  'মো: নাইম ইসলাম',
  'মো: সাদিক',
];

const advisors = [
  { name: 'হাফেজ মো: নুরুজ্জামান', title: 'উপদেষ্টা' },
  { name: 'মো: সাগর আলী', title: 'উপদেষ্টা' },
  { name: 'আশরাফুল আলম', title: 'উপদেষ্টা' },
  { name: 'রাসেল মাহমুদ', title: 'উপদেষ্টা' },
];

const FullCommitteeSection = () => {
  const [selectedMember, setSelectedMember] = useState<CommitteeMember | null>(null);

  return (
    <section id="full-committee" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">কার্যকরী পরিষদ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            পূর্ণ কমিটি (২০২৬-২০২৭)
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            নব জোয়ার তরুণ সংঘ এর সম্পূর্ণ কার্যকরী পরিষদ
          </p>
        </div>

        {/* Main Committee Members */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 mb-12">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              onClick={() => setSelectedMember(member)}
              className="bg-card p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-soft card-hover text-center group border border-border/50 cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-2 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors bg-primary/10 flex items-center justify-center">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                )}
              </div>
              <h3 className="font-semibold text-foreground text-xs sm:text-sm leading-tight mb-0.5">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-[10px] sm:text-xs">
                {member.position}
              </p>
            </div>
          ))}
        </div>

        {/* Member Detail Popup */}
        <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="sm:max-w-md overflow-hidden">
            <DialogHeader>
              <DialogTitle className="text-center animate-fade-in">{selectedMember?.position}</DialogTitle>
            </DialogHeader>
            {selectedMember && (
              <div className="flex flex-col items-center py-4">
                {/* Animated Profile Image */}
                <div className="relative w-28 h-28 mb-4 animate-scale-in">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 animate-pulse" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 bg-primary/10 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105">
                    {selectedMember.image ? (
                      <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-14 h-14 text-primary" />
                    )}
                  </div>
                </div>
                
                {/* Animated Name & Position */}
                <h3 className="text-xl font-bold text-foreground mb-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  {selectedMember.name}
                </h3>
                <p className="text-primary font-medium mb-6 animate-fade-in" style={{ animationDelay: '0.15s' }}>
                  {selectedMember.position}
                </p>
                
                {/* Animated Contact Buttons */}
                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {selectedMember.phone ? (
                      <a
                        href={`tel:${selectedMember.phone}`}
                        className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary hover:to-primary/90 hover:text-primary-foreground transition-all duration-300 px-4 py-3 rounded-xl group shadow-sm hover:shadow-md"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/20 group-hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                          <Phone className="w-5 h-5" />
                        </div>
                        <span className="font-medium">{selectedMember.phone}</span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 bg-muted/50 px-4 py-3 rounded-xl text-muted-foreground">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          <Phone className="w-5 h-5" />
                        </div>
                        <span>ফোন নম্বর যোগ করা হয়নি</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="animate-fade-in" style={{ animationDelay: '0.25s' }}>
                    {selectedMember.facebook ? (
                      <a
                        href={selectedMember.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-blue-600/5 hover:from-blue-600 hover:to-blue-500 hover:text-white transition-all duration-300 px-4 py-3 rounded-xl group shadow-sm hover:shadow-md"
                      >
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                          <Facebook className="w-5 h-5" />
                        </div>
                        <span className="font-medium">ফেসবুক প্রোফাইল</span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 bg-muted/50 px-4 py-3 rounded-xl text-muted-foreground">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          <Facebook className="w-5 h-5" />
                        </div>
                        <span>ফেসবুক লিংক যোগ করা হয়নি</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Executive Members */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground text-center mb-6">
            কার্যকরী সদস্য
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {executiveMembers.map((name, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div>
          <h3 className="text-xl font-bold text-foreground text-center mb-6">
            উপদেষ্টা কর্তৃক অনুমোদিত
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="bg-muted/30 p-4 rounded-xl text-center"
              >
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium text-foreground text-sm">
                  {advisor.name}
                </h4>
                <p className="text-muted-foreground text-xs">{advisor.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullCommitteeSection;
