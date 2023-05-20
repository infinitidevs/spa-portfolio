import { printHome } from "../pages/Home/Home";
import { printProjects } from "../pages/Projects/Projects";
import { printCareer } from "../pages/Career/Career";
import { printSandbox } from "../pages/Sandbox/Sandbox";

const routes = {
    "/": {title: "Powered by Andrés Higuita", render: printHome},
    "/lab": {title: "Tailor-Made Tech Solutions!", render: printProjects},
    "/career": {title: "Career Path", render: printCareer},
    "/sandbox": {title: "Alchemy is practiced here", render: printSandbox},
};

const handleRouter = () => {
    let page = routes[location.pathname];
    if (page) {
        document.querySelector("main").innerHTML = "";
        document.title = page.title;
        document.title.innerHTML = page.render();
    } else {
        history.replaceState(null, null, "/");
        handleRouter();
    }
};

const Listeners = () => {
    window.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
          e.preventDefault();
          history.pushState(null, null, e.target.href);
          handleRouter();
            
        }
      });
      
      window.addEventListener('popstate', handleRouter);
      window.addEventListener('DOMContentLoaded', handleRouter);
};

export const Router = () => {
    Listeners();
};