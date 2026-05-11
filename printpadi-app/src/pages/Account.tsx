// Account.tsx
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';

const Account: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar color="primary"><IonTitle>Account</IonTitle></IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <h2>Welcome</h2>
      <IonButton expand="block">Sign In</IonButton>
    </IonContent>
  </IonPage>
);

export default Account;