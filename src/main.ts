type Section = {
  title: string;
  items: string[];
};

const githubSummary: Section = {
  title: 'GitHub',
  items: [
    '👥 5 seguidores · 9 siguiendo',
    '📁 65 repositorios · 4 estrellas dadas',
    '🔗 LinkedIn conectado',
    '🏆 Pull Shark x2, Pair Extraordinaire, Quickdraw, YOLO',
  ],
};

const featuredRepos = [
  'App_Gestion_Reservas_NTTData — Gestión de reservas en Kotlin (proyecto intermodular)',
  'Java-Hybrid-Database-Service — Historial de streaming con PostgreSQL/RDS + Jackson',
  'Actividades-corrutinas-Kotlin — Ejercicios prácticos de corrutinas en Kotlin',
  'App_Permiso_Contactos — Demo Android de gestión de permisos',
];

const linkedInSummary: Section = {
  title: 'LinkedIn',
  items: [
    '🏭 Sector: Software Development',
    '🤝 18 conexiones profesionales del sector IT',
    '🛠️ 30 skills declaradas (Kotlin, Java, JavaScript, PHP, SQL, AWS, Docker, Git, n8n...)',
    '📜 Certificaciones OpenWebinars: PHP Fundamentos y PHP',
  ],
};

const experience = [
  'Clicacs — Desarrollador FullStack (Feb 2026 – presente)',
  'Angal Informática S.L. — Desarrollador web (Mar 2024 – Jun 2024)',
  'Inforcopy Planelles — Técnico informático (Mar 2022 – Jun 2022)',
];

const education = [
  'freeCodeCamp — Relational Databases (2026, en curso)',
  'IES Álvaro Falomir — CFGS DAM (2025 – 2026, en curso)',
  'IES Álvaro Falomir — CFGS DAW/SMR (2021 – 2023)',
];

const stack: Record<string, string[]> = {
  Frontend: ['TypeScript', 'JavaScript', 'Angular', 'HTML5', 'CSS'],
  Backend: ['Java', 'PHP', 'Kotlin Multiplatform', 'n8n'],
  'Bases de datos': ['SQLite', 'MySQL', 'DynamoDB', 'PostgreSQL'],
  Herramientas: ['GitHub', 'Git', 'Docker'],
};

const achievements = ['Pull Shark x2', 'Pair Extraordinaire', 'Quickdraw', 'YOLO'];

const fillList = (id: string, items: string[]): void => {
  const list = document.getElementById(id);
  if (!list) return;

  list.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
};

const fillChips = (id: string, items: string[]): void => {
  const container = document.getElementById(id);
  if (!container) return;

  container.innerHTML = items.map((item) => `<span class="chip">${item}</span>`).join('');
};

const fillStack = (): void => {
  const container = document.getElementById('stack');
  if (!container) return;

  container.innerHTML = Object.entries(stack)
    .map(
      ([title, skills]) => `
        <article class="stack-card">
          <h3>${title}</h3>
          <div class="chips">
            ${skills.map((skill) => `<span class="chip">${skill}</span>`).join('')}
          </div>
        </article>
      `,
    )
    .join('');
};

const init = (): void => {
  fillList('github-summary', githubSummary.items);
  fillList('featured-repos', featuredRepos);
  fillList('linkedin-summary', linkedInSummary.items);
  fillList('experience', experience);
  fillList('education', education);
  fillChips('achievements', achievements);
  fillStack();

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear().toString();

  const cards = document.querySelectorAll<HTMLElement>('.reveal');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 100}ms`;
  });
};

init();
