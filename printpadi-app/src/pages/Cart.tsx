import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonBadge, IonItem, IonLabel, IonInput, IonToast, IonCard, IonCardContent, IonList, IonItemSliding, IonItemOptions, IonItemOption, IonCheckbox } from '@ionic/react';
import { trashOutline, addCircleOutline, removeCircleOutline, shieldCheckmarkOutline, airplaneOutline, cardOutline, cashOutline, arrowBack, chevronForwardOutline, bagHandleOutline, sparklesOutline, flashOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
  minOrder: number;
  maxOrder: number;
}

interface SuggestionItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const Cart: React.FC = () => {
  const history = useHistory();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [selectedShipping, setSelectedShipping] = useState('standard');
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Sample cart items (replace with real data from API later)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Premium Business Cards',
      variant: 'Matte Finish, 350gsm',
      price: 8000,
      quantity: 2,
      image: '💳',
      minOrder: 1,
      maxOrder: 10
    },
    {
      id: 2,
      name: 'Custom Premium Mugs',
      variant: 'Full Color Print, 11oz',
      price: 2500,
      quantity: 5,
      image: '☕',
      minOrder: 5,
      maxOrder: 50
    }
  ]);

  // Product suggestions based on cart
  const suggestions: SuggestionItem[] = [
    {
      id: 101,
      name: 'Branded T-Shirts',
      price: 3500,
      image: '👕',
      description: 'Complete your corporate package'
    },
    {
      id: 102,
      name: 'Custom Notebooks',
      price: 1200,
      image: '📓',
      description: 'Perfect add-on for meetings'
    },
    {
      id: 103,
      name: 'Premium Stickers',
      price: 500,
      image: '⭐',
      description: 'Great for packaging'
    },
    {
      id: 104,
      name: 'Corporate Gift Boxes',
      price: 8500,
      image: '🎁',
      description: 'Impressive client gifts'
    }
  ];

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = selectedShipping === 'express' ? 2500 : selectedShipping === 'pickup' ? 0 : 1500;
  const vat = Math.round((subtotal - discount) * 0.075); // 7.5% VAT
  const total = subtotal - discount + shippingCost + vat;

  // Update quantity
  const updateQuantity = (itemId: number, change: number) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + change;
          if (newQuantity >= item.minOrder && newQuantity <= item.maxOrder) {
            return { ...item, quantity: newQuantity };
          }
        }
        return item;
      })
    );
  };

  // Remove item
  const removeItem = (itemId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    setToastMessage('Item removed from cart');
    setShowToast(true);
  };

  // Apply promo code
  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'PRINTPADI50' || promoCode.toUpperCase() === 'BULK2024') {
      const discountAmount = Math.round(subtotal * 0.1); // 10% discount
      setDiscount(discountAmount);
      setPromoApplied(true);
      setToastMessage(`Promo applied! You save ₦${discountAmount.toLocaleString()}`);
      setShowToast(true);
    } else if (promoCode.toUpperCase() === 'FLASH50') {
      const discountAmount = Math.round(subtotal * 0.5); // 50% discount
      setDiscount(discountAmount);
      setPromoApplied(true);
      setToastMessage(`Flash deal! 50% off applied - Save ₦${discountAmount.toLocaleString()}`);
      setShowToast(true);
    } else {
      setToastMessage('Invalid promo code. Try PRINTPADI50 or FLASH50');
      setShowToast(true);
    }
  };

  // Handle checkout
  const handleCheckout = () => {
    if (!agreedToTerms) {
      setToastMessage('Please agree to the terms and conditions');
      setShowToast(true);
      return;
    }
    // Navigate to payment/checkout (implement later)
    setToastMessage('Order placed successfully! We will contact you shortly.');
    setShowToast(true);
    // Clear cart after successful order
    // setCartItems([]);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButton slot="start" fill="clear" onClick={() => history.goBack()}>
            <IonIcon icon={arrowBack} />
          </IonButton>
          <IonTitle>Shopping Cart ({cartItems.length})</IonTitle>
          <IonBadge slot="end" color="warning" style={{ marginRight: '12px' }}>
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items
          </IonBadge>
        </IonToolbar>
      </IonHeader>

      <IonContent style={{ '--background': '#F8F9FA' }}>
        <div style={{ padding: '16px' }}>
          {/* Empty Cart State */}
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <div style={{ fontSize: '64px', marginBottom: '20px' }}>🛒</div>
              <h2 style={{ fontWeight: 'bold', marginBottom: '8px' }}>Your cart is empty</h2>
              <p style={{ color: '#636E72', marginBottom: '24px' }}>Start shopping to add items to your cart</p>
              <IonButton expand="block" onClick={() => history.push('/products')}>
                <IonIcon icon={bagHandleOutline} slot="start" />
                Browse Products
              </IonButton>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <h2 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '12px' }}>
                Cart Items
              </h2>
              
              {cartItems.map(item => (
                <IonCard key={item.id} style={{ borderRadius: '12px', marginBottom: '8px' }}>
                  <IonItemSliding>
                    <IonItemOptions side="end">
                      <IonItemOption color="danger" onClick={() => removeItem(item.id)}>
                        <IonIcon icon={trashOutline} slot="icon-only" />
                      </IonItemOption>
                    </IonItemOptions>

                    <IonCardContent style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        {/* Product Image */}
                        <div style={{
                          width: '80px',
                          height: '80px',
                          background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '32px',
                          flexShrink: 0
                        }}>
                          {item.image}
                        </div>

                        {/* Product Details */}
                        <div style={{ flex: 1 }}>
                          <h3 style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '2px' }}>
                            {item.name}
                          </h3>
                          <p style={{ color: '#636E72', fontSize: '12px', marginBottom: '6px' }}>
                            {item.variant}
                          </p>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontWeight: 'bold', color: '#2D3436', fontSize: '16px' }}>
                              ₦{(item.price * item.quantity).toLocaleString()}
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <IonButton 
                                fill="clear" 
                                size="small"
                                onClick={() => updateQuantity(item.id, -1)}
                                disabled={item.quantity <= item.minOrder}
                              >
                                <IonIcon icon={removeCircleOutline} />
                              </IonButton>
                              <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>
                                {item.quantity}
                              </span>
                              <IonButton 
                                fill="clear" 
                                size="small"
                                onClick={() => updateQuantity(item.id, 1)}
                                disabled={item.quantity >= item.maxOrder}
                              >
                                <IonIcon icon={addCircleOutline} />
                              </IonButton>
                            </div>
                          </div>
                          <p style={{ color: '#636E72', fontSize: '11px', marginTop: '2px' }}>
                            ₦{item.price.toLocaleString()} each • Min: {item.minOrder} • Max: {item.maxOrder}
                          </p>
                        </div>
                      </div>
                    </IonCardContent>
                  </IonItemSliding>
                </IonCard>
              ))}

              {/* Promo Code Section */}
              <IonCard style={{ borderRadius: '12px', marginTop: '12px' }}>
                <IonCardContent>
                  <h3 style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '8px' }}>
                    <IonIcon icon={sparklesOutline} style={{ marginRight: '4px' }} />
                    Promo Code
                  </h3>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <IonInput
                      value={promoCode}
                      placeholder="Enter promo code"
                      onIonChange={e => setPromoCode(e.detail.value!)}
                      style={{
                        border: '1px solid #DFE6E9',
                        borderRadius: '8px',
                        '--padding-start': '12px',
                        flex: 1
                      }}
                      disabled={promoApplied}
                    />
                    <IonButton 
                      size="small" 
                      onClick={applyPromoCode}
                      disabled={promoApplied || !promoCode}
                      style={{ '--border-radius': '8px' }}
                    >
                      {promoApplied ? 'Applied ✓' : 'Apply'}
                    </IonButton>
                  </div>
                  {promoApplied && (
                    <p style={{ color: '#00B894', fontSize: '12px', marginTop: '8px' }}>
                      ✅ Promo code applied! You save ₦{discount.toLocaleString()}
                    </p>
                  )}
                  <p style={{ color: '#636E72', fontSize: '11px', marginTop: '4px' }}>
                    Try: PRINTPADI50 or FLASH50
                  </p>
                </IonCardContent>
              </IonCard>

              {/* Shipping Options */}
              <IonCard style={{ borderRadius: '12px', marginTop: '12px' }}>
                <IonCardContent>
                  <h3 style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '12px' }}>
                    <IonIcon icon={airplaneOutline} style={{ marginRight: '4px' }} />
                    Shipping Method
                  </h3>
                  
                  <div 
                    onClick={() => setSelectedShipping('standard')}
                    style={{
                      padding: '12px',
                      border: `2px solid ${selectedShipping === 'standard' ? '#667eea' : '#DFE6E9'}`,
                      borderRadius: '8px',
                      marginBottom: '8px',
                      cursor: 'pointer',
                      background: selectedShipping === 'standard' ? '#F0F0FF' : 'white'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <strong style={{ fontSize: '14px' }}>Standard Delivery</strong>
                        <p style={{ color: '#636E72', fontSize: '12px', margin: '2px 0 0' }}>5-7 business days</p>
                      </div>
                      <span style={{ fontWeight: 'bold', color: '#2D3436' }}>₦1,500</span>
                    </div>
                  </div>

                  <div 
                    onClick={() => setSelectedShipping('express')}
                    style={{
                      padding: '12px',
                      border: `2px solid ${selectedShipping === 'express' ? '#667eea' : '#DFE6E9'}`,
                      borderRadius: '8px',
                      marginBottom: '8px',
                      cursor: 'pointer',
                      background: selectedShipping === 'express' ? '#F0F0FF' : 'white'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <strong style={{ fontSize: '14px' }}>Express Delivery</strong>
                        <p style={{ color: '#636E72', fontSize: '12px', margin: '2px 0 0' }}>1-2 business days</p>
                      </div>
                      <span style={{ fontWeight: 'bold', color: '#2D3436' }}>₦2,500</span>
                    </div>
                  </div>

                  <div 
                    onClick={() => setSelectedShipping('pickup')}
                    style={{
                      padding: '12px',
                      border: `2px solid ${selectedShipping === 'pickup' ? '#667eea' : '#DFE6E9'}`,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      background: selectedShipping === 'pickup' ? '#F0F0FF' : 'white'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <strong style={{ fontSize: '14px' }}>Local Pickup</strong>
                        <p style={{ color: '#636E72', fontSize: '12px', margin: '2px 0 0' }}>Ready in 48 hours</p>
                      </div>
                      <span style={{ fontWeight: 'bold', color: '#00B894' }}>FREE</span>
                    </div>
                  </div>
                </IonCardContent>
              </IonCard>

              {/* Payment Method */}
              <IonCard style={{ borderRadius: '12px', marginTop: '12px' }}>
                <IonCardContent>
                  <h3 style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '12px' }}>
                    <IonIcon icon={cardOutline} style={{ marginRight: '4px' }} />
                    Payment Method
                  </h3>
                  
                  <div 
                    onClick={() => setSelectedPayment('card')}
                    style={{
                      padding: '12px',
                      border: `2px solid ${selectedPayment === 'card' ? '#667eea' : '#DFE6E9'}`,
                      borderRadius: '8px',
                      marginBottom: '8px',
                      cursor: 'pointer',
                      background: selectedPayment === 'card' ? '#F0F0FF' : 'white',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <IonIcon icon={cardOutline} style={{ fontSize: '20px', color: '#667eea' }} />
                    <div>
                      <strong style={{ fontSize: '14px' }}>Debit/Credit Card</strong>
                      <p style={{ color: '#636E72', fontSize: '12px', margin: 0 }}>Pay with Visa, Mastercard, or Verve</p>
                    </div>
                  </div>

                  <div 
                    onClick={() => setSelectedPayment('transfer')}
                    style={{
                      padding: '12px',
                      border: `2px solid ${selectedPayment === 'transfer' ? '#667eea' : '#DFE6E9'}`,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      background: selectedPayment === 'transfer' ? '#F0F0FF' : 'white',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <IonIcon icon={cashOutline} style={{ fontSize: '20px', color: '#667eea' }} />
                    <div>
                      <strong style={{ fontSize: '14px' }}>Bank Transfer</strong>
                      <p style={{ color: '#636E72', fontSize: '12px', margin: 0 }}>Pay directly to our bank account</p>
                    </div>
                  </div>
                </IonCardContent>
              </IonCard>

              {/* Order Summary */}
              <IonCard style={{ borderRadius: '12px', marginTop: '12px' }}>
                <IonCardContent>
                  <h3 style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '12px' }}>
                    Order Summary
                  </h3>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#636E72' }}>Subtotal</span>
                    <span style={{ fontWeight: 'bold' }}>₦{subtotal.toLocaleString()}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ color: '#00B894' }}>Discount</span>
                      <span style={{ fontWeight: 'bold', color: '#00B894' }}>-₦{discount.toLocaleString()}</span>
                    </div>
                  )}
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#636E72' }}>Shipping</span>
                    <span style={{ fontWeight: 'bold' }}>
                      {selectedShipping === 'pickup' ? 'FREE' : `₦${shippingCost.toLocaleString()}`}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#636E72' }}>VAT (7.5%)</span>
                    <span style={{ fontWeight: 'bold' }}>₦{vat.toLocaleString()}</span>
                  </div>
                  
                  <hr style={{ border: 'none', borderTop: '1px solid #DFE6E9', margin: '12px 0' }} />
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong style={{ fontSize: '16px' }}>Total</strong>
                    <strong style={{ fontSize: '18px', color: '#667eea' }}>₦{total.toLocaleString()}</strong>
                  </div>
                </IonCardContent>
              </IonCard>

              {/* Suggested Products */}
              <h2 style={{ fontWeight: 'bold', fontSize: '16px', marginTop: '20px', marginBottom: '12px' }}>
                <IonIcon icon={sparklesOutline} style={{ marginRight: '4px' }} />
                Frequently Bought Together
              </h2>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '8px',
                marginBottom: '16px'
              }}>
                {suggestions.map(item => (
                  <IonCard key={item.id} style={{ borderRadius: '12px', margin: 0, cursor: 'pointer' }}>
                    <div style={{
                      height: '100px',
                      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '36px'
                    }}>
                      {item.image}
                    </div>
                    <IonCardContent style={{ padding: '8px' }}>
                      <h4 style={{ fontWeight: 'bold', fontSize: '12px', marginBottom: '2px' }}>{item.name}</h4>
                      <p style={{ color: '#636E72', fontSize: '10px', marginBottom: '4px' }}>{item.description}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#2D3436' }}>
                          ₦{item.price.toLocaleString()}
                        </span>
                        <IonButton size="small" fill="outline" style={{ fontSize: '10px' }}>
                          + Add
                        </IonButton>
                      </div>
                    </IonCardContent>
                  </IonCard>
                ))}
              </div>

              {/* Terms and Checkout */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <IonCheckbox 
                    checked={agreedToTerms} 
                    onIonChange={e => setAgreedToTerms(e.detail.checked)}
                  />
                  <span style={{ fontSize: '12px', color: '#636E72' }}>
                    I agree to the <a href="#" style={{ color: '#667eea' }}>Terms & Conditions</a> and <a href="#" style={{ color: '#667eea' }}>Privacy Policy</a>
                  </span>
                </div>

                <IonButton 
                  expand="block" 
                  size="large"
                  onClick={handleCheckout}
                  style={{ 
                    '--background': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    '--border-radius': '12px',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    height: '56px'
                  }}
                >
                  <IonIcon icon={shieldCheckmarkOutline} slot="start" />
                  Place Order • ₦{total.toLocaleString()}
                </IonButton>
              </div>
            </>
          )}
        </div>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={3000}
          position="top"
          color="dark"
        />
      </IonContent>
    </IonPage>
  );
};

export default Cart; 