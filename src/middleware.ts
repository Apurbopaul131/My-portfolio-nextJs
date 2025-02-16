export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/create-project",
    "/dashboard/projects",
    "/dashboard/view-messages",
    "/dashboard/blogs",
    "/dashboard/create-blog",
  ],
};
