import { Wrapper, WrapperConteiner } from './style';
import Header from '../Header';
import Footer from '../Footer';

const LayoutDefault = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <WrapperConteiner>{children}</WrapperConteiner>
      <Footer />
    </Wrapper>
  );
};

export default LayoutDefault;
