<template>
    <div class="emo-tool">
        <div class="emo-tool-div">
            <el-input placeholder="请输入内容" v-model="input" size="small">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-button type="primary" size="small">搜索</el-button>
        </div>
        <div class="emo-tool-div">
            <el-input placeholder="请输入内容" v-model="input" size="small">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-button type="primary" size="small">搜索</el-button>
        </div>
        <div class="emo-tool-div">
            <el-input placeholder="请输入内容" v-model="input" size="small">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-button type="primary" size="small">搜索</el-button>
        </div>
        <div class="emo-tool-div">
            <el-input placeholder="请输入内容" v-model="input" size="small">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-button type="primary" size="small">搜索</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmoTool",
    data() {
        return {
            input: "",
        };
    },
};
</script>

<style lang="css" scoped>
.emo-tool {
    width: 1250px;
    display: flex;
    justify-content: space-evenly;
    margin: 10px 0;
}
.emo-tool-div .el-input {
    margin-right: 4px;
    width: 200px;
}
.emo-tool-div .el-button {
    width: 65px;
}
</style>