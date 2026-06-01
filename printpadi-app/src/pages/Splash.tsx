import { IonPage, IonContent, IonSpinner } from '@ionic/react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Splash: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/home');
    }, 2000);
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <IonPage>
      <IonContent fullscreen style={{ '--background': 'white' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          background: 'white',
          padding: '40px'
        }}>
          {/* Your Logo - Black and White */}
          <img 
            src="/assets/logo.svg" 
            alt="PrintPadi" 
            style={{ 
              width: '180px', 
              height: 'auto',
              marginBottom: '40px'
            }} 
          />
          
          {/* Loading Spinner - Black */}
          <IonSpinner 
            name="circles" 
            style={{ 
              width: '48px', 
              height: '48px',
              color: '#000000'
            }} 
          />
          
          {/* Loading Text - Black */}
          <p style={{
            color: '#000000',
            fontSize: '14px',
            marginTop: '20px',
            fontWeight: '500'
          }}>
            Loading...
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Splash;
