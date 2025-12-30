import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-gray-800 group-[.toaster]:text-white group-[.toaster]:border-gray-600 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-gray-300",
          actionButton: "group-[.toast]:bg-cyan-500 group-[.toast]:text-white hover:group-[.toast]:bg-cyan-600",
          cancelButton: "group-[.toast]:bg-gray-600 group-[.toast]:text-gray-200 hover:group-[.toast]:bg-gray-500",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
