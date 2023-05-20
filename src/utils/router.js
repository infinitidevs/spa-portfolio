import { printHome } from "../pages/Home/Home";
import { printProjects } from "../pages/Projects/Projects";
import { printCareer } from "../pages/Career/Career";
import { printSandbox } from "../pages/Sandbox/Sandbox";

const routes = {
    "/": {title: "/", render: printHome},
    "/lab": {title: "Lab", render: printProjects},
    "/career": {title: "Career", render: printCareer},
    "/sandbox": {title: "Sandbox", render: printSandbox},
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