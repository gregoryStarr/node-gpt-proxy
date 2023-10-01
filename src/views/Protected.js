// components/Protected.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
import Chatproxy from '../chat-components/Chatproxy';
import { makeApiCall } from '../chat-components/Chatproxy';
export function Protected() {
  const { route } = useAuthenticator((context) => [context.route]);

  const message =
    route === 'authenticated' ? 'FIRST PROTECTED ROUTE!' : 'Loading...';
  return <div>
      <Heading level={1}>{message}</Heading>
      <Chatproxy onSubmit={makeApiCall}/>
    </div>;
}
