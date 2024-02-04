import fs from "fs/promises";
import { D as DATE_FILE_NAME, B as BIRTHDAY_FILE_NAME } from "../../../chunks/index3.js";
const convertPathNameToIndexName = (pathname) => {
  return pathname.split(".")?.[0].replaceAll("/", "--");
};
const load = async ({ params }) => {
  const path = params.pathName;
  const pageContent = await fs.readFile(path, "utf-8");
  const pageIndexPath = `./post-index/${convertPathNameToIndexName(path)}.json`;
  const pageIndexRaw = await fs.readFile(pageIndexPath, "utf-8");
  const pageIndex = JSON.parse(pageIndexRaw);
  const dateFile = await fs.readFile(DATE_FILE_NAME, "utf-8");
  const dateIndex = JSON.parse(dateFile);
  const postCreationDate = dateIndex[path];
  const birthday = await fs.readFile(BIRTHDAY_FILE_NAME, "utf-8");
  return { pageContent, pageIndex, postCreationDate, birthday };
};
export {
  load
};
