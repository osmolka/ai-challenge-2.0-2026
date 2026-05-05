## Tools and Technologies Used

### Lovable
The application was built using **Lovable**.


### M365 Copilot
**M365 Copilot** was used as a development assistant throughout the project, primarily for:
- Structuring development into incremental, safe steps
- Crafting precise prompts for Lovable to avoid unintended refactors
- Debugging UX and state‑management issues
- Helping write user‑oriented documentation (README) and this report

---

### Seems like all requirements are implemented

---

## What Was Challenging

### Partial UI State During Loading
Initially, pages rendered before authentication or data loading completed, causing:
- Flickering navigation
- Incorrect buttons showing briefly  
This required adding consistent loading states and spinners across the app.

### Aggregated Counters and Session Changes
Event counters (confirmed RSVPs, checked‑in attendees) initially appeared to reset after logout/login because they relied on session‑local state or realtime updates only. This was fixed by:
- Always loading counters from the database first
- Applying realtime updates on top of the initial count

### Low‑Code Abstraction Limits
While Lovable accelerated development, some issues (e.g. routing intent, tab state, missing navigation wiring) required very precise prompts to avoid unintended refactors.

---
