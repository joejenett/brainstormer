import { r as redirect } from "../../chunks/index.js";
const load = async ({ parent }) => {
  const data = await parent();
  const nowPage = data.nowPage;
  if (nowPage && nowPage.length > 0)
    throw redirect(302, nowPage);
  return {};
};
export {
  load
};
