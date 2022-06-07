const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    getDirection: true,
});

scroll.on('scroll', (instance) => {
    document.documentElement.setAttribute('data-direction', instance.direction)
});

