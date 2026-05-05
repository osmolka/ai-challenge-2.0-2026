# Report: Company Leader Board Page with Vibe Coding

## Tools Used

- **IDE:** JetBrains WebStorm
- **AI Assistant:** GitHub Copilot (Agent Mode)
- **Frontend stack:** React, TypeScript, Tailwind CSS

## Approach

### 1. Preparing the Reference

I started by taking screenshots of the original leaderboard page. Using a graphics editor, I blurred out all sensitive employee data — names, photos, departments — so that no real personal information could be uploaded to the AI agent. I also captured screenshots for responsive design at different viewport widths. These sanitized images were then uploaded to Copilot Agent.

### 2. Describing the Page to the AI

Alongside the screenshots, I described the page structure in text:

- Title and subtitle at the top
- Filters by year, quarter, and category, plus a search field
- Top 3 employees displayed as cards with photo, name, title, and department
- The full ranked list below, with each row containing: rank number, photo, name, title + department in parentheses, activity counts per category, total score, and an expandable button showing a detailed 4-column breakdown (Activity, Category, Date, Points)
- No pagination needed

### 3. Handling Data Replacement

I explicitly instructed Copilot to generate 227 mock employees with fake names, titles, and departments. 
