import React from "react";
import "./App.css";
import ThemeProvider from "./design/theme/ThemeProvider";
import Routes from "./pages/Routes";
import AuthProvider from "./auth/AuthProvider";
import CenterLoading from "./design/loading/CenterLoading";
import ErrorBoundary from "./components/Error/ErrorBoundary";

const App = () => (
  <ThemeProvider>
    <ErrorBoundary>
      <React.Suspense fallback={<CenterLoading />}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </React.Suspense>
    </ErrorBoundary>
  </ThemeProvider>
);

export default App;
