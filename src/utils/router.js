import { Home } from "../pages/Home/Home";
import { Lab, LabItems } from "../pages/Lab/Lab";
import { Career, CareerItems } from "../pages/Career/Career";
import { Sandbox } from "../pages/Sandbox/Sandbox";

const routes = {
    "/": {title: "Home", render: Home},
    "/lab": {title: "Lab", render: Lab, LabItems: LabItems},
    "/career": {title: "Career", render: Career, CareerItems: CareerItems},
    "/sandbox": {title: "Sandbox", render: Sandbox},
};

const handleRouter = () => {
    let page = routes[location.pathname];
    if (page) {
        document.title = page.title;
        document.querySelector("main").innerHTML = "";
        document.querySelector("main").innerHTML = page.render();
        page.title === "Lab" ? LabItems() : CareerItems(); 
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