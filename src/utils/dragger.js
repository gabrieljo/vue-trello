import dragula from "dragula";
import "dragula/dist/dragula.css";

const dragger = {
  init(container) {
    return dragula([...container]);
  },
  siblings({ el, wrapper, candidates, type }) {
    const typeId = `${type}Id`;
    const typePos = `${type}Pos`;
    const curId = el.dataset[typeId] * 1;
    let prev = null;
    let next = null;

    candidates.forEach((el, idx, arr) => {
      const id = el.dataset[typeId] * 1;
      if (id == curId) {
        prev =
          idx > 0
            ? {
                id: arr[idx - 1].dataset[typeId] * 1,
                pos: arr[idx - 1].dataset[typePos] * 1
              }
            : null;

        next =
          idx < arr.length - 1
            ? {
                id: arr[idx + 1].dataset[typeId] * 1,
                pos: arr[idx + 1].dataset[typePos] * 1
              }
            : null;
      }
    });

    return { prev, next };
  }
};

export default dragger;
