export const openInNewTab = (url: string | URL | undefined) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export const refreshPage = () => {
  window.location.reload();
};
