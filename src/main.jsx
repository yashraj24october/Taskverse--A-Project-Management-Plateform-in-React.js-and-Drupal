
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@radix-ui/themes/styles.css";
import { SnackbarProvider, useSnackbar } from 'notistack'

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
        <SnackbarProvider 
        anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}>
                <App />
        </SnackbarProvider>
        
)
