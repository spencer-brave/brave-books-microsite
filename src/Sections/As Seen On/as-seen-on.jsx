import "./as-seen-on.css";

export default function AsSeenOn(settings) {
  return (
    <section className="split-card__section">
      <div className="background__container">
        <div
          className="split-card__background"
          style={{ backgroundColor: settings.props.topColor, display: "block" }}
        ></div>
        <div
          className="split-card__background"
          style={{ backgroundColor: settings.props.bottomColor, display: "block" }}
        ></div>
      </div>
      <div className="split-card__container">
        <div className="split-card__outer">
          <div>
            <h4 class="text-center heading-sm">AS SEEN ON</h4>
          </div>
          <div className="split-card__content">
            <div className="split-card__inner">
              <img
                src="https://bravebooks.us/cdn/shop/files/fox-bussiness.png?v=1669794182&width=100"
                alt="Fox Business logo"
                srcset="https://bravebooks.us/cdn/shop/files/fox-bussiness.png?v=1669794182&width=100 100w"
                width="100"
                height="52"
                loading="lazy"
              />
            </div>
            <div className="split-card__inner">
              <img
                src="https://bravebooks.us/cdn/shop/files/fox-news_9f8869ca-5065-4b13-87b0-6e3d9e5ef503.png?v=1669794160&width=100"
                alt="Fox News logo"
                srcset="https://bravebooks.us/cdn/shop/files/fox-news_9f8869ca-5065-4b13-87b0-6e3d9e5ef503.png?v=1669794160&width=100 100w"
                width="100"
                height="82"
                loading="lazy"
              />
            </div>
            <div className="split-card__inner">
              <img
                src="https://bravebooks.us/cdn/shop/files/2024-giving-in-faith-press-logo-christianpost-200x200-1-328x410.webp?v=1758658982&width=100"
                alt=""
                srcset="https://bravebooks.us/cdn/shop/files/2024-giving-in-faith-press-logo-christianpost-200x200-1-328x410.webp?v=1758658982&width=100 100w"
                width="100"
                height="40"
                loading="lazy"
              />
            </div>
            <div className="split-card__inner">
              <img
                src="https://bravebooks.us/cdn/shop/files/png-clipart-the-washington-post-logo-newspaper-logos-usa.webp?v=1758656311&width=100"
                alt=""
                srcset="https://bravebooks.us/cdn/shop/files/png-clipart-the-washington-post-logo-newspaper-logos-usa.webp?v=1758656311&width=100 100w"
                width="100"
                height="51"
                loading="lazy"
              />
            </div>
            <div className="split-card__inner">
              <img
                src="https://bravebooks.us/cdn/shop/files/the-joe-rogan-experience-logo.webp?v=1709736779&width=100"
                alt="The Joe Rogan Experience logo"
                srcset="https://bravebooks.us/cdn/shop/files/the-joe-rogan-experience-logo.webp?v=1709736779&width=100 100w"
                width="100"
                height="100"
                loading="lazy"
              />
            </div>
            <div className="split-card__inner">
              <img
                src="https://bravebooks.us/cdn/shop/files/new-york_0f86d2c5-c7f9-4525-9c84-a395f7c75fee.png?v=1669794204&width=100"
                alt="New York Post logo"
                srcset="https://bravebooks.us/cdn/shop/files/new-york_0f86d2c5-c7f9-4525-9c84-a395f7c75fee.png?v=1669794204&width=100 100w"
                width="100"
                height="99"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
