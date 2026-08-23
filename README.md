<div align="center">

# Hi, I'm Juan Carlos 👋

### Computer Science student @ University of Havana, building full-stack apps, AI agents, and quant-finance tools

</div>

## 💫 About Me

I'm a Computer Science undergraduate who likes shipping complete, working systems — not just prototypes. Lately that means full-stack apps with real authentication/authorization, background job processing, and LLM features that **degrade gracefully** when no API key is present, so anyone can clone and run them. Before that, my focus was multi-agent AI systems, quantitative finance, and low-level systems/security programming — I still build in those areas too.

- 🔭 Currently building a small portfolio of production-style full-stack apps: **[GuildWork](https://github.com/JuanCMath/GuildWork)** (RBAC project management), **[MeetScribe](https://github.com/JuanCMath/meetscribe)** (meeting summarizer), and **[ReviewLens](https://github.com/JuanCMath/ReviewLens)** (AI PR reviewer)
- 📊 Also building **[quantedge](https://github.com/JuanCMath/quantedge)**, a quant-finance dashboard (risk metrics, PCA, Monte Carlo, Markowitz optimization)
- 🎓 Studying Computer Science at the **University of Havana**
- 🌱 Currently sharpening: JWT/refresh-token auth design, role-based access control, background job processing, and LLM-with-fallback architectures
- 💬 Open to talk about full-stack architecture, AI agents, quant tools, or systems programming

## 🚀 Featured Projects

**Full-stack applications** — Node/Express/Prisma/PostgreSQL backend + React/Vite/Tailwind frontend, each with CI, Docker Compose for local dev, and a real test suite

| Project | Description | Stack |
|---|---|---|
| [**GuildWork**](https://github.com/JuanCMath/GuildWork) | Project-management system with three enforced roles (Admin/PM/Developer), a two-token JWT scheme (short-lived access token + rotating httpOnly refresh token) with replay detection, and a server-side authorization matrix backing every route. | TypeScript · Express · Prisma · React |
| [**MeetScribe**](https://github.com/JuanCMath/meetscribe) | Turns a meeting recording or transcript into a summary, decisions, and action items. Processes uploads asynchronously (202-Accepted + client polling) and falls back to a deterministic heuristic extractor when no LLM key is configured. | TypeScript · Express · Prisma · React |
| [**ReviewLens**](https://github.com/JuanCMath/ReviewLens) | AI-powered GitHub PR reviewer — paste a PR URL and get line-anchored findings, a risk score, and a diff overlay. Falls back to a real static-analysis heuristic (secrets, debug statements, untested changed files) when no LLM is available. | TypeScript · Express · Prisma · React |

**AI, quant & systems**

| Project | Description | Stack |
|---|---|---|
| [**quantedge**](https://github.com/JuanCMath/quantedge) | Interactive quant-finance dashboard — risk metrics, hypothesis testing, regression, PCA/clustering, Markowitz portfolio optimization, and Monte Carlo simulation, computed live. | TypeScript · Node.js |
| [**Sistema Multiagentes — Gestión de Viajes en La Habana**](https://github.com/JuanCMath/Sistema-Multiagentes-para-la-Gesti-n-de-Viajes-en-La-Habana) | Multi-agent system built with Google's Agent Development Kit (ADK) to manage user travel across Havana, factoring in live weather conditions. | Python · Google ADK |
| [**Suspicious-chat-detector**](https://github.com/JuanCMath/Suspicious-chat-detector) | Detects suspicious behavior patterns in chat sequences using Hill-Climbing optimization combined with a local LLM (Ollama) for semantic evaluation. | Python · Ollama |
| [**MatCom Guard**](https://github.com/JuanCMath/MatCom-Guard-SO-Project) | System-monitoring security tool that watches for malware-like behavior and anomalous resource usage at the OS level. | C |
| [**Captive-Portal**](https://github.com/JuanCMath/Captive-Portal) | Captive portal that intercepts initial user traffic, redirects to an authentication page, and enforces network access-control rules. | Python |

*(Tip: use **Customize your pins** on your profile to pin these repos manually — that also puts them in the "Popular repositories" section GitHub shows by default.)*

## 🛠️ Tech Stack

**Languages**

![Python](https://img.shields.io/badge/python-3670A0?style=flat-square&logo=python&logoColor=ffdd54)
![TypeScript](https://img.shields.io/badge/typescript-%233178C6.svg?style=flat-square&logo=typescript&logoColor=white)
![C](https://img.shields.io/badge/c-%2300599C.svg?style=flat-square&logo=c&logoColor=white)
![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=flat-square&logo=c%2B%2B&logoColor=white)
![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=flat-square&logo=csharp&logoColor=white)
![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=flat-square&logo=php&logoColor=white)
![Lua](https://img.shields.io/badge/lua-%232C2D72.svg?style=flat-square&logo=lua&logoColor=white)

**Full-stack web**

![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express-%23000000.svg?style=flat-square&logo=express&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=flat-square&logo=Prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/postgresql-%23316192.svg?style=flat-square&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%232496ED.svg?style=flat-square&logo=docker&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=flat-square&logo=fastapi)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=flat-square&logo=flask&logoColor=white)
![Django](https://img.shields.io/badge/django-%23092E20.svg?style=flat-square&logo=django&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-5C2D91?style=flat-square&logo=.net&logoColor=white)

**Data, ML & Quant**

![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=flat-square&logo=numpy&logoColor=white)
![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=flat-square&logo=pandas&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=flat-square&logo=PyTorch&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=flat-square&logo=TensorFlow&logoColor=white)
![Matplotlib](https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=flat-square&logo=Matplotlib&logoColor=black)
![Plotly](https://img.shields.io/badge/Plotly-%233F4F75.svg?style=flat-square&logo=plotly&logoColor=white)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626.svg?style=flat-square&logo=Jupyter&logoColor=white)

**Tools & platforms**

![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=flat-square&logo=githubactions&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=flat-square&logo=mysql&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=flat-square&logo=vercel&logoColor=white)
![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=flat-square&logo=apache&logoColor=white)
![Anaconda](https://img.shields.io/badge/Anaconda-%2344A833.svg?style=flat-square&logo=anaconda&logoColor=white)

## 📊 GitHub Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=JuanCMath&theme=dark&hide_border=true&include_all_commits=true&count_private=false" height="165" alt="GitHub stats"/>
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JuanCMath&theme=dark&hide_border=true&layout=compact" height="165" alt="Top languages"/>

<img src="https://nirzak-streak-stats.vercel.app/?user=JuanCMath&theme=dark&hide_border=true" alt="GitHub streak"/>

</div>

## 📫 Contact

[![Gmail](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:juancarlosmatcom@gmail.com)

<!-- README structure inspired by GPRM (https://gprm.itsvg.in), rewritten by hand -->
