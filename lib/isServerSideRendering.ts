const isServerSideRendering = () => typeof navigator === 'undefined'

export default isServerSideRendering
