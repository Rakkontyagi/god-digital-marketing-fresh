import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the MetaMCP configuration
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'metamcp.config.json'), 'utf8'));

// Function to start an MCP server
function startMCPServer(name, config) {
  console.log(`Starting ${name}...`);
  
  const env = {
    ...process.env,
    ...config.env
  };

  const child = spawn(config.command, config.args, {
    env,
    stdio: 'inherit',
    shell: true
  });

  child.on('error', (error) => {
    console.error(`Error starting ${name}:`, error);
  });

  child.on('exit', (code) => {
    if (code !== 0) {
      console.error(`${name} exited with code ${code}`);
    }
  });

  return child;
}

// Start all MCP servers
const processes = Object.entries(config.mcpServers).map(([name, config]) => {
  return startMCPServer(name, config);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\nShutting down all MCP servers...');
  processes.forEach(process => process.kill());
  process.exit();
});

console.log('All MCP servers started. Press Ctrl+C to stop.'); 