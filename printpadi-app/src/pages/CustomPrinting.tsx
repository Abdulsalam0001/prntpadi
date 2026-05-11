import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent, IonIcon } from '@ionic/react';
import { cloudUploadOutline, cameraOutline } from 'ionicons/icons';

const CustomPrinting: React.FC = () => {
  const handleUpload = () => {
    // We'll add camera/file upload later
    console.log('Upload triggered');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Custom Printing</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2 style={{ fontWeight: 'bold', marginBottom: '16px' }}>
          Your Ideas, Your Prints
        </h2>
        
        <IonCard style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎨</div>
          <h3>Upload Your Design</h3>
          <p style={{ color: '#666' }}>
            Upload your artwork and we'll print it exactly as you want
          </p>
          <IonButton expand="block" onClick={handleUpload} style={{ marginTop: '16px' }}>
            <IonIcon icon={cloudUploadOutline} slot="start" />
            Choose File
          </IonButton>
          <IonButton expand="block" fill="outline" onClick={handleUpload} style={{ marginTop: '8px' }}>
            <IonIcon icon={cameraOutline} slot="start" />
            Take Photo
          </IonButton>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <h3>Popular Custom Orders</h3>
            <div style={{ marginTop: '12px' }}>
              {['Business Cards', 'T-Shirts', 'Mugs', 'Banners'].map(item => (
                <div key={item} style={{
                  padding: '12px',
                  borderBottom: '1px solid #f0f0f0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span>{item}</span>
                  <IonButton size="small" fill="outline">Order</IonButton>
                </div>
              ))}
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CustomPrinting;