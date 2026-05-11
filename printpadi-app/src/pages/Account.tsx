// Account.tsx
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';

const Account: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar color="primary"><IonTitle>Account</IonTitle></IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <h2>Welcome to PrintPadi</h2>
      <IonButton expand="block">Sign In</IonButton>
      <IonButton expand="block" fill="outline">Create Account</IonButton>
    </IonContent>
  </IonPage>
);

export default Account;