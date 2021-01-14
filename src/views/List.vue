<template>
    <ul class="list">
        <router-link to="/mado"
            ><li class="works" ref="a" :class="fadeList[0] ? 'fade' : 'fout'">
                <h1 class="work work-title">麻豆區農會<br />官方網站</h1>
                <h2 class="work work-title-en">Madou<br />Farmers’Association</h2>
                <h3 class="work work-during">MAY,2020-JUN,2020</h3>
            </li></router-link
        >
        <router-link to="/affinity"
            ><li class="works" ref="b" :class="fadeList[1] ? 'fade' : 'fout'">
                <h1 class="work work-title">旅遊景點、預定飯店<br />app</h1>
                <h2 class="work work-title-en">Tripadvisor</h2>
                <h3 class="work work-during">DEC,2020-DEC,2020</h3>
            </li></router-link
        >
        <router-link to="/figma"
            ><li class="works" ref="c" :class="fadeList[2] ? 'fade' : 'fout'">
                <h1 class="work work-title">視覺作品</h1>
                <h2 class="work work-title-en">FIGMA <br />works</h2>
                <h3 class="work work-during">DEC,2020-JAN,2021</h3>
            </li></router-link
        >
    </ul>
</template>
<script>
export default {
    data() {
        return {
            fadeList: [false, false, false],
            listener: {},
        };
    },
    mounted() {
        this.fadeList[0] = true;
        document.addEventListener("scroll", () => {
            if (this.$refs.a) {
                for (let i = 0; i < 3; i++) {
                    switch (i) {
                        case 0:
                            if (this.$refs.a.getBoundingClientRect().top - window.innerHeight < -200) {
                                this.fadeList[i] = true;
                            } else {
                                this.fadeList[i] = false;
                            }
                            break;
                        case 1:
                            if (this.$refs.b.getBoundingClientRect().top - window.innerHeight < -200) {
                                this.fadeList[i] = true;
                            } else {
                                this.fadeList[i] = false;
                            }
                            break;
                        case 2:
                            if (this.$refs.c.getBoundingClientRect().top - window.innerHeight < -200) {
                                this.fadeList[i] = true;
                            } else {
                                this.fadeList[i] = false;
                            }
                            break;
                    }
                }
            }
        });
    },
};
</script>
