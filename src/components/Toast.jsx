import { useEffect } from "react";

export default function Toast({
  show,
  message,
  type = "success",
  onClose,
}) {
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [show, onClose]);

  if (!show) return null;

  const styles = {
    success: "bg-green-600",
    error: "bg-red-600",
    warning: "bg-yellow-500",
    info: "bg-blue-600",
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      <div
        className={`${styles[type]} text-white px-5 py-3 rounded-lg shadow-lg`}
      >
        {message}
      </div>
    </div>
  );
}