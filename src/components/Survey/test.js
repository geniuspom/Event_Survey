import React, { Component, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="App-header">

        <button onClick={() => changeLanguage('th')}>th</button>
        <button onClick={() => changeLanguage('en')}>en</button>

      </div>
      <div className="App-intro">
      </div>
      <div>{t('title')}</div>
    </div>
  );
}

// loading component for suspence fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}
