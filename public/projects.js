// Edit this collection to add or update portfolio projects.
window.PORTFOLIO_PROJECTS = [
  {
    id:'unitlog',title:'UnitLog',featured:true,category:['Web','Backend'],year:'2026',status:'In development',
    description:'A clearer way to organize rental-property maintenance, tasks, and teams.',
    tech:['Python','Flask','MySQL'],repo:'https://github.com/SMGeyser/UnitLog',
    overview:'UnitLog brings property-specific work into one place: maintenance tasks, priorities, assignments, and updates. The current local implementation includes a Flask prototype and a more extensive backend iteration for rental operations.',
    features:['Property and unit records, tenancy, and maintenance workflows.','Flask routes for accounts, organization membership, leases, invoices, and work orders.','Versioned MySQL migrations for identity, portfolio, billing, maintenance, documents, and audit data.'],
    takeaway:'A practical project in connecting a mobile-friendly interface to a relational model for property operations.',
    note:'The current prototype is Python/Flask. Earlier résumé descriptions discuss a planned Go backend; that is a future direction rather than the stack shown here.'
  },
  {
    id:'dynamix',title:'Dynamix',featured:true,category:['Web','Backend'],year:'2026',status:'Local MVP',
    description:'A Druid character dashboard that keeps the game moving.',tech:['Go','MySQL','JavaScript'],
    overview:'Dynamix is a responsive character and play-session manager for D&D’s revised fifth-edition rules. It supports Druid levels 1–20, with an optional level-3 Circle of the Moon example.',
    features:['Private accounts, database-backed sessions, and character ownership.','HP, conditions, concentration, spell slots, rests, and Wild Shape workflows.','Action history, guarded undo, revision checks, JSON export, inventory, and notes.','Versioned MySQL migrations, Docker configuration, and a deployment runbook.'],
    takeaway:'Rules calculations are separated from handlers and storage, making the application easier to test and revise.',
    note:'Implemented and verified locally with Go tests, vet, build, migrations, and an authenticated HTTP smoke test. Production deployment remains a separate step.'
  },
  {
    id:'dnd-database',title:'D&D Relational Repository',featured:true,category:['Data','Backend','Coursework'],year:'2026',status:'Course project',
    description:'A relational home for characters, equipment, and campaign data.',tech:['MySQL','SQL','Streamlit'],repo:'https://github.com/SMGeyser/itm220',
    overview:'A third-normal-form relational MySQL database for tabletop game entities, paired with a Python/Streamlit viewer. The project connects database design with a usable way to query character information.',
    features:['Related character attributes, equipment inventories, and campaign data.','A Streamlit interface to list class features for a selected character.','Custom item creation and display through parameterized database queries.','SQL coursework covering joins, aggregations, and reporting scenarios.'],
    takeaway:'Designed and deployed the database using AWS, with an emphasis on normalization and useful relationships.',
    note:'ITM 220 repository. The application and schema live in sql_frontend/.'
  },
  {
    id:'crux',title:'CRUX Encounter Engine',featured:true,category:['Backend','Coursework'],year:'2026',status:'Course project',
    description:'A Python tool for exploring tabletop encounter difficulty.',tech:['Python','JSON','pytest'],repo:'https://github.com/SMGeyser/cse111',
    overview:'CRUX — Combat Rating & Encounter eXaminer — is a command-line tool for managing a party, selecting monsters, and calculating encounter difficulty.',
    features:['Load creature challenge ratings from JSON.','Add and remove party members and monsters with case-normalized names.','Calculate party and monster ratings and classify encounter difficulty.','pytest checks for dictionary operations, ratings, and error cases.'],
    takeaway:'A focused exercise in functions, structured data, input handling, and testing.',note:'CSE 111 repository, alongside Python functions and testing coursework.'
  },
  {
    id:'moodflow',title:'Moodflow / AuraWave',category:['Web'],year:'2026',status:'Interactive prototype',
    description:'A mood-based music interface with shuffle, pacing, and queue controls.',tech:['JavaScript','HTML','CSS'],repo:'https://github.com/SMGeyser/cse290r/tree/main/moodflow',repoLabel:'View source on GitHub',
    overview:'An interactive implementation of a multi-screen music-app design, with mood selection and a lightweight, responsive interface.',
    features:['Mood and pacing selection, smart shuffle deck, and queue views.','Non-repeating shuffle, re-shuffle, and playback controls.','Run statistics and day/night vision modes.'],
    takeaway:'Translating a design bundle into a cohesive browser experience using plain JavaScript.',note:'Local prototype in CSE 290R. The interface is not presented as a connected music-streaming service.'
  },
  {
    id:'canvas',title:'Canvas LMS Exploration',category:['AI & tools','Coursework'],year:'2026',status:'Research & planning',
    description:'Navigating a large codebase and planning a coursework-calendar integration.',tech:['Python','Codex','API planning'],repo:'https://github.com/SMGeyser/canvas-lms',
    relatedLinks:[{label:'Calendar integration plan',url:'https://github.com/SMGeyser/cse290r/blob/main/canvas-google-calendar-sync.md'}],
    overview:'Brownfield coursework built around the existing Canvas LMS codebase. My work focuses on codebase navigation, reusable memory indexes, and planning an opt-in Canvas-to-Google Calendar integration.',
    features:['Organized indexes to help navigate the large existing repository.','A feature plan for due-date synchronization, course selection, and sync health.','Planned OAuth, idempotent reconciliation, retry behavior, and managed-event cleanup.'],
    takeaway:'Learning to extend an existing system starts with understanding its boundaries and documenting a precise feature.',note:'Canvas LMS is an upstream open-source project by Instructure. This entry describes my exploration and integration planning; the calendar add-on is not yet shipped.'
  },
  {
    id:'dynamic-character',title:'Dynamic Character Stats',category:['Web','Coursework'],year:'2026',status:'Course project',
    description:'A character dashboard and searchable spell library for tabletop play.',tech:['JavaScript','HTML','CSS'],repo:'https://github.com/SMGeyser/wdd131',
    overview:'A multi-page character and spell site from Dynamic Web Fundamentals, connecting a responsive interface with browser-side data and interactions.',
    features:['Character dashboard and dedicated spell pages.','Spell rendering, keyword search, and sorting functions.','Additional coursework in forms, recipes, responsive design, and DOM interactions.'],
    takeaway:'A progression from static pages to interfaces that respond to a user’s choices.',note:'WDD 131 repository; the tabletop project lives in adventure/.'
  },
  {
    id:'web-foundations',title:'Web Design Foundations',category:['Web','Coursework'],year:'2026',status:'Course collection',
    description:'An early portfolio, rafting website, and a collection of layout experiments.',tech:['HTML','CSS'],repo:'https://github.com/SMGeyser/wdd130',
    overview:'My Introduction to Web Design repository contains the early Quantum Portfolio, a rafting website, site plans, and practice pages.',
    features:['Multi-page site structure, navigation, and shared styles.','Grid, positioning, galleries, signup layouts, and reusable page patterns.','An early portfolio with experience and software pages.'],
    takeaway:'Building a foundation in hierarchy, layout, and readable web pages.',note:'WDD 130 repository; this portfolio continues that work with a simpler design.'
  },
  {
    id:'csharp',title:'C# Journal & Classes',category:['Backend','Coursework'],year:'2026',status:'Learning in progress',
    description:'Object-oriented coursework with prompts, entries, and file persistence.',tech:['C#','.NET'],repo:'https://github.com/SMGeyser/cse210',
    overview:'Programming with Classes coursework includes a journal application organized around Journal, Entry, and Prompt classes.',
    features:['Random prompts and dated user responses.','Saving entries and reading saved records for display.','Class practice and small console programs for object-oriented fundamentals.'],
    takeaway:'Learning to separate responsibilities and reason about state and file persistence.',note:'CSE 210 coursework. C# is a skill I am currently learning.'
  },
  {
    id:'python-foundations',title:'Python Foundations',category:['Backend','Coursework'],year:'2026',status:'Course collection',
    description:'Small programs that build up loops, decisions, files, and data handling.',tech:['Python'],repo:'https://github.com/SMGeyser/cse110',
    overview:'Introduction to Programming work spanning interactive console exercises, lists, calculations, and file-based data analysis.',
    features:['Conditional logic, repeated calculations, and menu-driven exercises.','Lists, user input, and structured file processing.','Weekly practice and final-project work.'],
    takeaway:'Developing the habits of decomposing a problem, checking behavior, and troubleshooting.',note:'Two local checkouts of this repository were reviewed and combined into this single entry.'
  },
  {
    id:'data-science',title:'Data Science Studies',category:['Data','Coursework'],year:'2026',status:'Learning in progress',
    description:'Exploring real datasets with Polars, plots, and Quarto notebooks.',tech:['Python','Polars','Quarto','Lets-Plot'],
    overview:'Data Science Programming work explores life expectancy, baby names, and flight datasets through filtering, aggregation, data preparation, and charts.',
    features:['Column expressions, group calculations, and horizontal sums.','Exploratory visualizations and chart styling.','Quarto notebooks combining code, questions, and explanation.'],
    takeaway:'Learning to make data transformations readable and connect an analysis to a clear question.',note:'DS 250 coursework. Some notebooks are templates or unfinished exercises; this is a learning collection rather than a completed research study.'
  },
  {
    id:'scientific-computing',title:'Scientific Computing',category:['Data','Coursework'],year:'2026',status:'Course collection',
    description:'Python notebooks for numerical models, plots, and scientific data.',tech:['Python','NumPy','Pandas','Matplotlib'],
    overview:'Introduction to Scientific Computing work covers repeated updates, Euler’s method, molecular dynamics, Monte Carlo methods, fitting, error, and model validation.',
    features:['Jupyter notebooks for numerical and plotting exercises.','Cooling-model validation and scientific communication work.','Pandas data-analysis assignments.'],
    takeaway:'Practicing numerical reasoning and communicating results alongside the code.',note:'PH 135 coursework; includes instructional notebooks as well as completed assignments.'
  },
  {
    id:'ai-workflows',title:'AI Development Workflows',category:['AI & tools','Coursework'],year:'2026',status:'Tools & experiments',
    description:'Reusable skills and scripts for working with code, résumés, and coursework.',tech:['Python','Codex','APIs'],repo:'https://github.com/SMGeyser/cse290r',
    relatedLinks:[{label:'Codebase memory',url:'https://github.com/SMGeyser/cse290r/tree/main/codebase-memory'},{label:'Résumé workflow',url:'https://github.com/SMGeyser/cse290r/tree/main/resume-builder'},{label:'Study planning',url:'https://github.com/SMGeyser/cse290r/tree/main/study-agent'}],
    overview:'AI in Software Development experiments include scripts for model APIs and reusable workflows for codebase memory, résumé editing, and study planning.',
    features:['Codebase memory tooling with search, updates, and source provenance.','Résumé workflows designed to use confirmed experience.','Coursework study-planning workflows and model-client experiments.'],
    takeaway:'Making AI-assisted work more repeatable by giving it clear context, constraints, and useful structure.',note:'CSE 290R coursework and local skill files. This entry describes development workflows, not model training.'
  },
  {
    id:'lumina',title:'Lumina Product Showcase',category:['Web'],year:'2026',status:'Design prototype',
    description:'A responsive technology showcase with a browser-rendered product scene.',tech:['JavaScript','Three.js','CSS'],repo:'https://github.com/SMGeyser/cse290r/tree/main/donkey',repoLabel:'View source on GitHub',
    overview:'A product-site recreation exercise combining a technology landing page with an interactive phone scene.',
    features:['Responsive product presentation and navigation.','A Three.js phone scene and supporting browser interactions.','A lightweight Node development server.'],
    takeaway:'Exploring visual presentation and interaction in a product-focused interface.',note:'Local CSE 290R prototype in donkey/; a coursework recreation exercise rather than a commercial product.'
  },
  {
    id:'teamwork',title:'BYU–I Adventures',category:['Web','Coursework'],year:'2026',status:'Course project',
    description:'A multi-page guide to activities, food, and places around campus.',tech:['HTML','CSS'],
    overview:'A Technical Teamwork coursework site organized around local activities and student life, with separate pages for outdoor activities, indoor activities, and food.',
    features:['Shared navigation and styles across a multi-page site.','Activity categories, an about page, and a submission page.'],
    takeaway:'Practicing organized web content within a teamwork course.',note:'Local CSE 170 coursework. No individual contribution percentage is claimed.'
  }
];
