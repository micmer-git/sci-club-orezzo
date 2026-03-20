/**
 * FTP deployment script for Sci Club Orezzo → Aruba hosting
 * Usage: npm run deploy (after npm run build)
 *
 * Requires: npm install basic-ftp
 * Config: .env file with FTP_HOST, FTP_USER, FTP_PASS, FTP_REMOTE_DIR
 */

import { Client } from 'basic-ftp';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');

// Load .env manually (no dotenv dependency needed)
function loadEnv() {
  try {
    const envContent = readFileSync(resolve(rootDir, '.env'), 'utf-8');
    const env = {};
    for (const line of envContent.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const [key, ...valueParts] = trimmed.split('=');
      env[key.trim()] = valueParts.join('=').trim();
    }
    return env;
  } catch {
    console.error('No .env file found. Create one with FTP_HOST, FTP_USER, FTP_PASS, FTP_REMOTE_DIR');
    process.exit(1);
  }
}

async function deploy() {
  const env = loadEnv();
  const client = new Client();
  client.ftp.verbose = true;

  try {
    console.log(`\n--- Connecting to ${env.FTP_HOST} ---\n`);

    await client.access({
      host: env.FTP_HOST,
      user: env.FTP_USER,
      password: env.FTP_PASS,
      secure: false, // Aruba may not support FTPS on all plans
    });

    const remoteDir = env.FTP_REMOTE_DIR || '/';
    const localDist = resolve(rootDir, 'dist');

    console.log(`\n--- Uploading ${localDist} → ${remoteDir} ---\n`);

    await client.ensureDir(remoteDir);
    await client.cd(remoteDir);

    // Upload all built files into the remote dir (overwrites existing)
    // Does NOT clear first — preserves any files not in the build
    await client.uploadFromDir(localDist);

    console.log('\n--- Deploy complete! ---\n');
    console.log(`Site live at: ${env.FTP_HOST}`);
  } catch (err) {
    console.error('Deploy failed:', err.message);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
