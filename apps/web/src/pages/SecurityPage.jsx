import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// This page has been deprecated/deleted as per requirements.
// Redirecting to home page if accessed directly.
function SecurityPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/', { replace: true });
  }, [navigate]);

  return null;
}

export default SecurityPage;