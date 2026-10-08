# About this profile

This profile uses a custom nocturnal banner and local SVG panels inspired by the supplied design reference. The illustrated character is fictional. The banner was created with the built-in image generator; the panels are generated from editable code. All project and toolbox cards link to actual destinations through the README.

## Activity data

The daily chart counts observed public events from the GitHub REST API over the current UTC day and preceding 29 days. It is not GitHub's contribution calendar and does not claim a complete activity history. The feed is limited to 300 recent events and may be delayed. Daily snapshots deduplicate events by ID and retain them within this window. Profile repository activity is excluded to avoid counting automatic profile updates.

The four cards show public repository count, distinct primary languages reported for public repositories, observed events, and repositories represented in those events. Primary-language count is not a skill rating. No private activity is requested. Stars and follower totals from the reference image are not copied.

## Maintenance

Run `node scripts/render-profile.mjs` with Node.js 22 or later to regenerate the panels. It uses only built-in APIs and optionally `GITHUB_TOKEN`. The workflow refreshes daily at 10:37 UTC and supports manual runs. GitHub may delay scheduled runs or disable schedules for inactive public repositories. Failed fetches stop generation before replacing the existing published data.

The visual accents use gentle opacity animation and respect reduced-motion preferences. GitHub supplies the surrounding page layout; the custom dark panels remain intentionally dark in both light and dark site themes.
