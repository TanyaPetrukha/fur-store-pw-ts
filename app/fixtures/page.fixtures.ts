import {test as base} from "@playwright/test";
import { PageManager } from "app/pages/PageManager";

type MyPages = {
    pages: PageManager
}

export const test = base.extend<MyPages>({
    pages: ({page}, use) => {
        const pages = new PageManager(page);
        use(pages);
    }
})