const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Image Selectors and Assignments =======================
const logo = document.querySelector("#logo-img");
logo.src = siteContent["nav"]["img-src"];

const heroImage = document.querySelector("#cta-img");
heroImage.src = siteContent["cta"]["img-src"];

const middleWrap = document.querySelector("#middle-img");
middleWrap.src = siteContent["main-content"]["middle-img-src"];

// Text Selectors and Assignments =======================
const heroText = document.querySelector("h1");
heroText.textContent = siteContent.cta.h1;

const mainTextHeaders = document.querySelectorAll("h4");
mainTextHeaders[0].textContent = siteContent["main-content"]["features-h4"];
mainTextHeaders[1].textContent = siteContent["main-content"]["about-h4"];
mainTextHeaders[2].textContent = siteContent["main-content"]["services-h4"];
mainTextHeaders[3].textContent = siteContent["main-content"]["product-h4"];
mainTextHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
mainTextHeaders[5].textContent = siteContent["contact"]["contact-h4"];

const paragraphText = document.querySelectorAll("p");
paragraphText[0].textContent = siteContent["main-content"]["features-content"];
paragraphText[1].textContent = siteContent["main-content"]["about-content"];
paragraphText[2].textContent = siteContent["main-content"]["services-content"];
paragraphText[3].textContent = siteContent["main-content"]["product-content"];
paragraphText[4].textContent = siteContent["main-content"]["vision-content"];
paragraphText[5].textContent = siteContent.contact.address;
paragraphText[6].textContent = siteContent.contact.phone;
paragraphText[7].textContent = siteContent.contact.email;
paragraphText[8].textContent = siteContent.footer.copyright;

// Button Selectors and Assignments =======================
const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta.button;

// Adding Nav Items =======================
const navv = document.querySelector("nav");

const blogNav = document.createElement("a");
blogNav.textContent = "Blog";
navv.appendChild(blogNav);

const supportNav = document.createElement("a");
supportNav.textContent = "Support";
navv.appendChild(supportNav);

// Nav Selectors and Assignments =======================
const navItems = document.querySelectorAll("a");
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

// Converting all Nav Items to Green =======================
navItems.forEach(item => (item.style = "color: green"));

// Experimentation starts here =======================
// Adding a class to all nav items at once
navItems.forEach(item => (item.className = "navItemSet"));

// Toggling orange text color on button
ctaButton.classList.toggle("testing");
ctaButton.classList.toggle("testing");
ctaButton.classList.toggle("testing");
ctaButton.classList.toggle("testing");
