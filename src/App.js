import React from "react"
import Header from "./featured/Header/header";
import Main from "./featured/Main/main"
import Subscribe from "./components/Subscribe.jsx"
import Services from "./components/Services.jsx"
import Footer from "./featured/Footer/footer"
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n.js'; // Import the i18n configuration
function App() {
  return (
    <div>
      <I18nextProvider i18n={i18n}>
        <Header />
      </I18nextProvider>
      <Main />
      <Subscribe />
      <Services />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
