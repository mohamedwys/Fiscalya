import WhatsappButton from '@/components/whatsappButton';

const MyApp: React.FC<{ Component: React.ComponentType<any>; pageProps: any }> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <WhatsappButton />
    </>
  );
};

export default MyApp;