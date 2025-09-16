import Header from '../Header';

export default function HeaderExample() {
  return (
    <Header 
      currentSection="home" 
      onSectionChange={(section) => console.log('Navigate to:', section)} 
    />
  );
}