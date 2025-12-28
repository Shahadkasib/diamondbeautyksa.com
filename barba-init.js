barba.init({
  transitions: [{
    name: 'fade-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0,
        y: 20,
        duration: 0.4
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0,
        y: 20,
        duration: 0.4
      });
    }
  }]
});