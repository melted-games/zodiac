import { PlopTypes } from "@turbo/gen";
import { exec } from "node:child_process";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("add-game", {
    description: "Add a new Astro project with a folder inside for game files",
    prompts: [
      {
        type: "input",
        name: "folder",
        message: "What is the name of the new game project?",
      },
    ],
    actions: [
      async function customAction(params) {
        const { folder } = params as { folder: string };
        return new Promise((resolve, reject) => {
          exec(
            `pnpm create astro@latest ./apps/${folder} -- --template melted-games/zodiac-add-game --install --no-git --skip-houston`,
            (error, stdout, stderr) => {
              if (error) {
                console.error(`Error: ${error.message}`);
                reject(error);
              }
              if (stderr) {
                console.error(stderr);
                reject(new Error(stderr));
              }
              console.log(stdout);
              resolve(stdout);
            },
          );
        });
      },
    ],
  });
}
