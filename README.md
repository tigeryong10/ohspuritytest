# OHS Purity Test

A purity-test-style checklist site (in the spirit of the Rice Purity Test), hosted on GitHub Pages.

Check every item you've done — your score starts at the total number of questions and drops by one for each checked box, updating live.

**Live site:** https://tigeryong10.github.io/ohspuritytest/

## Status

The live set is 200 questions — the merged master list combining the site's earlier 145 (including the 20 lore/drama items) with the doc version's relationship/homework/event batches, organized into thematic sections. Scoring: your purity score is 200 minus the number of items checked — 200–180 "You might not actually go to OHS", 179–140 "Casual enjoyer", 139–100 "Certified OHSer", 99–60 "Chronically online (derogatory, affectionate)", 59–0 "You ARE the lore". To add or remove questions, edit the `<li><label><input type="checkbox"> ...</label></li>` items in `index.html` — the score total updates automatically, but update the tier brackets in the `<p class="note">` to match.
