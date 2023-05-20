import './index.css';
import { Router } from './src/utils/router';
import { printTemplate as Header } from "./src/components/Header/Header";
import { printTemplate as Footer } from "./src/components/Footer/Footer";

Header();
Router();
Footer();