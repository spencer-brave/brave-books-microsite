import { useState } from "react";
import "./book-club-product.css";
import FibcProductCarousel from "../Product Carousel/product-carousel.jsx";

export default function BookClubProduct(settings) {
  const [selected, setSelected] = useState("annual");
  const plans = [
    {
      id: "monthly",
      label: "Monthly",
      price: "$18.99/book",
      discount: "SAVE 17%",
      value: "46060371017986",
      renew: "Renews monthly",
    },
    {
      id: "annual",
      label: "Annual",
      price: "$16.99/book",
      discount: "SAVE 25%",
      value: "46054529499394",
      renew: "Renews annually",
    },
  ];
  const sellingPlans = {
    monthly: "3010134274",
    annual: "3010167042",
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    const atcBtn = e.currentTarget;
    atcBtn.innerHTML = "adding...";
    atcBtn.disabled = true;

    const selectedPlan = document.querySelector("input:checked");
    const isAnnualPlan = selectedPlan.id === "annual";
    const productIds = [settings.props.freeBookId];
    if (isAnnualPlan && settings.props.bonusProductId) {
      productIds.push(settings.props.bonusProductId);
    }
    const bodyData = {
      subId: selectedPlan.value,
      sellingPlanId: sellingPlans[selectedPlan.id],
      productIds,
    };

    try {
      const response = await fetch(
        `${process.env.BRAVE_BACKEND_URL}/create-cart`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        }
      );

      const data = await response.json();

      if (data?.checkoutUrl) {
        if (window.gtag) {
          window.gtag("event", "headless_adds_to_cart", {
            headless_adds_to_cart: 1,
            event_category: "engagement",
            event_label: "Add to Cart button click",
          });
        }
        atcBtn.innerHTML = "Added";
        atcBtn.disabled = false;
        window.location.href = data.checkoutUrl;
      } else {
        console.error("No checkout URL returned:", data);
      }
    } catch (error) {
      console.error("Error creating checkout:", error);
    }
  };

  return (
    <section
      style={{ background: settings.props.bgColor }}
      className="fibc-product__section"
      id="fibc-product-section"
    >
      <div className="container">
        <div className="grid-layout__center fibc-product__outer">
          <div className="fibc-product__images" id="fibc-product__images">
            <div className="fibc-product__image-container">
              <FibcProductCarousel
                images={[
                  "//bravebooks.us/cdn/shop/files/FIBC_Books_Updated_092325.webp?v=1758651737",
                  "//bravebooks.us/cdn/shop/files/S3B9-Cover.webp?v=1712952423",
                  "//bravebooks.us/cdn/shop/files/FIBC_Book_Value_Prop_Openspread_Desat.webp?v=1730740690",
                  "//bravebooks.us/cdn/shop/files/5_-_BRAVE_Box_Connected_Stories_1.webp?v=1725042814",
                  "//bravebooks.us/cdn/shop/files/FIBC_Games_and_Activities_AI.webp?v=1730740691",
                  "//bravebooks.us/cdn/shop/files/7_-_BRAVE_BOX_AUTHORS_1.webp?v=1725042872",
                  "//bravebooks.us/cdn/shop/files/Stop_Motion_Books_GIF.gif?v=1724165817",
                  "//bravebooks.us/cdn/shop/files/FIBC_INFO_7c5b5e62-0d14-42a1-b908-f48d666b0947.webp?v=1733329823",
                ]}
              />
            </div>
          </div>

          <div className="fibc-product__information-container">
            <div className="fibc-product__information">
              <div className="fibc-product__section-header fibc-header__desktop">
                <h2 className="heading-lg">BRAVE Book Club</h2>
                <div className="reviews-container">
                  <img
                    loading="eager"
                    width="100"
                    height="20"
                    style={{ height: "unset" }}
                    alt="4.6 stars out of 5"
                    src="https://cdn.shopify.com/s/files/1/0564/9032/8257/files/4-5-stars_copy.webp?v=1761678906"
                  />
                  <a href="#yotpo-app">2,815 Reviews</a>
                </div>
                <div className="free-shipping-badge">
                  <p>FREE Shipping</p>
                </div>
              </div>

              <div>
                <div>
                  <h3>Pick your plan</h3>
                  <div className="fibc-product__select-plan">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0564/9032/8257/files/sp2-Valor-Arthur.webp?v=1761679131"
                      alt="Lion and Tiger standing together"
                      width="100px"
                      height="100px"
                      className="heroes-peeking__image"
                      style={{
                        position: "absolute",
                        right: "5px",
                        top: "-84px",
                        width: "150px",
                        height: "unset",
                        zIndex: 4,
                      }}
                    />
                    <div className="fibc-product__plans">
                      {plans.map((plan) => (
                        <div
                          key={plan.id}
                          className={`fibc-product__container ${
                            selected === plan.id
                              ? "fibc-product__info-open"
                              : ""
                          }`}
                        >
                          <div
                            className="fibc-product__plan-block"
                            onClick={() => setSelected(plan.id)}
                          >
                            <div className="fibc-product__radio-button vertical-center">
                              <label
                                className="fibc__plan-radio-label visually-hidden"
                                htmlFor={plan.id}
                              />
                              <input
                                id={plan.id}
                                type="radio"
                                className="fibc__plan-select"
                                name={plan.id}
                                value={plan.value}
                                checked={selected === plan.id}
                                onChange={() => setSelected(plan.id)}
                              />
                            </div>

                            <div>
                              <p>{plan.label}</p>
                              <span>{plan.renew}</span>
                            </div>

                            <div className="fibc-product__price-container">
                              <span className="fibc-product__percent-off">
                                {plan.discount}
                              </span>
                              <p>{plan.price}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    data-to-checkout="true"
                    id="LP1_Add-to-cart"
                    className="primary-btn fibc-product__atc-submit"
                    aria-label="Add to cart"
                    type="button"
                    onClick={handleCheckout}
                  >
                    Add To Cart
                  </button>
                  <p className="fibc-product__atc-disclaimer">
                    <b>FREE</b> Shipping | Cancel anytime | 30 day money-back
                    guarantee
                  </p>
                </div>
              </div>

              <div style={{ marginTop: "25px" }}>
                <div className="fibc-product__what-to-expect">
                  <p>
                    We ship a new book every month that's a part of our
                    immersive world of Freedom Island. As soon as you sign up,
                    you get FREE access to BRAVE+. Every book has games and
                    activities in the back of the book for you and your kids to
                    establish healthy habits around intentional time spent
                    together.
                  </p>
                  <p>What's included with your first order:</p>
                  <ul>
                    <li>
                      <strong>| $16.99 | </strong>
                      <em>BRAVE as a Lion</em>
                    </li>
                    <li>
                      <strong>| FREE |</strong>&nbsp;
                      <em>The Fox, the Fair, and the Invention Scare</em>
                    </li>
                    <li>
                      <strong>| FREE | </strong>Access to BRAVE+ streaming
                      platform
                    </li>
                    <li>
                      <strong>| FREE | </strong>A map of Freedom Island and
                      stickers
                    </li>
                    <li>
                      <strong>| FREE | </strong>Digital resources
                    </li>
                    <li>
                      <strong>| FREE | </strong>Free shipping for the life of
                      your subscription
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
