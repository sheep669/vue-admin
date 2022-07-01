<template>
    <div class="emo-aside">
        <el-aside width="201px">
            <emo-menu />
        </el-aside>
    </div>
</template>

<script>
import EmoMenu from "@/components/menu/index";
export default {
    name: "EmoAside",
    components: {
        EmoMenu,
    },
};
</script>

<style lang="css" scoped>
.emo-aside {
    width: 200px;
    background-color: #545c64;
    overflow-x: hidden;
}
.el-aside {
    height: 670px;
    overflow-y: auto;
    overflow-x: hidden;
}
.el-aside::-webkit-scrollbar {
    display: none;
}
</style>
