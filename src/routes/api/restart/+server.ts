import { exec } from 'child_process';
import { promisify } from 'util';
import appConfig from '../../../../app-config'

const execPromise = promisify(exec);

export const POST = async () => {
	try {
		const { stdout, stderr } = await execPromise(appConfig.command, {
			cwd: appConfig.targetDir
		});

		if (stderr) {
			return new Response(`Failed to restart: ${stderr}`, { status: 500 });
		}

		return new Response(`${stdout}`, { status: 200 });
	} catch (error) {
		return new Response(`Error occurred while restarting: ${error}`, { status: 500 });
	}
};
