import Footer from '../Footer';

export default function FooterExample() {
  return (
    <Footer 
      onScrollToTop={() => console.log('Scroll to top clicked')} 
    />
  );
}