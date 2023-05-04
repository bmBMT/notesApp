import notes from '../assets/notes.png';
import todos from '../assets/todos.png';

const appsImgs = {
  notes,
  todos,
}

export const getApps = (routes) => {
  const apps = routes.reduce((acc, route) => {
    if (route.path === "/") return acc;
    const path = route.path;
    const imgname = route.path.slice(1);
    const img = appsImgs[imgname];
    const appname = route.path[1].toUpperCase() + route.path.slice(2);

    return acc.concat({ path, img, appname });
  }, []);

  return apps;
}