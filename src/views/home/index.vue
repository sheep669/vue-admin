<template>
    <div id="emo-home">
        <emo-table2 :config="table_Config" />
        <!-- <emo-table /> -->
    </div>
</template>

<script>
// import EmoTable from "@/components/table/index";
import EmoTable2 from "@/components/table/table.vue";
export default {
    name: "EmoHome",
    components: {
        // EmoTable,
        EmoTable2,
    },
    data() {
        return {
            table_Config: {
                thead: [
                    {
                        prop: "date",
                        label: "日期",
                        width: "180",
                    },
                    {
                        prop: "name",
                        label: "姓名",
                        width: "180",
                    },
                    {
                        prop: "status",
                        label: "禁启用",
                        width: "180",
                        type: "switch",
                    },
                    {
                        prop: "type",
                        label: "类型",
                        width: "180",
                        type: "function",
                        callback: (type) => {
                            // console.log("type", type);
                            // console.log(typeof type);
                            if (type && type == 0) {
                                return "直女";
                            } else if (type && type == 1) {
                                return "直男";
                            }
                        },
                    },

                    {
                        prop: "imgurl",
                        label: "证件照",
                        width: "180",
                        type: "image",
                        callback: () => {},
                    },
                    {
                        prop: "address",
                        label: "地址",
                        width: "180",
                    },
                ],
                checkbox: true,
                url: `/get_table_data`,
            },
            tableData: [],
        };
    },
};
</script>

<style lang="css" scoped>
</style>
