import { updateDoneTaskTotal, updateTaskTotal } from "./list.js";
import { listGroup } from "./selectors.js";



const observer = () => {


    const job = () => {
        updateTaskTotal();
        updateDoneTaskTotal();

    }

    const observerOptions = {
        childList: true,
        subtree: true,
        attributes: true,
      };
      const listGroupOberver = new MutationObserver(job);
      listGroupOberver.observe(listGroup,observerOptions)
      
}

export default observer;