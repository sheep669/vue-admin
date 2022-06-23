<template>
    <div class="emo-breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
                v-for="breadCrumbItem in breadCrumbList"
                :key="breadCrumbItem.path"
                >{{ breadCrumbItem.meta.title }}</el-breadcrumb-item
            >
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    name: "EmoBreadcrumb",
    computed: {
        breadCrumbList() {
            return this.$route.matched;
        },
    },
};
</script>

<style lang="css" scoped>
.emo-breadcrumb {
    align-self: flex-start;
    margin: 10px 0 8px 5px;
}
</style>
