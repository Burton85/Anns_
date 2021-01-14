<template>
    <ul class="list list2">
        <router-link to="/illa1"
            ><li class="works" ref="a" :class="fadeList[0] ? 'fade' : 'fout'">
                <h1 class="work work-title">北埔鄉農會<br />通用禮盒</h1>
                <h2 class="work work-title-en">Peipu<br />Farmers’Association</h2>
                <h3 class="work work-during">APR,2020-MAY,2020</h3>
            </li></router-link
        >
        <router-link to="/illa2"
            ><li class="works" ref="b" :class="fadeList[1] ? 'fade' : 'fout'">
                <h1 class="work work-title">鹽水區農會<br />日曬意麵、帥哥番茄包裝</h1>
                <h2 class="work work-title-en">Yanshuei<br />Farmers’Association</h2>
                <h3 class="work work-during">AUG,2019-DEC,2019</h3>
            </li></router-link
        >
        <router-link to="/illa3"
            ><li class="works" ref="c" :class="fadeList[2] ? 'fade' : 'fout'">
                <h1 class="work work-title">封面設計</h1>
                <h2 class="work work-title-en">book</h2>
            </li></router-link
        >
    </ul>
</template>
<script>
export default {
    data() {
        return {
            fadeList: [false, false, false],
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
