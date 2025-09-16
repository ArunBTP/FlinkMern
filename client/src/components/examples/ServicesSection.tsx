import ServicesSection from '../ServicesSection';

export default function ServicesSectionExample() {
  return (
    <ServicesSection 
      onContactUs={() => console.log('Contact us clicked')} 
    />
  );
}