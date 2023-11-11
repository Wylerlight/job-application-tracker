import "./LandingPage.css";

export default function LandingPage() {
  document.addEventListener("DOMContentLoaded", () => {
    const interBubble = document.querySelector(".interactive");
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    window.addEventListener("mousemove", (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();
  });
  return (
    <div className="landing__parent">
      <div className="landing__wrapper">
        <div className="landing"></div>
        <section className="landing__directions">
          <h2 className="landing__title">WELCOME TO AppTrack</h2>
          <p className="landing__desc">
            SIGN IN or LOG IN with your unique credentials
          </p>
          <p className="landing__desc">NAVIGATE to your profile</p>
          <p className="landing__desc">
            ENTER your newly submitted job applications
          </p>
          <p className="landing__desc">
            TRACK your submitted applications, interviews, and application
            denials
          </p>
        </section>
      </div>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </div>
  );
}
