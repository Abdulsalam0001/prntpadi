import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';

const CustomPrinting: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Custom Printing</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <h2>Custom Orders</h2>
      <p>Upload your design and we'll print it</p>
      <IonButton expand="block">Upload Design</IonButton>
    </IonContent>
  </IonPage>
);

export default CustomPrinting;