import Header from '../widgets/Header/Header';
import Footer from '../widgets/Footer/Footer';
import { Outlet } from 'react-router';

const AppLayout = () => {
    return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <Outlet  />
      <Footer />
    </div>
    );
};

export default AppLayout;