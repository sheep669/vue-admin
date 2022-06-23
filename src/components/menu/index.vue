<template>
    <div id="emo-menu">
        <el-menu
            default-active="/"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
        >
            <el-menu-item index="/">
                <i class="el-icon-s-home"></i>
                <span slot="title"> 首页 </span>
            </el-menu-item>
            <el-menu-item index="/tuanzhang">
                <i class="el-icon-s-custom"></i>
                <span slot="title">团长管理</span>
            </el-menu-item>
            <el-menu-item index="/user">
                <i class="el-icon-user"></i>
                <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="/order">
                <i class="el-icon-shopping-cart-1"></i>
                <span slot="title">订单管理</span>
            </el-menu-item>
            <el-menu-item index="/delivery">
                <i class="el-icon-bicycle"></i>
                <span slot="title">骑手管理</span>
            </el-menu-item>
            <el-menu-item index="/wuliu">
                <i class="el-icon-truck"></i>
                <span slot="title">货流管理</span>
            </el-menu-item>
            <el-menu-item index="/store">
                <i class="el-icon-box"></i>
                <span slot="title">商铺管理</span>
            </el-menu-item>
            <el-menu-item index="/brokerage">
                <i class="el-icon-wallet"></i>
                <span slot="title">佣金管理</span>
            </el-menu-item>
            <el-menu-item index="/statistic">
                <i class="el-icon-pie-chart"></i>
                <span slot="title"> 统计 </span>
            </el-menu-item>
            <el-menu-item index="/setting">
                <i class="el-icon-setting"></i>
                <span slot="title"> 设置 </span>
            </el-menu-item>
            <el-submenu index="">
                <template slot="title">
                    <i class="el-icon-set-up"></i>
                    <span>权限管理</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">用户权限</template>
                    <el-menu-item index="1-1">退出权限</el-menu-item>
                    <el-menu-item index="1-2">登陆权限</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <template slot="title">操作权限</template>
                    <el-menu-item index="2-1">编辑权限</el-menu-item>
                    <el-menu-item index="2-2">删除权限</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: "EmoMenu",
};
</script>
<style lang='css' scoped>
.el-menu-item-group {
    overflow-x: hidden;
}
</style>