# CSC 216 Web Technologies – Lab 2
## Personal Portfolio Website

**Student name:** Oketch Pauline  
**GitHub username:** Plinkacodes  
**Project type:** Individual submission (with lecturer's approval)

### Project overview
This is a three-page personal portfolio website built using plain HTML, CSS and JavaScript. It introduces the developer, displays practice projects and provides a client-side contact form demonstration.

### Files and folders
- `index.html` – home page and developer profile
- `projects.html` – project cards, category filters, search and FAQ
- `contact.html` – accessible contact form with validation
- `css/styles.css` – shared responsive stylesheet and colour themes
- `js/script.js` – navigation, dark mode, project rendering/filtering/search and form validation
- `images/oketch-pauline-profile.png` – profile portrait

### Personalisation
- Replaced the sample team identity with the student's official name, Oketch Pauline.
- Added an individual developer profile and profile portrait.
- Rewrote the hero heading and introduction.
- Selected a purple/indigo colour palette for light and dark themes.
- Added original portfolio and GitHub practice project entries.
- Added Git as a new project category and matching filter.
- Added the FAQ page section using HTML `<details>` and `<summary>` (extension challenge E1).
- Added project search (extension challenge E3).

### Individual work statement
This project was completed individually by Oketch Pauline, with the lecturer's approval. The student is responsible for the HTML structure, CSS styling, JavaScript functionality, testing, GitHub repository and deployment.

### Reflection questions
1. **What two things are lost by using a clickable div instead of a button, and who is affected?**  
   A clickable div does not automatically support keyboard activation in the same way as a button, and it does not have the native button role and state expected by assistive technology. Keyboard-only users and people using screen readers are affected.

2. **What breaks if `defer` is removed from a script in the head, in terms of HTML parsing?**  
   Without `defer`, the browser may pause HTML parsing to download and execute the script. If the script tries to select elements that have not yet been parsed, those elements may not be found and the related functionality may fail.

3. **What could go wrong with `innerHTML` versus `textContent` if visitors enter project titles?**  
   Assigning visitor input with `innerHTML` can interpret the input as HTML, potentially allowing injected markup or scripts. `textContent` treats the input as plain text and is safer for displaying user-provided titles.

4. **Why should a server still validate data if JavaScript client-side validation exists?**  
   Client-side validation can be bypassed by disabling JavaScript or sending a request directly to the server. Server-side validation is therefore necessary to protect data and enforce rules reliably.

5. **Explain why localStorage theme follows Home to Contact but not a double-clicked file to Live Server using origin.**  
   Pages on the same website origin share the same localStorage area, so the theme choice can be read on Home, Projects and Contact. A file opened with `file://` and a page served through `http://localhost` have different origins, so they do not share the same storage.

6. **Name duplicated content across HTML pages, the problem it causes, and how to avoid it.**  
   The navigation header, footer and shared stylesheet/script links are repeated across the pages. Repetition means a change must be made in several places and can become inconsistent. A component or template system could avoid this in a larger project; for this plain HTML lab, the repeated sections must be kept consistent manually.

### Testing checklist
- [ ] Open all three pages and test every navigation link.
- [ ] Test dark mode on each page and confirm it is remembered after moving between pages.
- [ ] Test the project category filters and search box.
- [ ] Submit the contact form with empty and invalid values, then with valid values.
- [ ] Check the layout on a phone-sized screen.
- [ ] Validate the HTML and check the browser console for JavaScript errors.
- [ ] Publish with GitHub Pages and confirm the live URL works.

### GitHub Pages deployment
1. Create a public repository named `team-website` in the `Plinkacodes` GitHub account.
2. Upload the contents of this project folder, keeping the folder structure unchanged.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish. The site URL should follow this pattern: `https://Plinkacodes.github.io/team-website/`.

**Important:** The contact form is a front-end demonstration only. It does not transmit messages to an email inbox or server.
