import Navbar from '@/components/layout/Navbar';
import AboutHeroSection from '@/components/sections/about/AboutHeroSection';
import AboutCompanySection from '@/components/sections/about/AboutCompanySection';
import OurValuesSection from '@/components/sections/about/OurValuesSection';
import TeamSection from '@/components/sections/about/TeamSection';
import GlobalStatsSection from '@/components/sections/about/GlobalStatsSection';
import ImpactSection from '@/components/sections/about/ImpactSection';
import Footer from '@/components/layout/Footer';
import { useTranslations } from 'next-intl';

export default function AboutUsPage() {
  const t = useTranslations('aboutUs');

  const heroSection = {
    'title':'About Us',
    'subtitle':'Driving the Future of Electric Mobility',
    'description':'We build powerful EV charging platforms that turn insights into efficiency',
  }

  const aboutCompanySection = {
    'title':'About Company',
    'description':'We are a leading provider of innovative EV charging solutions, dedicated to accelerating the transition to sustainable transportation. Our cutting-edge technology and comprehensive platform empower businesses to build, manage, and scale their charging infrastructure with confidence.',
    'visionTitle':'Our Vision',
    'visionDescription':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
    'missionTitle':'Our Mission',
    'missionDescription':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
  }


  const ourValuesSection = {
    'title':'our values',
    'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
    'images':[
      '/home/about_us/our_value/1.png',
      '/home/about_us/our_value/mas.svg',
      '/home/about_us/our_value/2.png'
    ]
  }


  const teamSection = {
    'members':[
      {
        'name':'Jackson Wang',
        'role':'CEO',
        'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
        'image':'/home/about_us/team_section/pers_1.png'
      },
      {
        'name':'Mahaboob Hussain',
        'role':'CTO',
        'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
        'image':'/home/about_us/team_section/pers_2.png'
      }
    ]
  }

  const globalStatsSection = {
    'activeUsers':{
      'label':'Active Users',
      'value':'23,56,000'
    },
    'totalStations':{
      'label':'Total Stations',
      'value':'40,000'
    },
    'totalDevices':{
      'label':'Total Devices',
      'value':'10,40,000'
    },
    'totalConnectors':{
      'label':'Total Connectors',
      'value':'56,12,000'
    },
    'message':'We’ve provided over 1 Million Devices across the US & Saudi.',
    'locations':[
      {
        'name':'Riyadh',
        'value':'12,055',
        'flag':'/home/about_us/global_stats_section/icons/sa_flag.png'
      },
      {
        'name':'Cairo',
        'value':'14,200',
        'flag':'/home/about_us/global_stats_section/icons/egypt_flag.png'
      },
      {
        'name':'Miami Florida',
        'value':'56,12,000',
        'flag':'/home/about_us/global_stats_section/icons/usa_flag.png'
      }
    ]
  }

  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <AboutHeroSection
        title={heroSection.title}
        subtitle={heroSection.subtitle}
        description={heroSection.description}
      />
      <AboutCompanySection
        title={aboutCompanySection.title}
        description={aboutCompanySection.description}
        visionTitle={aboutCompanySection.visionTitle}
        visionDescription={aboutCompanySection.visionDescription}
        missionTitle={aboutCompanySection.missionTitle}
        missionDescription={aboutCompanySection.missionDescription}
      />
      <OurValuesSection
        title={ourValuesSection.title}
        description={ourValuesSection.description}
        images={ourValuesSection.images}
      />
      <TeamSection
        members={teamSection.members}
      />
      <GlobalStatsSection
        activeUsers={globalStatsSection.activeUsers}
        totalStations={globalStatsSection.totalStations}
        totalDevices={globalStatsSection.totalDevices}
        totalConnectors={globalStatsSection.totalConnectors}
        message={globalStatsSection.message}
        locations={globalStatsSection.locations}
      />
      <ImpactSection
        title={t('impact.title')}
        description={t('impact.description')}
        buttonText={t('impact.buttonText')}
      />
      <Footer />
    </main>
  );
}
