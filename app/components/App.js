import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AccessContext } from '@poool/react-access';

import { defaultHistory } from '../utils';
import Home from './Home';
import Premium from './Premium';
import Premium2 from './Premium2';

export default () => {
  useEffect(() => {
    return defaultHistory.listen(() => window.scrollTo(0, 0));
  }, []);

  return (
    <BrowserRouter history={defaultHistory}>
      <AccessContext
        appId="wkr0Qmj8nVyuCLx6Nw9diZ1S9m6Zcdz9Cgm05WNkiOWPOeaqFkiFaB95H2OXQgnE"
        config={{
          debug: true,
          cookies_enabled: true,
          custom_segment: 'react',
        }}
        withAudit={true}
      >
        <Routes>
          <Route path="/premium" element={<Premium />} />
          <Route path="/premium2" element={<Premium2 />} />
          <Route index element={<Home />} />
        </Routes>
      </AccessContext>
    </BrowserRouter>
  );
};
