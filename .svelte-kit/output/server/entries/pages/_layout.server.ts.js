import fs from "fs";
import path from "path";
import { D as DATE_FILE_NAME, T as TAG_FILE_NAME, N as NOW_FILE_NAME } from "../../chunks/index3.js";
import fs$1 from "fs/promises";
const getAllEligibleFiles = (dirPath, files = []) => {
  const entries = fs.readdirSync(dirPath);
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllEligibleFiles(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }
  const usableFiles = files.filter((file) => {
    const extension = file.split(".").pop();
    if (extension?.[0] === ".")
      return false;
    if (extension !== "txt" && extension !== "md")
      return false;
    return true;
  });
  return usableFiles;
};
const prerender = true;
const load = async () => {
  const allFiles = getAllEligibleFiles("./posts");
  const dateFile = await fs$1.readFile(DATE_FILE_NAME, "utf-8");
  const dateIndex = JSON.parse(dateFile);
  const tagFile = await fs$1.readFile(TAG_FILE_NAME, "utf-8");
  const tagIndex = JSON.parse(tagFile);
  const nowPage = await fs$1.readFile(NOW_FILE_NAME, "utf-8");
  allFiles.sort((a, b) => {
    return new Date(dateIndex[b]).getTime() - new Date(dateIndex[a]).getTime();
  });
  return {
    posts: allFiles,
    tagIndex,
    nowPage
  };
};
export {
  load,
  prerender
};
