import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the MetaMCP configuration
const mcpConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'metamcp.config.json'), 'utf8'));

// Group servers by priority
const serverGroups = {
  core: ['MetaMCP', 'supabase'],
  browser: ['playwright', 'browser-tools', 'browsermcp'],
  tools: ['context7', 'sequential-thinking', 'desktop-commander', 'github', 'Browserbase']
};

// Function to start an MCP server
async function startMCPServer(name, serverConfig) {
  console.log(`\nStarting ${name}...`);
  
  const env = {
    ...process.env,
    ...serverConfig.env
  };

  try {
    const child = spawn(serverConfig.command, serverConfig.args, {
      env,
      stdio: 'inherit',
      shell: true
    });

    return new Promise((resolve) => {
      let started = false;
      let error = null;

      child.on('error', (err) => {
        console.error(`Error starting ${name}:`, err);
        error = err;
      });

      child.on('exit', (code) => {
        if (code !== 0) {
          console.error(`${name} exited with code ${code}`);
          error = new Error(`Process exited with code ${code}`);
        }
      });

      // Wait for server to start
      setTimeout(() => {
        if (!error) {
          started = true;
          console.log(`✓ ${name} started successfully`);
        }
        resolve({ process: child, started, error });
      }, 5000);
    });
  } catch (error) {
    console.error(`Failed to start ${name}:`, error);
    return { process: null, started: false, error };
  }
}

// Start MCP servers in groups
async function startServerGroup(groupName, serverNames) {
  console.log(`\nStarting ${groupName} servers...`);
  const results = [];

  for (const name of serverNames) {
    if (mcpConfig.mcpServers[name]) {
      const result = await startMCPServer(name, mcpConfig.mcpServers[name]);
      results.push({ name, ...result });
    } else {
      console.error(`Configuration not found for ${name}`);
    }
  }

  return results;
}

// Start all server groups
async function startAllServers() {
  const allProcesses = [];
  const results = {
    core: await startServerGroup('Core', serverGroups.core),
    browser: await startServerGroup('Browser', serverGroups.browser),
    tools: await startServerGroup('Tools', serverGroups.tools)
  };

  // Collect all successful processes
  Object.values(results).forEach(groupResults => {
    groupResults.forEach(result => {
      if (result.started && result.process) {
        allProcesses.push(result.process);
      }
    });
  });

  return allProcesses;
}

// Handle process termination
process.on('SIGINT', async () => {
  console.log('\nShutting down all MCP servers...');
  for (const process of processes) {
    process.kill();
  }
  process.exit();
});

// Start all servers
console.log('Starting MCP servers...');
const processes = await startAllServers();
console.log('\nMCP servers started. Press Ctrl+C to stop.'); 