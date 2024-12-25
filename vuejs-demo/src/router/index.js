import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", name: "home", component: HomeView },
        { path: "/jobs", name: "jobs", component: JobsView },
    ],
});

export default router;
