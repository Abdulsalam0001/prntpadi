import { IonPage, IonContent } from '@ionic/react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Splash: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    // Quick splash, then auto-redirect
    const timer = setTimeout(() => {
      history.push('/home');
    }, 2000);
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '40px'
        }}>
          <img 
            src="/assets/logo.svg" 
            alt="PrintPadi" 
            style={{ 
              width: '200px', 
              marginBottom: '20px',
              filter: 'brightness(0) invert(1)' // Make logo white for dark background
            }} 
          />
          <p style={{ color: 'white', fontSize: '18px', fontWeight: '500' }}>
            Your Print Partner
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Splash;
