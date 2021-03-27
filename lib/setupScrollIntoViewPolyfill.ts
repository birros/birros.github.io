const setupScrollIntoViewPolyfill = async () => {
  if (process.browser) {
    const smoothscroll = (await import('smoothscroll-polyfill')).default
    smoothscroll.polyfill()
  }
}

export default setupScrollIntoViewPolyfill
