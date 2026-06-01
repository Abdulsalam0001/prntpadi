import { IonPage, IonContent, IonSpinner } from '@ionic/react';
import { useState } from 'react';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <IonPage>
      <IonContent>
        {loading && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            zIndex: 10
          }}>
            <IonSpinner name="crescent" color="primary" style={{ width: '48px', height: '48px' }} />
          </div>
        )}
        <iframe 
          src="https://printpadi-v2.vercel.app/"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
          title="PrintPadi"
          onLoad={() => setLoading(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
