import { MapPin, Phone, Mail, Facebook, Clock } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/mdbadhon22449@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.get('name'),
          phone: formData.get('phone'),
          message: formData.get('message'),
          _subject: 'নবযাত্রা সংঘ - নতুন মেসেজ',
        })
      });

      if (response.ok) {
        toast({
          title: "সফল!",
          description: "আপনার বার্তা সফলভাবে পাঠানো হয়েছে।",
        });
        form.reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast({
        title: "ত্রুটি",
        description: "বার্তা পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">যোগাযোগ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            আমাদের সাথে কথা বলুন
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            যেকোনো প্রশ্ন, পরামর্শ বা সহযোগিতার জন্য আমাদের সাথে যোগাযোগ করুন। আমরা সবসময় আপনাদের পাশে আছি।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">ঠিকানা</h3>
                  <p className="text-muted-foreground text-sm">
                    হাটরা গ্রাম, কেশরহাট পৌরসভা, মোহনপুর থানা, রাজশাহী জেলা
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">ফোন</h3>
                  <p className="text-muted-foreground text-sm">
                    ০১৩১৪৪১২৮৪৯
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">ইমেইল</h3>
                  <p className="text-muted-foreground text-sm">
                    nobjoyartorunsongho@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">যোগাযোগের সময়</h3>
                  <p className="text-muted-foreground text-sm">
                    সকাল ৯টা - রাত ৯টা (প্রতিদিন)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              মেসেজ পাঠান
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  আপনার নাম
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="আপনার নাম লিখুন"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  মোবাইল নম্বর
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="০১XXXXXXXXX"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  আপনার বার্তা
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                  placeholder="আপনার বার্তা লিখুন..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-soft hover:shadow-card disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'পাঠানো হচ্ছে...' : 'বার্তা পাঠান'}
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">সোশ্যাল মিডিয়ায় আমাদের ফলো করুন</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.facebook.com/share/1BqdX23h2w/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
