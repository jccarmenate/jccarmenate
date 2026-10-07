# Agent Lab

A self-contained animated SVG, generated with Node.js and the GitHub REST API. No npm packages, external image services, or personal access tokens are needed.

## What the lab means

- Code: public push events (not individual commits).
- Review: submitted pull request review events.
- Assemble: closed pull request events whose payload explicitly says `merged: true`.
- Launch: published release events.
- Energy: pushes + 2 × reviews + 4 × merges + 8 × releases.
- Level: 1 + floor(energy / 25). The bar is progress toward the next level.

These are playful scores for observed events in a rolling 30-day window, not GitHub's contribution total or a productivity measure. Levels can decrease as events expire. Robots animate for stations with activity; the courier moves when there is any energy. Animation is decorative, not a live agent execution or an interactive game. Reduced-motion preferences disable movement.

Only the owner's public events are processed. The profile repository is excluded so the updater cannot award itself points. The REST feed is limited to 300 recent events and may arrive with a delay. Daily snapshots retain and deduplicate observed events within the 30-day window; activity missed before initial installation or between runs cannot be reconstructed. No private activity is requested or published.

## Update and maintenance

The workflow runs daily at 10:23 UTC, manually from Actions, and when its generator or workflow changes on main. GitHub may delay scheduled jobs and may disable schedules on inactive public repositories. Inspect the Actions tab if the visible sync date becomes stale. An API error fails the run and preserves the last committed SVG.

Run `node --test scripts/agent-lab.test.mjs`, then `node scripts/agent-lab.mjs` with Node.js 22 or later. `GITHUB_TOKEN` is optional locally; Actions supplies its built-in token. `LAB_OWNER` defaults to jccarmenate.

Files: `assets/agent-lab.svg` is the README image; `assets/agent-lab-state.json` holds only public event IDs, types, repository names, timestamps, and derived counts. The generator has no runtime dependency beyond Node.js. The checkout action is pinned to a commit.
