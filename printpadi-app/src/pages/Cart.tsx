// Cart.tsx
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const Cart: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar color="primary"><IonTitle>Cart</IonTitle></IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <h2>Your Cart</h2>
      <p>Your cart is empty</p>
    </IonContent>
  </IonPage>
);

export default Cart;