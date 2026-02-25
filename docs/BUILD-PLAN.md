# Dark/Light Mode Implementation Plan

Total estimated time: ~50 minutes across 7 steps

1. **Expand CSS Variables for Theme Switching (5 min)**
   - Add remaining color CSS variables in `:root`
   - Create a second set of color values for dark mode
   - Test: Verify site appearance remains unchanged

2. **Add Toggle Button HTML to Index Page (5 min)**
   - Add a theme toggle button in the header of index.html
   - Style it simply (icon or text)
   - Test: Button appears and is styled; no behavior yet

3. **Create JavaScript Toggle Function (10 min)**
   - Add `script.js`
   - Implement function to toggle a `dark-mode` class on `<body>`
   - Link script to index.html and attach click handler
   - Test: Clicking adds/removes the class (confirm via DevTools)

4. **Define Dark Mode CSS Styles (10 min)**
   - Add CSS rules for `body.dark-mode` that override variables
   - Include smooth transitions
   - Test: Toggle switches colors for all elements

5. **Add localStorage Persistence (5 min)**
   - Save user preference when toggled
   - Load and apply saved preference on page load
   - Test: Preference persists after page refresh

6. **Add Toggle to Remaining Pages (5 min)**
   - Copy toggle HTML to other pages (e.g., menu.html, about.html, contact.html)
   - Ensure `script.js` is linked on all pages
   - Test: Toggle works consistently across pages

7. **Final Polish & Testing (10 min)**
   - Verify all elements, hover states, and links for both modes
   - Add accessible attributes (e.g., `aria-label`) to the toggle
   - Test: Navigate the site in both modes and fix any visual issues