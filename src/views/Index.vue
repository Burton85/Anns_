<template>
    <div class="index">
        <div class="slider">
            <!-- <div class="wrapper" :style="coverUrl.length>1 ? 'background:url(' + coverUrl[0].url + ') no-repeat center/100%' : ''">
                <img :src="coverUrl.length>1 ? coverUrl[4].url : ''" alt class="pic" :class="loadImg ? 'pic pic-load' : ''" />
            </div> -->
            <div class="flower"></div>
            <div class="flower"></div>
            <div class="flower"></div>
        </div>
    </div>
</template>
<script>
// import { toRefs, reactive,ref } from "vue";
// import axios from "axios";

// const getData = async () => {
//     var value = await axios
//         .get("https://trello.com/card/5ff5b05acbd77e3e5262e2dc/-.json")
//         .then(function(response) {
//             console.log(response);
//             return response.data.cover.scaled;
//         })
//         .catch(function(error) {
//             alert(error);
//         });
//     return value;
// };

export default {
    name: "index",
//     setup() {
//         let loadImg = ref(false);
//         let state = reactive({
//             coverUrl: [],
//         });
//         getData().then((item) => {
//             state.coverUrl = item;
//         });
//         return {
//             loadImg,
//             ...toRefs(state),
//         };
//     },
//     mounted() {
//         setTimeout(() => {
//             this.loadImg = true;
//         }, 1000);
//     },
};
</script>
