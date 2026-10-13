import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { UIProvider } from "./context/UIContext";
import ScrollManager from "./components/feature/ScrollManager";


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <UIProvider>
          <ScrollManager />
          <AppRoutes />
        </UIProvider>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;