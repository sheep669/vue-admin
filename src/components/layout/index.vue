<template>
    <div id="emo-layout">
        <el-container>
            <el-header>
                <emo-header />
            </el-header>
            <el-container>
                <emo-aside />
                <el-container>
                    <el-main>
                        <emo-breadcrumb />
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import EmoHeader from "@/components/header/index";
import EmoAside from "@/components/aside/index";
import EmoBreadcrumb from "@/components/breadcrumb/index";
export default {
    name: "EmoLayout",
    components: {
        EmoHeader,
        EmoAside,
        EmoBreadcrumb,
    },
};
</script>

<style lang="css" scoped>
.el-header {
    padding: 0;
    background-color: #252526;
}
.el-main {
    height: 800px;
    padding: 0;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.el-main::-webkit-scrollbar {
    display: none;
}
html ::-webkit-scrollbar {
    display: none;
}
</style>
