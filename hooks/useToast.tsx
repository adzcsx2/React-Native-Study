import {
  useToast as useGluestackToast,
  Toast,
  ToastTitle,
  ToastDescription,
} from "@/components/ui/toast";

const useToast = () => {
  const toast = useGluestackToast();

  const showToast = (
    message: string,
    options?: {
      title?: string;
      action?: "success" | "error" | "warning" | "info" | "muted";
      duration?: number;
    }
  ) => {
    toast.show({
      placement: "bottom",
      duration: options?.duration || 2000,

      render: ({ id }) => {
        const uniqueToastId = "toast-" + id;
        return (
          <Toast
            nativeID={uniqueToastId}
            action={options?.action || "muted"}
            variant="solid"
          >
            {options?.title && <ToastTitle>{options.title}</ToastTitle>}
            <ToastDescription>{message}</ToastDescription>
          </Toast>
        );
      },
    });
  };

  return {
    toast: showToast,
    closeAll: toast.closeAll,
    close: toast.close,
  };
};

export default useToast;
