import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButton } from '@ionic/react';

const Home: React.FC = () => {
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
          padding: '30px',
          textAlign: 'center',
          color: 'white',
          marginBottom: '20px'
        }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>
            Grab Up to 50% Off
          </h1>
          <p>On Your First Bulk Purchase</p>
          <IonButton expand="block" color="warning" size="large">
            Shop Flash Sale
          </IonButton>
        </div>

        <IonCard>
          <IonCardContent>
            <h2>Premium Business Cards - Matte Finish</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#2D3436' }}>₦800</p>
            <IonButton expand="full">View Details</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;