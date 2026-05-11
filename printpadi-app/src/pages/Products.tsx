import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const Products: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Products</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <h2>Our Products</h2>
      <p>Business Cards, Mugs, T-Shirts & More</p>
    </IonContent>
  </IonPage>
);

export default Products;