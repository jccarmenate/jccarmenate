<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&pause=1000&color=58A6FF&center=true&vCenter=true&width=650&lines=Hi%2C+I'm+Juan+Carlos+%F0%9F%91%8B;Computer+Science+Student+%40+University+of+Havana;Building+AI%2FIR+systems%2C+full-stack+apps%2C+and+low-level+software" alt="Typing SVG" />

</div>

## 💫 About Me

I'm a Computer Science undergraduate (final year) who likes shipping complete, working systems — not just prototypes. That spans four areas: **AI & information retrieval** built from first principles rather than off-the-shelf orchestration frameworks; **full-stack apps** with real authentication, background jobs, and LLM features that degrade gracefully without an API key; **systems & networks programming** down at the socket/kernel level; and **simulation, games & quant** work — a vectorized epidemiological model, a from-scratch MCTS game AI, and a live quant-finance dashboard.

- 🎓 Last-year Computer Science student at the **University of Havana** (MatCom)
- 🌱 Currently sharpening: retrieval/ranking algorithms, JWT/RBAC auth design, and LLM-with-fallback architectures
- 💬 Open to talk about IR/RAG systems, full-stack architecture, systems/networking, or simulation & quant tools — and open to internship/junior opportunities

## 🚀 Featured Projects

**🔎 AI & Information Retrieval — flagship project**

