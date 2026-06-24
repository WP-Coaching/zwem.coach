import HeroSection from '@/components/HeroSection'
import SummerSchoolSection from '@/components/SummerSchoolSection'
import ProgramSection from '@/components/ProgramSection'
import CoachesSection from '@/components/CoachesSection'
import ScheduleSection from '@/components/ScheduleSection'
import PricingSection from '@/components/PricingSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CoachesSection />
      <SummerSchoolSection />
      <ProgramSection />
      <ScheduleSection />
      <PricingSection />
      <Footer />
    </main>
  )
}
