export const LoadEnv = {
  PAYMENT_BASE_URL: import.meta.env.VITE_PAYMENT_BASE_URL,
  CANVA_BASE_URL: import.meta.env.VITE_CANVA_BASE_URL,
  JOTFORM_REDIRECT_LINK: import.meta.env.VITE_JOTFORM_REDIRECT_LINK,
  LINE_LIFF_ID: import.meta.env.VITE_LINE_LIFF_ID,
  LINE_VERIFY_ACCESS_TOKEN_URL:
    import.meta.env.VITE_LINE_VERIFY_ACCESS_TOKEN_URL || 'https://api.line.me/oauth2/v2.1/verify',
};
