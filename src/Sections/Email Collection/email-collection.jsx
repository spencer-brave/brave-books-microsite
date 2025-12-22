import styles from "./email-collection.css";
import SectionStyles from "../../Components/section-styles";

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      return false;
    }
  });
});

const zapIds = {
  "Red-white-and-you": "2tl9ato",
  "Biblical Stories": "uik3wop",
  "Parent Action Guide": "usibo9e",
  "US Presidents": "2376cg8",
  "Coloring book": "2376yjk",
  Civics: "ua8aa2l",
  "Constitution Crosswalk": "utujj12",
  "Woke Education": "2fbbfa6",
  Trailblazers: "2pwf883",
  "Cash course": "212hg0v",
  "Tip-Off": "u21086u",
  "Ten Commandments": "2qrstud",
};

const changeFormStatus = (status, id) => {
  document
    .querySelector(`#email-form__${id}`)
    .setAttribute("data-form-status", status);
};

const sendZap = (email, zapId) => {
  fetch(`https://hooks.zapier.com/hooks/catch/9571534/${zapId}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ Email: email }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.status);
    })
    .catch((err) => console.error(err));
};

const emailToSheet = (formId, sheetName, email, afterSubmit) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailFormContainer = document.querySelector(".email-form__container");
  const submitLink = emailFormContainer.dataset.afterSubmit;
  emailFormContainer.dataset.afterSubmit = "";
  if (regex.test(email)) {
    const url = `https://script.google.com/macros/s/AKfycbyLQ0jGTytkcB-LkczKn-dolOzxH8eugTruEZTXj1qeOOvdqxwqxk_3OQHLlJfSNL0RhQ/exec?tab=${sheetName}&Emails=${email}&Date=${new Date()
      .toISOString()
      .slice(0, 16)
      .replace("T", " ")}`;
    fetch(url, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((res) => {
        sendZap(email, zapIds[sheetName]);
        changeFormStatus("success", formId);
        window.location.href = `https://bravebooks.us/pages/prageru-thank-you-page?resourceLink=${submitLink}`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    changeFormStatus("error", formId);
  }
};

const handleEmailClick = (e) => {
  const formId = e.currentTarget.dataset.formId;

  changeFormStatus("loading", formId);

  const form = document.querySelector(`#email-form__${formId}`);
  const sheetName = form.dataset.sheetName;
  const email = form.querySelector("input[name='Emails']").value;
  const afterSubmit = form.dataset.afterSubmit;

  console.log("ZapID:", zapIds[sheetName]);

  emailToSheet(formId, sheetName, email, afterSubmit);
};

export default function EmailCollection(settings) {
  return (
    <section
      id={`email-collection${settings.id}`}
      className={`email-collection__section ${styles.section}`}
      style={{ backgroundColor: settings.props.bgColor }}
    >
      <SectionStyles
        sectionId={`email-collection${settings.id}`}
        props={settings.props}
      />
      <div className="container">
        <div className={settings.props.contentLayout}>
          <div className="email-form__content">
            <div
              style={{ order: settings.props.order }}
              className={styles.htmlContent}
              dangerouslySetInnerHTML={{ __html: settings.props.htmlContent }}
            />
            <div
              id={`email-form__${settings.id}`}
              className="email-form__container email-form__element"
              data-form-status="ready"
              data-sheet-name={settings.props.sheetName}
              data-after-submit={settings.props.afterSubmit}
            >
              <form className="email-submit__form">
                <input
                  name="Emails"
                  type="email"
                  placeholder="Your email"
                  required=""
                />
                <button
                  className="email-submit__btn"
                  type="button"
                  data-form-id={settings.id}
                  onClick={handleEmailClick}
                >
                  <span className="email-form__arrow">Submit</span>
                </button>
                <svg
                  className="email-form__spinner"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <style>{`
                    .spinner_P7sC {
                      transform-origin: center;
                      animation:spinner_svv2 .75s infinite linear
                    }
                    @keyframes spinner_svv2 {
                      100% {
                        transform: rotate(360deg)
                      }
                    }
                  `}</style>
                  <path
                    d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                    className="spinner_P7sC"
                  />
                </svg>
              </form>
              <small>
                By subscribing, you acknowledge and agree to PragerU’s{" "}
                <a href="https://www.prageru.com/terms?ref=c4alp33xx0&sub_id=Author">
                  Terms of Use{" "}
                </a>
                and{" "}
                <a href="https://www.prageru.com/privacy?ref=c4alp33xx0&sub_id=Author">
                  Privacy Policy{" "}
                </a>
                , and BRAVE Books'{" "}
                <a href="https://bravebooks.us/policies/terms-of-service">Terms of Use</a> and{" "}
                <a href="https://bravebooks.us/policies/privacy-policy">Privacy Policy</a>.
              </small>
              <div className="email-form__email-error">
                <p>Enter a valid email</p>
              </div>
            </div>
          </div>
          <div>
            <img
              loading={settings.id > 1 ? "lazy" : "eager"}
              fetchPriority={settings.id > 1 ? "low" : "high"}
              decoding="async"
              src={settings.props.image}
              alt={settings.props.altText}
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>
      <script src="./email-colllection.js" defer></script>
    </section>
  );
}
