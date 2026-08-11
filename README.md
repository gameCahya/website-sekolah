# Nama Project Sekolah

Website sekolah menggunakan Astro + Sanity CMS

## Tech Stack
- **Frontend**: Astro
- **CMS**: Sanity Studio
- **Language**: TypeScript

## Setup Local Development

### 1. Clone Repository
```bash
git clone https://github.com/username/repo-name.git
cd repo-name
```

### 2. Install Dependencies
```bash
# Install Astro dependencies
pnpm install

# Install Sanity Studio dependencies
cd sanity-studio
pnpm install
cd ..
```

### 3. Setup Environment Variables
```bash
# Copy .env.example ke .env
cp .env.example .env

# Edit .env dan isi dengan credentials Anda
```

### 4. Run Development Server

**Terminal 1 - Astro:**
```bash
pnpm run dev
```

**Terminal 2 - Sanity Studio:**
```bash
cd sanity-studio
pnpm run dev
```

### 5. Open Browser
- Astro: http://localhost:4321
- Sanity Studio: http://localhost:3333

## Deploy

### Astro (Vercel/Netlify)
[Instruksi deploy]

### Sanity Studio
```bash
cd sanity-studio
pnpm run deploy
```
