(() => {
  "use strict";

  const config = window.VTIU_SITE_CONFIG || {};
  const base = (config.lmsBaseUrl || "").replace(/\/+$/, "");

  const destinations = {
    student: `${base}${config.studentPath || "/student/login"}`,
    teacher: `${base}${config.teacherPath || "/teacher/login"}`,
    admissions: `${base}${config.admissionsPath || "/admissions/"}`
  };

  document.querySelectorAll("[data-portal]").forEach((link) => {
    const url = destinations[link.dataset.portal];
    if (url) link.href = url;
    else {
      link.href = "#contact";
      link.addEventListener("click", (event) => {
        if (link.getAttribute("href") === "#contact") return;
        event.preventDefault();
      });
    }
  });

  const contactValues = {
    email: config.generalEmail || "",
    address: config.campusAddress || ""
  };

  document.querySelectorAll("[data-contact-value]").forEach((element) => {
    const value = contactValues[element.dataset.contactValue];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-contact]").forEach((link) => {
    const email = link.dataset.contact === "admissions"
      ? config.admissionsEmail
      : config.generalEmail;
    if (email) {
      link.href = `mailto:${encodeURIComponent(email)}`;
    }
  });

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-nav");
  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.querySelector(".sr-only").textContent = isOpen
        ? "Open navigation"
        : "Close navigation";
      navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.querySelector(".sr-only").textContent = "Open navigation";
        navigation.classList.remove("is-open");
      });
    });
  }

  const year = document.querySelector("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());

  const form = document.querySelector("#enquiry-form");
  const formNote = document.querySelector("#form-note");
  if (form && formNote) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!config.generalEmail) {
        formNote.textContent =
          "Your message has not been sent: VTIU has not yet configured its official enquiry email.";
        formNote.classList.add("form-note-warning");
        return;
      }

      const data = new FormData(form);
      const subject = encodeURIComponent(`VTIU website enquiry: ${data.get("topic")}`);
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nReply email: ${data.get("email")}\nTopic: ${data.get("topic")}\n\n${data.get("message")}`
      );
      window.location.href = `mailto:${encodeURIComponent(config.generalEmail)}?subject=${subject}&body=${body}`;
      formNote.textContent =
        "Your email application should open with your enquiry ready to send. Please send it there to contact VTIU.";
    });
  }
})();
