import AboutSection from '../AboutSection';

export default function AboutSectionExample() {
  return (
    <AboutSection 
      onContactUs={() => console.log('Contact us clicked')} 
    />
  );
}