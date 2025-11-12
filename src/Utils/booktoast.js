import toast from "react-hot-toast";


export const bookToast = {
  success: (message) =>
    toast.success(message, {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
        background: '#FFFAEE',
        borderRadius: '12px',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      },
    }),

  error: (message) =>
    toast.error(message, {
      style: {
        border: '1px solid #8B0000',
        padding: '16px',
        color: '#8B0000',
        background: '#FFF0F0',
        borderRadius: '12px',
      },
      iconTheme: {
        primary: '#8B0000',
        secondary: '#FFF0F0',
      },
    }),
};


