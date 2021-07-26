let controller = new ScrollMagic.Controller();
const tl = new TimelineMax();

const reviews = document.getElementById("reviews");
const container = document.querySelector(".cards");
const cardOne = document.querySelector("#card1");
const cardTwo = document.querySelector("#card2");
const cardThree = document.querySelector("#card3");
const textOne = document.querySelector("#review-text1");
const textTwo = document.querySelector("#review-text2");
const textThree = document.querySelector("#review-text3");
const AuthorOne = document.querySelector("#review-author1");
const AuthorTwo = document.querySelector("#review-author2");
const AuthorThree = document.querySelector("#review-author3");

tl.fromTo(
  container,
  1,
  { scaleX: "0", transformOrigin: "left" },
  { scaleX: "1", ease: Power1.easeInOut }
)
  .fromTo(
    cardOne,
    2.5,
    { opacity: "0", x: "100%" },
    { opacity: "1", x: "0%", ease: Power1.easeInOut },
    "-=0.3"
  )
  .fromTo(
    textOne,
    1,
    { opacity: "0", x: "-80%" },
    { opacity: "1", x: "0%", ease: Power2.easeInOut },
    "-=0.4"
  )
  .fromTo(
    AuthorOne,
    1,
    { opacity: "0", x: "-250%" },
    { opacity: "1", x: "0%", ease: Power3.easeInOut },
    "-=0.7"
  )
  .fromTo(
    cardTwo,
    1.5,
    { opacity: "0", x: "-100%" },
    { opacity: "1", x: "0%", ease: Power1.easeInOut }
  )
  .fromTo(
    textTwo,
    1,
    { opacity: "0", x: "80%" },
    { opacity: "1", x: "0%", ease: Power2.easeInOut },
    "-=0.4"
  )
  .fromTo(
    AuthorTwo,
    1,
    { opacity: "0", x: "250%" },
    { opacity: "1", x: "0%", ease: Power2.easeInOut },
    "-=0.7"
  )
  .fromTo(
    cardThree,
    1.5,
    { opacity: "0", x: "100%" },
    { opacity: "1", x: "0%", ease: Power1.easeInOut }
  )
  .fromTo(
    textThree,
    1,
    { opacity: "0", x: "-80%" },
    { opacity: "1", x: "0%", ease: Power2.easeInOut },
    "-=0.4"
  )
  .fromTo(
    AuthorThree,
    1,
    { opacity: "0", x: "-250%" },
    { opacity: "1", x: "0%", ease: Power2.easeInOut },
    "-=0.7"
  );

let scene = new ScrollMagic.Scene({
  triggerElement: reviews,
  duration: "100%",
  triggerHook: 0.9,
})
  .setTween(tl)
  .addTo(controller);
