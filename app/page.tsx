import Header        from '@/components/Header'
import HeroSection    from '@/components/HeroSection'
import AboutSection   from '@/components/AboutSection'
import ScenesSection  from '@/components/ScenesSection'
import SamplesSection from '@/components/SamplesSection'
import PricingSection from '@/components/PricingSection'
import FlowSection    from '@/components/FlowSection'
import FAQSection     from '@/components/FAQSection'
import MonitorSection from '@/components/MonitorSection'
import ContactSection from '@/components/ContactSection'
import Footer         from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection    />
        <AboutSection   />
        <ScenesSection  />
        <SamplesSection />
        <PricingSection />
        <FlowSection    />
        <FAQSection     />
        <MonitorSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
