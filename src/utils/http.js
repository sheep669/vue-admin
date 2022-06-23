import axios from "./request"

export function getTableData() {
    return axios({
        method: "get",
        url: `get_table_data`
    })
}