import { SiteNav } from '@/components/sections/site-nav'
import { Hero } from '@/components/sections/hero'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Gamification } from '@/components/sections/gamification'
import { Rewards } from '@/components/sections/rewards'
import { Organizations } from '@/components/sections/organizations'
import { DataDashboard } from '@/components/sections/data-dashboard'
import { Partners } from '@/components/sections/partners'
import { Pricing } from '@/components/sections/pricing'
import { FinalCta } from '@/components/sections/final-cta'
import { SiteFooter } from '@/components/sections/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />
      <main>
        <Hero />
        <HowItWorks />
        <Gamification />
        <Rewards />
        <Organizations />
        <DataDashboard />
        <Partners />
        <Pricing />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
