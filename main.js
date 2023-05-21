import './index.css';
import { Header } from "./src/components/Header/Header";
import { Footer } from "./src/components/Footer/Footer";
import { Home } from './src/pages/Home/Home';
import { linkPage } from './src/utils/linkPage';
import { Lab } from './src/pages/Lab/Lab';
import { Career } from './src/pages/Career/Career';
import { Sandbox } from './src/pages/Sandbox/Sandbox';

Header();
Footer();

linkPage("#home-link", Home);
linkPage("#lab-link", Lab);
linkPage("#career-link", Career);
linkPage("#sandbox-link", Sandbox);

Home();