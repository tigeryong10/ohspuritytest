# OHS Purity Test

A purity-test-style checklist site (in the spirit of the Rice Purity Test), hosted on GitHub Pages.

Check every item you've done — your score starts at the total number of questions and drops by one for each checked box, updating live.

**Live site:** https://tigeryong10.github.io/ohspuritytest/

## Status

The live set is 125 questions (in-person meetup/event items were removed since most people never attended one). Scoring: your purity score is 125 minus the number of items checked — 125–113 "You might not actually go to OHS", 112–88 "Casual enjoyer", 87–63 "Certified OHSer", 62–38 "Chronically online (derogatory, affectionate)", 37–0 "You ARE the lore". To add or remove questions, edit the `<li><label><input type="checkbox"> ...</label></li>` items in `index.html` — the score total updates automatically, but update the tier brackets in the `<p class="note">` to match.