| Project | Description | Stack |
|---|---|---|
| [**Tech RAG Information Retrieval System**](https://github.com/jccarmenate/tech-rag-information-retrieval-system) | Full IR system built module-by-module from scratch: custom inverted index + TF-IDF, a Bayesian inference-network retriever, a ChromaDB vector store, a RAG pipeline with a swappable LLM provider (Ollama/Claude), learning-to-rank fusion, query expansion (Rocchio + WordNet) with user feedback, CLIP-based multimodal search, hybrid recommendations, and IR evaluation (Precision@k, MAP, MRR, nDCG, LLM-as-judge). 120+ backend tests. | Python · FastAPI · ChromaDB · React |

**Full-stack applications** — Node/Express/Prisma/PostgreSQL backend + React/Vite/Tailwind frontend, each with CI, Docker Compose for local dev, and a real test suite

| Project | Description | Stack |
|---|---|---|
| [**GuildWork**](https://github.com/jccarmenate/GuildWork) | Project-management system with three enforced roles (Admin/PM/Developer), a two-token JWT scheme (short-lived access token + rotating httpOnly refresh token) with replay detection, and a server-side authorization matrix backing every route. | TypeScript · Express · Prisma · React |
| [**MeetScribe**](https://github.com/jccarmenate/MeetScribe) | Turns a meeting recording or transcript into a summary, decisions, and action items. Processes uploads asynchronously (202-Accepted + client polling) and falls back to a deterministic heuristic extractor when no LLM key is configured. | TypeScript · Express · Prisma · React |
| [**ReviewLens**](https://github.com/jccarmenate/ReviewLens) | AI-powered GitHub PR reviewer — paste a PR URL and get line-anchored findings, a risk score, and a diff overlay. Falls back to a real static-analysis heuristic (secrets, debug statements, untested changed files) when no LLM is available. | TypeScript · Express · Prisma · React |

**Systems, networks & security**

| Project | Description | Stack |
|---|---|---|
| [**Link-Chat**](https://github.com/jccarmenate/Link-Chat) | P2P messaging with file transfer, no central server: a desktop client at the link layer (raw AF_PACKET sockets, custom EtherType, manual framing/CRC16) plus a Flutter mobile client over WiFi/LAN with per-connection X25519 + ChaCha20-Poly1305 encryption. | Python · Flutter/Dart |
| [**MatCom Guard**](https://github.com/jccarmenate/MatCom-Guard-SO-Project) | Real-time UNIX security monitor: USB device snapshots/forensics, process CPU/memory anomaly detection, and a port scanner, behind a GTK+3 dashboard with PDF report export. Thread-safe, mutex-protected C. | C · GTK+3 |
| [**Captive-Portal**](https://github.com/jccarmenate/Captive-Portal) | Full captive-portal stack — iptables/ipset traffic interception bound to IP+MAC, dnsmasq, nginx TLS termination (with Let's Encrypt in the native deploy), and a Python auth backend with PBKDF2 password hashing, CSRF protection, and rate limiting. | Python · nginx · iptables |

**Simulation, AI & quant**

| Project | Description | Stack |
|---|---|---|
| [**Population-Simulation**](https://github.com/jccarmenate/Population-Simulation) | Discrete-event population model with a numpy-vectorized engine (custom LCG, block-doubled for O(n) batch generation), a multi-variant SEIR epidemic model (reinfection, immune escape, second/third waves) calibrated COVID-like, and an interactive Streamlit app. | Python · NumPy · Streamlit |
| [**quantedge**](https://github.com/jccarmenate/quantedge) | Interactive quant-finance dashboard — risk metrics, hypothesis testing, multi-factor regression, PCA/clustering, Markowitz portfolio optimization via Monte Carlo, and GBM price simulation, computed live. | TypeScript · Node.js · Prisma |
| [**Sistema Multiagentes — Gestión de Viajes en La Habana**](https://github.com/jccarmenate/Sistema-Multiagentes-para-la-Gesti-n-de-Viajes-en-La-Habana) | Multi-agent system built with Google's Agent Development Kit (ADK) to manage user travel across Havana, factoring in live weather conditions, exposed as a FastAPI service. | Python · Google ADK · FastAPI |
| [**HexArena**](https://github.com/jccarmenate/HexArena) | Desktop Hex game for Windows with a self-built AI (MCTS + RAVE, Dijkstra distance bias, bridge recognition) — vs-AI, local hotseat, and LAN multiplayer, packaged as a single portable .exe. | Python · pywebview |

## 🛠️ Tech Stack

**Languages**

![Python](https://img.shields.io/badge/python-3670A0?style=flat-square&logo=python&logoColor=ffdd54)
![TypeScript](https://img.shields.io/badge/typescript-%233178C6.svg?style=flat-square&logo=typescript&logoColor=white)
![C](https://img.shields.io/badge/c-%2300599C.svg?style=flat-square&logo=c&logoColor=white)
![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=flat-square&logo=c%2B%2B&logoColor=white)
![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=flat-square&logo=csharp&logoColor=white)
![Dart](https://img.shields.io/badge/dart-%230175C2.svg?style=flat-square&logo=dart&logoColor=white)
![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=flat-square&logo=php&logoColor=white)
![Lua](https://img.shields.io/badge/lua-%232C2D72.svg?style=flat-square&logo=lua&logoColor=white)

**AI / IR & Data**

![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=flat-square&logo=numpy&logoColor=white)
![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=flat-square&logo=pandas&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=flat-square&logo=PyTorch&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=flat-square&logo=TensorFlow&logoColor=white)
![Matplotlib](https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=flat-square&logo=Matplotlib&logoColor=black)
![Plotly](https://img.shields.io/badge/Plotly-%233F4F75.svg?style=flat-square&logo=plotly&logoColor=white)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626.svg?style=flat-square&logo=Jupyter&logoColor=white)
![Streamlit](https://img.shields.io/badge/streamlit-%23FF4B4B.svg?style=flat-square&logo=streamlit&logoColor=white)

**Full-stack web**

![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express-%23000000.svg?style=flat-square&logo=express&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB)
![Flutter](https://img.shields.io/badge/flutter-%2302569B.svg?style=flat-square&logo=flutter&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=flat-square&logo=Prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/postgresql-%23316192.svg?style=flat-square&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%232496ED.svg?style=flat-square&logo=docker&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=flat-square&logo=fastapi)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=flat-square&logo=flask&logoColor=white)
![Django](https://img.shields.io/badge/django-%23092E20.svg?style=flat-square&logo=django&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-5C2D91?style=flat-square&logo=.net&logoColor=white)
![nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=flat-square&logo=nginx&logoColor=white)

**Tools & platforms**

![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=flat-square&logo=githubactions&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=flat-square&logo=mysql&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=flat-square&logo=vercel&logoColor=white)
![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=flat-square&logo=apache&logoColor=white)
![Anaconda](https://img.shields.io/badge/Anaconda-%2344A833.svg?style=flat-square&logo=anaconda&logoColor=white)

</div>

<!-- README structure inspired by GPRM (https://gprm.itsvg.in), rewritten by hand -->
