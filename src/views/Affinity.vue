<template>
    <div class="affinity">
        <div class="diagram">
            <h1 class="diagram-tit">Tripadvisor<br />旅行規劃、預定飯店app</h1>
            <div class="dot-con">
                <img src="@/assets/img/dot.png" class="dot" alt="" />
            </div>
            <p class="diagram-p">使用者研究課程</p>
        </div>
        <h1 class="aff_tit">
            使用者訪談紀錄單
        </h1>
        <ul class="aff_box">
            <li class="aff_question">
                <h1 class="qa_tit">Q1</h1>
                <p class="qa_con">在平時工作日的生活是什麼樣的呢？（這星期的工作日是什麼樣的）</p>
            </li>
            <li class="aff_question">
                <h1 class="qa_tit">Q2</h1>
                <p class="qa_con">一班會怎麼渡過休假日呢？（最近休假日怎麼渡過的）</p>
            </li>
            <li class="aff_question">
                <h1 class="qa_tit">Q3</h1>
                <p class="qa_con">什麼情況下想要去旅行呢？（旅行目標、動機）</p>
            </li>
            <li class="aff_question">
                <h1 class="qa_tit">Q4</h1>
                <p class="qa_con">擁有哪些3c產品？旅行的過程中會怎麼使用這些3C產品？（為什麼）</p>
            </li>
            <li class="aff_question">
                <h1 class="qa_tit">Q5</h1>
                <p class="qa_con">目前使用什麼方式規劃旅遊？請敘述一下規劃流程？<br />（為什麼會用這種方式規劃）</p>
            </li>
            <li class="aff_question">
                <h1 class="qa_tit">Q6</h1>
                <p class="qa_con">在規劃旅遊的過程中，你最常做的事情是什麼？</p>
            </li>
            <li class="aff_question">
                <h1 class="qa_tit">Q7</h1>
                <p class="qa_con">透過哪些方式或手段蒐集「景點或餐廳」「住宿」的相關資料？</p>
            </li>
            <li class="aff_question">
                <h1 class="qa_tit">Q8</h1>
                <p class="qa_con">哪些因素會影響你決定「景點或餐廳」「住宿」？<br />（為什麼這些因素會影響你的決定？）</p>
            </li>
            <li class="aff_question">
                <h1 class="qa_tit">Q9</h1>
                <p class="qa_con">通常在安排「景點或餐廳」、尋找「住宿」上花費多少時間？覺得什麼部分最浪費你的時間？</p>
            </li>
            <li class="aff_question">
                <h1 class="qa_tit">Q10</h1>
                <p class="qa_con">最後一次旅行是什麼時候？過程中遇到什麼困難？怎麼解決這些困難的呢？（為什麼會採取這種方式？）</p>
            </li>
        </ul>
        <h1 class="aff_tit">
            親合圖
        </h1>
        <img src="@/assets/img/aff-1.jpg" alt="" />
        <h3 class="aff_content">將訪談過程中有趣或特別點以敘述方式列出關鍵片段，建立「小卡」（黃色） 並從分散的具體資料一層一層找出抽象的上層概念，並歸納萃取出關連性做有意的分類，將小群組整理合成大群組（橘色），幫助接下來制定Persona、定義問題，轉化為設計目標。</h3>
        <h3 class="aff_content">也於探索階段在兩側以關鍵洞見、任務需求，去了解「想做什麼」及「必須完成的任務」。（綠色）</h3>
        <h1 class="aff_tit">
            PERSONA
        </h1>
        <img src="@/assets/img/aff-2.jpg" alt="" />
        <h1 class="aff_tit">
            使用者旅程圖
        </h1>
        <img src="@/assets/img/aff-3.jpg" alt="" />

        <h3 class="aff_content">經過使用者故事我們列出五項需求覺得重要且需更新。</h3>
        <h3 class="aff_content">
            需求1：我想要和兒女多一些時間相處，可以增進感情。<br />
            需求2：我想要有一個依據旅客年齡層，推薦景點的功能，協助我安排行程時可以考慮到長輩需求。<br />
            <span>需求3：我想要看到一般旅客在現場拍的照片，這樣我不會到飯店發現圖文不符。</span> <br />
            需求4：我想要和兒女出遊，這樣能能讓朋友們羨慕。<br />
            需求5：我想要知道哪些景點有拍照點，這樣就能將景點納入安排中。
        </h3>
        <h3 class="aff_content">最後透過狩野分析、KANO評價結果分量表，最後得出需求3是最需要優化的。</h3>
        <h1 class="aff_tit">
            對應目標設計
        </h1>
        <div class="aff_container">
            <img src="@/assets/img/aff-4.jpg" alt="" />
            <h3 class="aff_content">
                <h1>訪客相片上傳列表</h1>
                <p>
                    增加訪客上傳列表，可以快速瀏覽一般旅客上傳的照片，如放入評論的下層，會造成點入層級過多，無法第一時間判斷照片真實性。
                </p>
            </h3>

            <img src="@/assets/img/aff-5.jpg" alt="" />
        </div>
    </div>
</template>
