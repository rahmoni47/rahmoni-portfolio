export const EMAIL = 'ghedjatirahmoni@gmail.com'
export const LINKS = {
  github: 'https://github.com/rahmoni47',
  linkedin: 'https://www.linkedin.com/in/abderrahim-ghedjati-435b74281/',
  instagram: 'https://www.instagram.com/rahmoni.dev/',
}
export const REPOS = {
  bypass: 'https://github.com/rahmoni47/RenderBypassSystem',
  chat: 'https://github.com/rahmoni47/chatappWithWebsocket',
  darja: 'https://github.com/rahmoni47/darja-compiler',
  tesla: 'https://github.com/rahmoni47/TeslaUI',
}
export const STACK: { group: string; why: string; items: string[] }[] = [
  { group: 'Backend', why: 'Where most of my work happens.', items: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'GraphQL'] },
  { group: 'Data', why: 'Storing it, and getting it back quickly.', items: ['PostgreSQL', 'Redis', 'MongoDB'] },
  { group: 'Infrastructure', why: 'Shipping and watching what I build.', items: ['Docker', 'Jenkins', 'Grafana', 'CI/CD'] },
  { group: 'Frontend', why: 'Enough to deliver a complete product.', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { group: 'Systems and desktop UI', why: 'Closer to the machine.', items: ['C++', 'Qt Quick', 'QML'] },
  { group: 'Tooling', why: 'Everyday working tools.', items: ['Git', 'Swagger', 'Keycloak', 'JUnit'] },
]
export const PRINCIPLES: { title: string; body: string }[] = [
  { title: 'Separate concerns early', body: 'Controllers, services and persistence each do one job. It is the cheapest way to keep a codebase changeable.' },
  { title: 'Make the API predictable', body: 'Clear contracts, consistent errors and documented endpoints, so the people using the API never have to guess.' },
  { title: 'Treat the database as a design decision', body: 'Model data around how it is queried, then check the queries. Redis where caching earns its place.' },
  { title: 'Secure by default', body: 'Authentication and authorization belong in the architecture from the start, not bolted on before launch. Keycloak is part of my toolkit.' },
  { title: 'Respect resources', body: 'Small services, no work that does not need to run, and nothing on the critical path that can wait.' },
  { title: 'Ship it and keep it running', body: 'Containerised builds, CI/CD pipelines and monitoring are part of finishing a feature.' },
]
