import { IonPage, IonContent, IonButton, IonIcon, IonSpinner } from '@ionic/react';
import { personOutline, arrowForwardOutline, logoGoogle, logoApple, mailOutline, phonePortraitOutline } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Splash: React.FC = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [showOptions, setShowOptions] = useState(false);

  // Simulate app loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowOptions(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleGuestAccess = () => {
    // Skip login, go directly to home
    history.push('/home');
  };

  const handleLogin = () => {
    // Navigate to login page
    history.push('/account');
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Implement social login logic here
    history.push('/home');
  };

  return (
    <IonPage>
      <IonContent fullscreen style={{ '--background': 'white' }}>
        {/* Loading State */}
        {loading && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '40px'
          }}>
            {/* Logo Animation */}
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '30px',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              animation: 'pulseLogo 1.5s ease-in-out infinite'
            }}>
              <span style={{ fontSize: '48px' }}>🖨️</span>
            </div>

            {/* App Name */}
            <h1 style={{
              color: 'white',
              fontSize: '36px',
              fontWeight: '900',
              marginBottom: '8px',
              letterSpacing: '-1px'
            }}>
              PrintPadi
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '16px',
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              Your Print Partner
            </p>

            {/* Loading Spinner */}
            <IonSpinner name="circles" color="light" style={{ width: '48px', height: '48px' }} />
            
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '14px',
              marginTop: '20px'
            }}>
              Loading your experience...
            </p>
          </div>
        )}

        {/* Options State */}
        {showOptions && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '40px 24px',
            background: '#F8F9FA'
          }}>
            {/* Small Logo */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
            }}>
              <span style={{ fontSize: '36px' }}>🖨️</span>
            </div>

            {/* Welcome Text */}
            <h2 style={{
              fontSize: '28px',
              fontWeight: '900',
              color: '#2D3436',
              marginBottom: '8px',
              textAlign: 'center'
            }}>
              Welcome to PrintPadi
            </h2>
            <p style={{
              color: '#636E72',
              fontSize: '15px',
              textAlign: 'center',
              marginBottom: '32px',
              lineHeight: '1.5'
            }}>
              Premium printing services at your fingertips. Business cards, mugs, t-shirts & more!
            </p>

            {/* Login Button */}
            <IonButton
              expand="block"
              size="large"
              onClick={handleLogin}
              style={{
                width: '100%',
                '--background': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                '--border-radius': '16px',
                fontWeight: '700',
                fontSize: '16px',
                height: '56px',
                marginBottom: '12px',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
              }}
            >
              <IonIcon icon={personOutline} slot="start" />
              Sign In / Register
            </IonButton>

            {/* Guest Button */}
            <IonButton
              expand="block"
              size="large"
              fill="outline"
              onClick={handleGuestAccess}
              style={{
                width: '100%',
                '--border-color': '#667eea',
                '--color': '#667eea',
                '--border-radius': '16px',
                fontWeight: '600',
                fontSize: '16px',
                height: '56px',
                marginBottom: '24px',
                '--border-width': '2px'
              }}
            >
              Continue as Guest
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonButton>

            {/* Divider */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              marginBottom: '24px'
            }}>
              <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #DFE6E9' }} />
              <span style={{ padding: '0 16px', color: '#636E72', fontSize: '13px', fontWeight: '500' }}>
                or continue with
              </span>
              <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #DFE6E9' }} />
            </div>

            {/* Social Login Options */}
            <div style={{
              display: 'flex',
              gap: '12px',
              width: '100%',
              marginBottom: '32px'
            }}>
              <IonButton
                expand="block"
                fill="outline"
                onClick={() => handleSocialLogin('Google')}
                style={{
                  flex: 1,
                  '--border-color': '#DFE6E9',
                  '--color': '#2D3436',
                  '--border-radius': '12px',
                  height: '52px'
                }}
              >
                <IonIcon icon={logoGoogle} slot="start" style={{ color: '#DB4437' }} />
                Google
              </IonButton>

              <IonButton
                expand="block"
                fill="outline"
                onClick={() => handleSocialLogin('Email')}
                style={{
                  flex: 1,
                  '--border-color': '#DFE6E9',
                  '--color': '#2D3436',
                  '--border-radius': '12px',
                  height: '52px'
                }}
              >
                <IonIcon icon={mailOutline} slot="start" style={{ color: '#667eea' }} />
                Email
              </IonButton>
            </div>

            {/* Trust Badges */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 16px',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              marginBottom: '16px'
            }}>
              <span style={{ fontSize: '20px' }}>🔒</span>
              <div>
                <p style={{ fontWeight: '600', fontSize: '13px', margin: 0, color: '#2D3436' }}>
                  Secure & Trusted
                </p>
                <p style={{ fontSize: '11px', color: '#636E72', margin: 0 }}>
                  2,500+ happy customers
                </p>
              </div>
            </div>

            {/* Privacy Note */}
            <p style={{
              fontSize: '11px',
              color: '#636E72',
              textAlign: 'center',
              lineHeight: '1.4'
            }}>
              By continuing, you agree to PrintPadi's{' '}
              <a href="#" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '500' }}>
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '500' }}>
                Privacy Policy
              </a>
            </p>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Splash;