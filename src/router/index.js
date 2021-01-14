import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Index",
        component: () => import("../views/Index.vue"),
        props: true,
        meta: {
            title: "ANN's Web",
        },
    },
    {
        path: "/uiux",
        name: "uiux",
        component: () => import("../views/List.vue"),
        meta: {
            title: "UI/UX",
        },
    },
    {
        path: "/illustrator",
        name: "illustrator",
        component: () => import("../views/List2.vue"),
        meta: {
            title: "ILLUSTRATOR",
        },
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import("../views/Contact.vue"),
        meta: {
            title: "CONTACT",
        },
    },
    {
        path: "/figma",
        name: "figma",
        component: () => import("../views/Figma.vue"),
        meta: {
            title: "UI/UX",
        },
    },
    {
        path: "/mado",
        name: "mado",
        component: () => import("../views/Mado.vue"),
        meta: {
            title: "UI/UX",
        },
    },
    {
        path: "/illa1",
        name: "illustrator1",
        component: () => import("../views/Illustrator1.vue"),
        meta: {
            title: "ILLUSTRATOR",
        },
    },
    {
        path: "/illa2",
        name: "illustrator2",
        component: () => import("../views/Illustrator2.vue"),
        meta: {
            title: "ILLUSTRATOR",
        },
    },
    {
        path: "/illa3",
        name: "illustrator3",
        component: () => import("../views/Illustrator3.vue"),
        meta: {
            title: "ILLUSTRATOR",
        },
    },
    {
        path: "/affinity",
        name: "affinity",
        component: () => import("../views/Affinity.vue"),
        meta: {
            title: "UI/UX",
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
router.beforeEach(function(to, from, next) {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
    next();
});
export default router;
