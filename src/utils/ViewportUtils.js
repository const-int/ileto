const ViewportUtils = {
  setAppDimensionsViewportListner() {
    const root = document.documentElement;

    if (!visualViewport) {
      return;
    }

    function setAppSize() {
      root.style.setProperty('--app-height', `${visualViewport.height}px`);
      root.style.setProperty('--app-top-offset', `${visualViewport.pageTop}px`);
    }

    setAppSize();

    window.addEventListener("resize", setAppSize);

    return () => window.removeEventListener("resize", setAppSize);
  },
}

export default ViewportUtils;