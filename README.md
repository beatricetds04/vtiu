# VTIU public website

A standalone, responsive multi-page public website for Vocational and Technical Inspired University. It lives beside the LMS so the public site and authenticated learning portal remain separate applications.

## Pages

- `index.html` — homepage and quick routes into the rest of the site.
- `about.html` — university overview and educational approach.
- `programmes.html` — programme discovery and admissions guidance.
- `admissions.html` — application steps and preparation checklist.
- `campus-life.html` — student experience and campus information.
- `news.html` — news and events.
- `contact.html` — contact information and enquiry form.

## Preview locally

Open `index.html` in a browser, or from PowerShell run:

```powershell
Set-Location 'C:\Users\lampt\Desktop\PROGRAMMING\VTIU-Website'
py -m http.server 8000
```

Then visit `http://localhost:8000`. The website is static and does not require a package installation or build step.

## Folder layout

```text
VTIU-Website/
├── index.html
├── about.html
├── programmes.html
├── admissions.html
├── campus-life.html
├── news.html
├── contact.html
├── site-config.js
├── assets/
│   ├── css/site.css
│   ├── images/campus-learning.jpg
│   ├── images/vtiu-mark.svg
│   └── js/site.js
└── README.md
```

## LMS links and school details

Edit `site-config.js` to update the LMS base address, student and teacher login paths, admissions path, approved contact email addresses, and campus address. Portal links use the current Railway LMS domain by default.

The enquiry form opens the visitor's email application only after `generalEmail` is configured. Until then, it clearly says that the enquiry has not been sent. The site does not store submitted personal information.

## Before public launch

The preview banner is intentional. VTIU should approve and replace or confirm:

- The institution's official name, spelling, logo, brand colours, and any accreditation statements.
- The mission, educational positioning, programme catalogue, qualifications, entry requirements, and career descriptions.
- Current admissions dates, fees, application instructions, and contact details.
- Campus facilities, student support and life details, published news, and event information.
- Photography permissions and image licensing. The local campus photo was copied from the existing LMS static assets; confirm it is approved for the public site. Google Fonts are remotely hosted, with system-font fallbacks.
- Production domain, HTTPS, accessibility, privacy notices, analytics choices, and any required hosting or content-management process.

Do not publish unverified programme, admissions, accreditation, outcome, or contact claims as official VTIU information.
