export const useLockScroll = () => {
  const setLockScroll = show => {
    if (show) {
      !document.body.classList.contains("m-body-lock-scroll") &&
        document.body.classList.add("m-body-lock-scroll");
    } else {
      const list = Array.from(
        document.querySelectorAll('div[role="dialog"][aria-modal="true"]')
      );
      if (list.length > 0) return;
      document.body.classList.remove("m-body-lock-scroll");
    }
  };

  return {
    setLockScroll
  };
};
