import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PackageCard } from '@/components/PackageCard'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { ProcessTimeline } from '@/components/ProcessTimeline'
import { Gallery } from '@/components/Gallery'
import { Testimonials } from '@/components/Testimonials'
import { ContactForm } from '@/components/ContactForm'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { PACKAGES, BRAND } from '@/lib/constants'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />

        {/* Packages */}
        <section id="packages" className="py-24 lg:py-32">
          <div className="container-editorial">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="eyebrow mb-4">Paket Wedding</p>
              <h2 className="font-serif text-display-2 leading-tight">
                Empat paket untuk setiap<br />
                <span className="italic text-gold-gradient">cerita cinta.</span>
              </h2>
              <div className="ornament-divider">✦</div>
              <p className="text-base font-sans text-ivory-300 max-w-2xl mx-auto leading-relaxed">
                Setiap paket dapat disesuaikan. Bunda Vicca akan membantu menemukan yang paling sesuai dengan visi dan anggaran Anda.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {PACKAGES.map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 lg:py-32 bg-midnight-500/40 border-y border-champagne-700/20 relative">
          <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none" aria-hidden="true" />
          <div className="container-editorial relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="eyebrow mb-4">Mengapa Vicca Sera</p>
              <h2 className="font-serif text-display-2 leading-tight">
                Empat alasan yang membuat<br />
                <span className="italic text-gold-gradient">kami dipercaya.</span>
              </h2>
            </div>
            <WhyChooseUs />
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-24 lg:py-32">
          <div className="container-editorial">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="eyebrow mb-4">Proses Kami</p>
              <h2 className="font-serif text-display-2 leading-tight">
                Lima langkah menuju<br />
                <span className="italic text-gold-gradient">hari istimewa Anda.</span>
              </h2>
            </div>
            <ProcessTimeline />
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-24 lg:py-32 bg-midnight-500/40 border-y border-champagne-700/20">
          <div className="container-editorial">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="eyebrow mb-4">Galeri Pernikahan</p>
              <h2 className="font-serif text-display-2 leading-tight">
                Cerita yang telah<br />
                <span className="italic text-gold-gradient">kami rayakan.</span>
              </h2>
            </div>
            <Gallery />
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 lg:py-32">
          <div className="container-editorial">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="eyebrow mb-4">Cerita Klien</p>
              <h2 className="font-serif text-display-2 leading-tight">
                Apa kata mereka<br />
                <span className="italic text-gold-gradient">tentang kami.</span>
              </h2>
            </div>
            <Testimonials />
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-24 lg:py-32 bg-midnight-500/40 border-y border-champagne-700/20">
          <div className="container-editorial">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div className="lg:sticky lg:top-32">
                <p className="eyebrow mb-4">Ceritakan Visi Anda</p>
                <h2 className="font-serif text-display-3 leading-tight mb-6">
                  Mari mulai<br />
                  <span className="italic text-gold-gradient">perjalanan ini.</span>
                </h2>
                <p className="text-base font-sans text-ivory-300 leading-relaxed mb-8 max-w-md">
                  Isi form di samping dan Bunda Vicca akan menghubungi Anda dalam 2 jam untuk konsultasi gratis 30 menit. Atau langsung chat via WhatsApp.
                </p>
                <div className="space-y-3 text-sm font-sans text-ivory-300 mb-8">
                  <p>✦ Konsultasi gratis 30 menit</p>
                  <p>✦ Respon dalam 2 jam (jam kerja)</p>
                  <p>✦ Privasi Anda terjamin</p>
                </div>
                <a
                  href={`https://wa.me/${BRAND.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link"
                >
                  Chat langsung via WhatsApp
                </a>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 lg:py-32">
          <div className="container-editorial">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="eyebrow mb-4">Pertanyaan Umum</p>
              <h2 className="font-serif text-display-2 leading-tight">
                Hal yang sering<br />
                <span className="italic text-gold-gradient">ditanyakan.</span>
              </h2>
            </div>
            <FAQ />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
