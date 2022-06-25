import axios from "./request"

export function getTableData(url_param) {
    return axios({
        method: "get",
        url: url_param
    })
}