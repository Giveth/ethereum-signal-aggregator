export default {
  // Super slow spring, for debugging purposes
  debug: { tension: 10, friction: 40 },

  // Slow spring, can be used to move large things (e.g. a side panel).
  superLazy: { tension: 50, friction: 40 },
  lazy: { tension: 50, friction: 10 },

  // Medium speed spring, can be used to move small objects
  smooth: { tension: 120, friction: 12 },

  slow: { tension: 150, friction: 18 },
  normal: { tension: 190, friction: 22 },
  fast: { tension: 220, friction: 24 },
  swift: { tension: 400, friction: 28 },
}
