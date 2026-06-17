import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

class PrototypeCrashBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('AntrophAI prototype render crash:', error, info);
  }

  resetMainSave = () => {
    try {
      window.localStorage.removeItem('antrophia-web-prototype-v037-1-runtime-render-fix');
    } catch (error) {
      console.error('Failed to remove prototype save:', error);
    }
    window.location.reload();
  };

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div style={{ minHeight: '100vh', background: '#000', color: '#f6ad55', fontFamily: 'monospace', padding: 24 }}>
        <div style={{ border: '1px solid #9a3412', background: '#120500', padding: 16, maxWidth: 900 }}>
          <h1 style={{ color: '#fdba74', marginTop: 0 }}>AntrophAI prototype hit a render error</h1>
          <p>Most likely cause: an older saved prototype state is incompatible with this version.</p>
          <p>The error has also been written to the browser console for debugging.</p>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#fed7aa', border: '1px solid #7c2d12', padding: 12 }}>
            {String(this.state.error && (this.state.error.stack || this.state.error.message || this.state.error))}
          </pre>
          <button
            onClick={this.resetMainSave}
            style={{ background: '#7f1d1d', color: '#fff', border: '1px solid #fecaca', padding: '8px 12px', cursor: 'pointer' }}
          >
            Clear main local save and reload
          </button>
          <p style={{ marginTop: 12, color: '#fb923c' }}>Snapshot slots may still exist unless the browser site data is fully cleared.</p>
        </div>
      </div>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrototypeCrashBoundary>
      <App />
    </PrototypeCrashBoundary>
  </React.StrictMode>
);
