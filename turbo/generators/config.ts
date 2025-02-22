import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("add-game", {
    description:
      "Add a new Astro project with a folder inside for game files",
    prompts: [
      {
        type: "input",
        name: "folder",
        message: "What is the name of the new game project?",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "{{ turbo.paths.root }}/apps/{{ dashCase folder }}/",
        templateFiles: "templates/add-game/**",
      },
    ],
  });
}
