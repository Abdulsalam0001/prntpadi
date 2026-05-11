import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import { flashOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>PrintPadi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          padding: '30px 20px',
          textAlign: 'center',
          color: 'white',
          marginBottom: '20px'
        }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>
            Grab Up to 50% Off
          </h1>
          <p style={{ marginBottom: '16px' }}>On Your First Bulk Purchase</p>
          <IonButton 
            expand="block" 
            color="warning" 
            size="large"
            onClick={() => history.push('/products')}
          >
            <IonIcon icon={flashOutline} slot="start" />
            Shop Flash Sale
          </IonButton>
        </div>

        <IonCard>
          <IonCardContent>
            <h2>Premium Business Cards - Matte Finish</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#2D3436' }}>₦800</p>
            <p style={{ color: '#636E72' }}>MOQ: 10 pcs</p>
            <IonButton expand="full" onClick={() => history.push('/products')}>
              View Details
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;